import React, { useState } from 'react';
import puterService from '../utils/puterService';

const DocumentUpload = ({ onDocumentUploaded, currentDocument }) => {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = async (file) => {
    if (!file) return;

    // Validate file type
    if (file.type !== 'application/pdf') {
      setError('Please select a PDF file only.');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB.');
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setUploadProgress(0);
    setError('');

    try {
      console.log('Starting upload with pdf-parse text extraction...');
      
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      // Upload PDF with text extraction using PDF → Image → AI approach
      const result = await puterService.uploadPDFToCloud(selectedFile);
      
      clearInterval(progressInterval);
      setUploadProgress(100);

      if (result.success) {
        console.log('Upload successful:', result);
        
        // Pass both URL and extracted text to parent
        onDocumentUploaded(result.url, result.extractedText);

        // Show success message
        setSuccess(
          `Document "${result.filename}" uploaded successfully! (${(result.size / 1024 / 1024).toFixed(2)} MB)
          
Text extracted: ${result.extractedText ? result.extractedText.substring(0, 200) + '...' : 'No text extracted'}`
        );
        
        setTimeout(() => {
          setSelectedFile(null);
          setUploadProgress(0);
          setDragActive(false);
        }, 1500);
        
      } else {
        throw new Error(result.error || 'Upload failed');
      }

    } catch (error) {
      console.error('Upload error:', error);
      setError(error.message || 'Upload failed. Please try again.');
      setUploadProgress(0);
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  return (
    <div className="document-upload-section">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">
          <i className="bi bi-cloud-upload"></i> Course Document
        </h6>
        {(error || success) && (
          <button 
            className="btn btn-sm btn-outline-secondary"
            onClick={clearMessages}
          >
            <i className="bi bi-x"></i>
          </button>
        )}
      </div>

      {/* Current Document Display */}
      {currentDocument && (
        <div className="alert alert-info mb-3">
          <div className="d-flex align-items-center">
            <i className="bi bi-file-earmark-pdf fs-4 me-2"></i>
            <div>
              <strong>Current Document:</strong> {currentDocument.split('/').pop()}
              <small className="d-block text-muted">
                Upload a new document to replace the current one.
              </small>
            </div>
          </div>
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`upload-area border-2 border-dashed rounded p-4 text-center position-relative ${
          dragActive ? 'border-primary bg-light' : 'border-secondary'
        } ${uploading ? 'opacity-75' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        style={{ 
          minHeight: '140px', 
          cursor: uploading ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        {uploading ? (
          <div className="d-flex flex-column align-items-center">
            <div className="spinner-border text-primary mb-2" role="status"></div>
            <span className="mb-2">Uploading to Puter Cloud...</span>
            <div className="progress w-75">
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated" 
                role="progressbar" 
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress}%
              </div>
            </div>
          </div>
        ) : (
          <>
            <i className="bi bi-cloud-upload fs-1 text-muted mb-3"></i>
            <h6 className="mb-2">
              <strong>Drag & drop</strong> your PDF document here
            </h6>
            <p className="mb-2">
              or{' '}
              <label htmlFor="document-upload" className="text-primary fw-bold" style={{ cursor: 'pointer' }}>
                browse files
              </label>
            </p>
            <small className="text-muted">
              <i className="bi bi-info-circle"></i> Supports PDF files up to 10MB
            </small>
            <input
              id="document-upload"
              type="file"
              accept=".pdf"
              onChange={handleInputChange}
              style={{ display: 'none' }}
              disabled={uploading}
            />
          </>
        )}
      </div>

      {/* Upload Button - Outside drag area */}
      {selectedFile && !uploading && (
        <div className="text-center mt-3">
          <button 
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
          >
            <i className="bi bi-cloud-upload"></i> Upload Document
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          <i className="bi bi-exclamation-triangle"></i> {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          <i className="bi bi-check-circle"></i> {success}
        </div>
      )}

      {/* Instructions */}
      <div className="mt-3 p-3 bg-light rounded">
        <h6 className="text-primary mb-2">
          <i className="bi bi-lightbulb"></i> How it works:
        </h6>
        <ul className="small mb-0 text-muted">
          <li>Documents are stored securely on <strong>Puter Cloud</strong></li>
          <li>Students can view PDFs in a popup window</li>
          <li><strong>AI Summarization</strong> extracts key points automatically</li>
          <li>Real-time text extraction using PDF.js technology</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentUpload;

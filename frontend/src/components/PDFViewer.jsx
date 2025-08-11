import React, { useState, useEffect } from 'react';
import puterService from '../utils/puterService';

const PDFViewer = ({ documentUrl, onTextExtracted }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    if (documentUrl) {
      loadPDF();
    }
    return () => {
      // Cleanup blob URL
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [documentUrl]);

  const loadPDF = async () => {
    setLoading(true);
    setError('');
    
    try {
      console.log('Loading PDF for display...');
      
      // Read PDF from cloud for display
      const { url } = await puterService.readPDFFromCloud(documentUrl);
      setPdfUrl(url);
      
      // Get metadata using pdf-parse
      const pdfMetadata = await puterService.getPDFMetadata(documentUrl);
      setMetadata(pdfMetadata);
      
      console.log('PDF loaded successfully:', {
        pages: pdfMetadata?.numPages,
        title: pdfMetadata?.title
      });
      
    } catch (error) {
      console.error('PDF loading error:', error);
      setError('Failed to load PDF document. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading PDF...</span>
        </div>
        <span className="ms-2">Loading PDF...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <i className="bi bi-exclamation-triangle"></i> {error}
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="alert alert-info" role="alert">
        <i className="bi bi-info-circle"></i> No PDF document available.
      </div>
    );
  }

  return (
    <div className="pdf-viewer">
      {metadata && (
        <div className="mb-3">
          <h6 className="mb-1">
            📄 {metadata.title || 'Course Document'}
          </h6>
          <small className="text-muted">
            {metadata.numPages} pages
            {metadata.author !== 'Unknown' && ` • by ${metadata.author}`}
          </small>
        </div>
      )}
      
      <div className="border rounded" style={{ height: '600px' }}>
        <iframe
          src={pdfUrl}
          width="100%"
          height="100%"
          style={{ border: 'none', borderRadius: '0.375rem' }}
          title="Course Document"
        />
      </div>
      
      <div className="mt-2">
        <small className="text-muted">
          <i className="bi bi-info-circle"></i> 
          PDF loaded from Puter cloud storage
        </small>
      </div>
    </div>
  );
};

export default PDFViewer;

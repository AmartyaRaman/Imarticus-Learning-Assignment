import React, { useState, useEffect } from 'react';
import puterService from '../utils/puterService';

const PDFPopup = ({ isOpen, onClose, documentUrl, courseTitle, extractedText }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [summarizing, setSummarizing] = useState(false);
  const [summaryStats, setSummaryStats] = useState(null);
  const [showFormatted, setShowFormatted] = useState(false);
  const [error, setError] = useState('');
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    if (isOpen && documentUrl) {
      loadPDF();
    }
    return () => {
      // Cleanup blob URL
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [isOpen, documentUrl]);

  const loadPDF = async () => {
    setLoading(true);
    setError('');
    
    try {
      console.log('Loading PDF for display...');
      
      // Read PDF from cloud for display
      const { url } = await puterService.readPDFFromCloud(documentUrl);
      setPdfUrl(url);
      
      console.log('PDF loaded successfully for display');
    } catch (error) {
      console.error('Error loading PDF:', error);
      setError('Failed to load PDF. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSummarize = async () => {
    setSummarizing(true);
    setSummary('');
    setError('');
    try {
      // Always use the improved PDF → Image → AI extraction for better results
      console.log('Starting comprehensive PDF summarization...');
      const result = await puterService.summarizePDF(documentUrl);
      
      if (result.success) {
        setSummary(result.summary);
        setSummaryStats({ 
          wordCount: result.wordCount, 
          pageCount: result.pageCount || 'Multiple' 
        });
      } else {
        setError(result.error || 'Failed to generate summary');
      }
    } catch (error) {
      console.error('Summarization error:', error);
      setError('Failed to generate summary. Please try again.');
    } finally {
      setSummarizing(false);
    }
  };

  const toggleFormatted = () => {
    setShowFormatted(!showFormatted);
  };

  const formatSummaryText = (text) => {
    if (!showFormatted) return text;
    
    // Apply basic formatting for better readability
    return text
      .replace(/(\d+\.\s)/g, '\n$1') // New line before numbered lists
      .replace(/([•·-]\s)/g, '\n  $1') // New line before bullet points with indent
      .replace(/([A-Z][^.!?]*[.!?])\s*([A-Z])/g, '$1\n\n$2') // Paragraph breaks
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Clean up multiple line breaks
      .trim();
  };

  const handleClose = () => {
    setSummary('');
    setError('');
    setSummaryStats(null);
    setShowFormatted(false);
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }
    onClose();
  };

  if (!isOpen) return null;

  const hasExtractedText = extractedText && extractedText.length > 0;
  const showSidePanel = summary || hasExtractedText;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h5 className="modal-title mb-1">
                📄 {metadata?.title || 'Course Document'} - {courseTitle}
              </h5>
              {metadata && (
                <small className="text-muted">
                  {metadata.numPages} pages • {metadata.author !== 'Unknown' ? `by ${metadata.author}` : ''}
                  {hasExtractedText && ` • Text extracted and formatted (${extractedText.length} chars)`}
                </small>
              )}
            </div>
            <button 
              type="button" 
              className="btn-close" 
              onClick={handleClose}
            ></button>
          </div>
          
          <div className="modal-body" style={{ height: '70vh' }}>
            {loading && (
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading PDF...</span>
                </div>
                <span className="ms-2">Loading PDF...</span>
              </div>
            )}

            {error && (
              <div className="alert alert-danger" role="alert">
                <i className="bi bi-exclamation-triangle"></i> {error}
              </div>
            )}

            {pdfUrl && !loading && (
              <div className="row h-100">
                {/* PDF Viewer or Summary */}
                <div className={`col-${showSidePanel ? '8' : '12'} h-100`}>
                  {summary ? (
                    <div className="card h-100">
                      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">
                          <i className="bi bi-robot"></i> AI Summary
                        </h6>
                        {summaryStats && (
                          <small>
                            {summaryStats.pageCount}p • {summaryStats.wordCount}w
                          </small>
                        )}
                      </div>
                      <div className="card-body overflow-auto">
                        <div className="content">
                          {formatSummaryText(summary).split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-2">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          <i className="bi bi-lightbulb"></i> 
                          Generated by Puter AI
                        </small>
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={toggleFormatted}
                        >
                          {showFormatted ? 'Hide Formatting' : 'Show Formatting'}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={pdfUrl}
                      width="100%"
                      height="100%"
                      style={{ border: '1px solid #dee2e6', borderRadius: '0.375rem' }}
                      title="Course Document"
                    />
                  )}
                </div>

                {/* Side Panel - Text */}
                {showSidePanel && !summary && (
                  <div className="col-4 h-100">
                    <div className="card h-100">
                      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                        <h6 className="mb-0">
                          <i className="bi bi-file-text"></i> Extracted & Formatted Text
                        </h6>
                      </div>
                      <div className="card-body overflow-auto">
                        <div className="content">
                          <div className="small">
                            <p className="text-muted mb-2">Extracted and AI-formatted text:</p>
                            <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.9em', lineHeight: '1.4' }}>
                              {extractedText}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          <i className="bi bi-lightbulb"></i> 
                          Extracted with pdf-parse & formatted by AI
                        </small>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSummarize}
              disabled={summarizing || loading || !pdfUrl}
            >
              {summarizing ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Generating Summary...
                </>
              ) : (
                <>
                  <i className="bi bi-robot"></i> Summarize with AI
                </>
              )}
            </button>
            
            {summary && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  setSummary('');
                  setSummaryStats(null);
                }}
              >
                Hide Summary
              </button>
            )}
            
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFPopup;

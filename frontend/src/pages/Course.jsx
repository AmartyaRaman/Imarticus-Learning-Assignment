import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Breadcrumb from '../components/Breadcrumb';
import CourseCard from '../components/CourseCard';
import CertificateCard from '../components/CertificateCard';
import PDFPopup from '../components/PDFPopup';
import DocumentUpload from '../components/DocumentUpload';

export default function Course() {
  const [showPDFPopup, setShowPDFPopup] = useState(false);
  const [uploadedDocumentUrl, setUploadedDocumentUrl] = useState('');
  const [extractedText, setExtractedText] = useState('');
  const [currentDocument, setCurrentDocument] = useState(null);
  const [showUploadArea, setShowUploadArea] = useState(false);

  // Handle document upload from DocumentUpload component
  const handleDocumentUploaded = (documentUrl, textContent) => {
    setUploadedDocumentUrl(documentUrl);
    setExtractedText(textContent || '');
    setCurrentDocument(documentUrl);
    console.log('Document uploaded:', { documentUrl, textContent });
    // Hide upload area after successful upload
    setShowUploadArea(false);
  };

  // Handle opening PDF popup (can be called from CourseCard or DocumentUpload)
  const handleOpenPDFPopup = (documentUrl = null, textContent = null) => {
    if (documentUrl) {
      setUploadedDocumentUrl(documentUrl);
      setExtractedText(textContent || '');
    }
    setShowPDFPopup(true);
  };

  return (
    <div>
      <div className="d-flex vh-100 flex-row">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="d-none d-lg-flex col-lg-2 border-end" style={{
          backgroundColor: 'rgb(3, 86, 66)',
          minHeight: '100vh'
        }}>
          <SideBar />
        </div>
        
        {/* Main content area */}
        <div className="col-12 col-lg-10" style={{
          backgroundColor: 'rgb(242, 246, 249)',
          minHeight: '100vh',
          overflowY: 'auto'
        }}>
          <NavBar />
          <div className="px-3 px-md-5 my-5">
            <Breadcrumb />
          </div>
          
          {/* Document Upload Toggle Button */}
          <div className="px-3 px-md-5 mb-3">
            <button 
              className="btn btn-primary"
              onClick={() => setShowUploadArea(!showUploadArea)}
              style={{ backgroundColor: 'rgb(3, 86, 66)', borderColor: 'rgb(3, 86, 66)' }}
            >
              <i className={`bi ${showUploadArea ? 'bi-chevron-up' : 'bi-cloud-upload'}`}></i>
              {showUploadArea ? ' Hide Upload Area' : ' Upload Course Document'}
            </button>
          </div>
          
          {/* Document Upload Section - Collapsible */}
          {showUploadArea && (
            <div className="px-3 px-md-5 mb-4">
              <div className="card shadow-sm" style={{ backgroundColor: 'white', borderRadius: '12px', border: 'none' }}>
                <div className="card-body p-4">
                  <DocumentUpload 
                    onDocumentUploaded={handleDocumentUploaded}
                    currentDocument={currentDocument}
                  />
                </div>
              </div>
            </div>
          )}
          
          <div className="px-3 px-md-5">
            <CourseCard 
              onOpenPDFPopup={handleOpenPDFPopup}
              currentDocument={currentDocument}
            />
          </div>
          <div className="px-3 px-md-5 mt-4">
            <CertificateCard />
          </div>
        </div>
      </div>

      {/* PDF Popup Modal */}
      {showPDFPopup && (
        <PDFPopup 
          isOpen={showPDFPopup}
          onClose={() => setShowPDFPopup(false)}
          documentUrl={uploadedDocumentUrl}
          extractedText={extractedText}
          courseTitle="Course Document"
        />
      )}
    </div>
  );
}

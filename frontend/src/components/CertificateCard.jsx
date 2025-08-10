import React from 'react'

function CertificateCard() {
  return (
    <div className="card shadow-sm" style={{ backgroundColor: 'white', borderRadius: '12px', border: 'none' }}>
      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div 
              className="me-3 d-flex align-items-center justify-content-center rounded"
              style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef'
              }}
            >
              <img 
                src="/certificate_neutral.svg" 
                alt="Certificate" 
                style={{ width: '32px', height: '32px' }}
              />
            </div>
            <div>
              <h5 className="mb-1 fw-bold" style={{ color: '#2c3e50' }}>
                Certificate
              </h5>
              <p className="mb-0 text-muted small">
                🔒 Complete the course to download the certificate
              </p>
            </div>
          </div>
          <button 
            className="btn px-4 py-2 fw-semibold"
            style={{ 
              backgroundColor: 'rgb(3, 86, 66)', 
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              opacity: 0.6
            }}
            onMouseEnter={(e) => e.target.style.cursor = 'not-allowed'}
            onMouseLeave={(e) => e.target.style.cursor = 'default'}
            onClick={(e) => e.preventDefault()}
          >
            Get Certificate
          </button>
        </div>
      </div>
    </div>
  )
}

export default CertificateCard

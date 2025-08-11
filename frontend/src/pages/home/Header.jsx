import React from 'react'

export default function Header() {
  const navItems = [
    'Overview',
    'Hiring Partners',
    'Curriculum',
    'Trainers',
    'Projects',
    'Success stories',
    'Pricing',
    'FAQs'
  ];

  return (
    <header className="bg-white shadow-sm sticky-top" style={{ zIndex: 1020 }}>
      {/* Logo Section */}
      <div className="container-fluid px-3 px-md-4 py-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-auto">
            <img 
              src="/home/header.svg" 
              alt="Imarticus Learning" 
              className="img-fluid"
              style={{ height: '40px', maxHeight: '50px' }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div style={{ backgroundColor: 'rgb(3, 86, 66)' }}>
        <div className="container-fluid px-0">
          {/* Desktop Navigation */}
          <nav className="d-none d-lg-flex justify-content-center py-2">
            <ul className="nav nav-pills">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a 
                    className="nav-link text-white px-3 py-2" 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    style={{ 
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.borderRadius = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation - Horizontal Scroll */}
          <nav className="d-lg-none py-2">
            <div 
              className="d-flex px-3"
              style={{ 
                overflowX: 'auto',
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE and Edge */
                WebkitScrollbar: { display: 'none' } /* Chrome, Safari, Opera */
              }}
            >
              <style jsx>{`
                .mobile-nav::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  className="text-white text-decoration-none px-3 py-2 text-nowrap"
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  style={{ 
                    fontSize: '14px',
                    fontWeight: '500',
                    minWidth: 'fit-content',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }}
                  onTouchStart={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onTouchEnd={(e) => {
                    setTimeout(() => {
                      e.target.style.backgroundColor = 'transparent';
                    }, 150);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

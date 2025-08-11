import React from 'react'
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="row justify-content-center my-4">
        <div className="col-12 col-lg-10">
          {/* MyCaptain Logo */}
          <div className="text-center mb-4">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <img 
                src="/home/mycaptain-logo_1111.webp" 
                alt="MyCaptain by Imarticus Learning" 
                className="img-fluid"
                style={{ height: '60px', maxHeight: '80px' }}
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50', lineHeight: '1.2' }}>
              Become a Digital Marketer in<br />
              <span style={{ color: '#2c3e50' }}>18 Weeks</span>
            </h1>
            <p className="lead text-muted mb-4 fw-bold">
              MyCaptain Digital Marketing Program with Job Assurance
            </p>
          </div>

          {/* Stats Card */}
          <div className="card shadow-sm mb-5" style={{ borderRadius: '16px', border: 'none' }}>
            <div className="card-body p-4">
              <div className="row text-center g-4">
                {/* Next Batch */}
                <div className="col-6 col-md-3">
                  <div className="border-end border-light">
                    <p className="small text-muted mb-1">Next Batch</p>
                    <h4 className="fw-bold mb-0" style={{ color: '#2c3e50' }}>August</h4>
                  </div>
                </div>

                {/* Available Seats */}
                <div className="col-6 col-md-3">
                  <div className="border-end border-light">
                    <p className="small text-muted mb-1">Available Seats</p>
                    <h4 className="fw-bold mb-0" style={{ color: '#2c3e50' }}>29/60</h4>
                  </div>
                </div>

                {/* Taught by experts */}
                <div className="col-6 col-md-3">
                  <div className="border-end border-light">
                    <p className="small text-muted mb-1">Taught by experts from</p>
                    <h6 className="fw-bold mb-0" style={{ color: '#2c3e50', fontSize: '14px' }}>
                      Rapido, Deloitte, MFine,<br />Zomato
                    </h6>
                  </div>
                </div>

                {/* Designed for */}
                <div className="col-6 col-md-3">
                  <div>
                    <p className="small text-muted mb-1">Designed for</p>
                    <h6 className="fw-bold mb-0" style={{ color: '#2c3e50', fontSize: '14px' }}>
                      Freshers & Early Working<br />Professionals
                    </h6>
                  </div>
                </div>
              </div>

              {/* Rating and Learners */}
              <div className="row justify-content-center mt-4">
                <div className="col-auto">
                  <div className="d-flex align-items-center">
                    <div className="me-4">
                      <span className="text-warning me-1">⭐</span>
                      <span className="fw-bold" style={{ color: '#2c3e50' }}>4.51</span>
                    </div>
                    <div>
                      <span className="text-muted me-1">👥</span>
                      <span className="fw-bold" style={{ color: '#2c3e50' }}>1.2 Lacs+ Learners</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="row justify-content-center g-3">
            <div className="col-12 col-sm-6 col-lg-4">
              <Link to="/course">
                <button 
                  className="btn btn-lg w-100 text-white fw-bold"
                  style={{ 
                    backgroundColor: '#FF6B35',
                    borderColor: '#FF6B35',
                    borderRadius: '12px',
                    padding: '12px 24px'
                  }}
                  >
                  Apply Now
                </button>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <button 
                className="btn btn-lg w-100 text-white fw-bold"
                style={{ 
                  backgroundColor: '#2c3e50',
                  borderColor: '#2c3e50',
                  borderRadius: '12px',
                  padding: '12px 24px'
                }}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights Section */}
      <div className="py-5" style={{ backgroundColor: 'rgb(3, 86, 66)' }}>
        <div className="container">
          <div className="row">
            {/* Left Side - Key Highlights */}
            <div className="col-12 col-lg-8">
              <div className="text-center text-lg-start mb-4">
                <h2 className="text-white fw-bold mb-4">Key Highlights</h2>
              </div>

              {/* Stats Grid */}
              <div className="row g-3 mb-4">
                <div className="col-6 col-md-3">
                  <div 
                    className="text-center p-3 text-white fw-bold"
                    style={{ 
                      backgroundColor: '#FF6B35',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="h4 mb-1">1600+</div>
                    <small>Students Placed</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div 
                    className="text-center p-3 text-white fw-bold"
                    style={{ 
                      backgroundColor: '#FF6B35',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="h4 mb-1">12 LPA</div>
                    <small>Highest CTC</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div 
                    className="text-center p-3 text-white fw-bold"
                    style={{ 
                      backgroundColor: '#FF6B35',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="h4 mb-1">10</div>
                    <small>Assured Interview</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div 
                    className="text-center p-3 text-white fw-bold"
                    style={{ 
                      backgroundColor: '#FF6B35',
                      borderRadius: '8px'
                    }}
                  >
                    <div className="h4 mb-1">1000+</div>
                    <small>Hiring Partners</small>
                  </div>
                </div>
              </div>

              {/* Company Logos */}
              <div className="text-center text-lg-start mb-3">
                <p className="text-white small mb-3">This Program has been created in collaboration with Managers from</p>
                <div className="d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap gap-4">
                  <img src="/home/zomato.webp" alt="Zomato" className="img-fluid" style={{ height: '30px' }} />
                  <img src="/home/rapido.webp" alt="Rapido" className="img-fluid" style={{ height: '30px' }} />
                  <img src="/home/mfine.webp" alt="MFine" className="img-fluid" style={{ height: '30px' }} />
                  <img src="/home/deloitte.webp" alt="Deloitte" className="img-fluid" style={{ height: '30px' }} />
                </div>
              </div>
            </div>

            {/* Right Side - Application Form */}
            <div className="col-12 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow">
                <h6 className="fw-bold mb-3" style={{ color: '#FF6B35' }}>
                  Apply For The MyCaptain Digital Marketing Job Assurance Program
                </h6>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email Address" />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Mobile Number" />
                  </div>
                  <div className="mb-3">
                    <select className="form-select">
                      <option>Location</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <select className="form-select">
                      <option>Professional Experience</option>
                      <option>Fresher</option>
                      <option>1-2 years</option>
                      <option>3-5 years</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn w-100 text-white fw-bold"
                    style={{ 
                      backgroundColor: '#FF6B35',
                      borderColor: '#FF6B35'
                    }}
                  >
                    APPLY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hiring Partners Section */}
      <div className="py-5" style={{ backgroundColor: 'rgba(60, 72, 82, 0.08)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-4" style={{ color: '#2c3e50' }}>1000+ Hiring Partners</h2>
            <div className="row justify-content-center g-0 mb-1">
              <div className="col-6 col-lg-2">
                <img src="/home/1.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/2.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <img src="/home/3.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/4.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/5.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/6.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
            </div>
            
            {/* Second Row of Logos */}
            <div className="row justify-content-center g-0">
              <div className="col-6 col-lg-2">
                <img src="/home/7.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/8.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/9.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/10.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/11.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
              <div className="col-6 col-lg-2">
                <img src="/home/12.webp" alt="Hiring Partner" className="img-fluid" style={{ height: '60px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Curriculum Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Program Curriculum</h2>
            <p className="text-muted fw-bold">Our curriculum is designed to make you a finest marketer</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {/* Curriculum Modules */}
              <div className="accordion" id="curriculumAccordion">
                
                {/* Welcome Module */}
                <div className="accordion-item border-0 mb-3" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-light fw-semibold"
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#welcome"
                      style={{ borderRadius: '12px', border: 'none', color: '#2c3e50' }}
                    >
                      Welcome to the Digital Marketing Pro Course
                    </button>
                  </h2>
                  <div id="welcome" className="accordion-collapse collapse" data-bs-parent="#curriculumAccordion">
                    <div className="accordion-body bg-light">
                      <p className="text-muted">Introduction to the comprehensive digital marketing program.</p>
                    </div>
                  </div>
                </div>

                {/* Fundamentals Module */}
                <div className="accordion-item border-0 mb-3" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-light fw-semibold d-flex align-items-center"
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#fundamentals"
                      style={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        color: '#2c3e50',
                        boxShadow: 'none'
                      }}
                    >
                      <span className="flex-grow-1">Fundamentals of Digital Marketing</span>
                      <div className="d-flex align-items-center ms-4">
                        <div className="d-flex align-items-center me-3">
                          <img src="/home/lectures.svg" alt="Lectures" style={{ width: '16px', height: '16px' }} className="me-1" />
                          <small className="text-muted">6 Live Classes</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src="/home/project.svg" alt="Projects" style={{ width: '16px', height: '16px' }} className="me-1" />
                          <small className="text-muted mx-2">1 Project</small>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="fundamentals" className="accordion-collapse collapse" data-bs-parent="#curriculumAccordion">
                    <div className="accordion-body bg-light" style={{ borderTop: 'none' }}>
                      <p className="text-muted">Core concepts and principles of digital marketing.</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Module */}
                <div className="accordion-item border-0 mb-3" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-light fw-semibold d-flex align-items-center"
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#social"
                      style={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        color: '#2c3e50',
                        boxShadow: 'none'
                      }}
                    >
                      <span className="flex-grow-1">Social Media Marketing</span>
                      <div className="d-flex align-items-center ms-4">
                        <div className="d-flex align-items-center me-3">
                          <img src="/home/lectures.svg" alt="Lectures" style={{ width: '16px', height: '16px' }} className="me-1" />
                          <small className="text-muted">10 Live Classes</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src="/home/project.svg" alt="Projects" style={{ width: '16px', height: '16px' }} className="me-1" />
                          <small className="text-muted mx-2">3 Project</small>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="social" className="accordion-collapse collapse" data-bs-parent="#curriculumAccordion">
                    <div className="accordion-body bg-light" style={{ borderTop: 'none' }}>
                      <p className="text-muted">Master social media platforms and strategies.</p>
                    </div>
                  </div>
                </div>

                {/* SEO Module */}
                <div className="accordion-item border-0 mb-3" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-light fw-semibold d-flex align-items-center"
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#seo"
                      style={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        color: '#2c3e50',
                        boxShadow: 'none'
                      }}
                    >
                      <span className="flex-grow-1">Search Engine Optimisation</span>
                      <div className="d-flex align-items-center ms-4">
                        <div className="d-flex align-items-center me-3">
                          <img src="/home/lectures.svg" alt="Lectures" style={{ width: '16px', height: '16px' }} className="me-1" />
                          <small className="text-muted">9 Live Classes</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src="/home/project.svg" alt="Projects" style={{ width: '16px', height: '16px' }} className="me-1" />
                          <small className="text-muted mx-2">2 Project</small>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="seo" className="accordion-collapse collapse" data-bs-parent="#curriculumAccordion">
                    <div className="accordion-body bg-light" style={{ borderTop: 'none' }}>
                      <p className="text-muted">Learn SEO techniques and best practices.</p>
                    </div>
                  </div>
                </div>

                {/* Performance Marketing Module */}
                <div className="accordion-item border-0 mb-4" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-light fw-semibold d-flex align-items-center"
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#performance"
                      style={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        color: '#2c3e50',
                        boxShadow: 'none'
                      }}
                    >
                      <span className="flex-grow-1">Performance Marketing</span>
                      <div className="d-flex align-items-center ms-4">
                        <div className="d-flex align-items-center me-3">
                          <img src="/home/lectures.svg" alt="Lectures" style={{ width: '16px', height: '16px' }} className="me-1" />
                          <small className="text-muted">20 Live Classes</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src="/home/project.svg" alt="Projects" style={{ width: '16px', height: '16px' }} className="me-1" />
                          <small className="text-muted mx-2">6 Project</small>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="performance" className="accordion-collapse collapse" data-bs-parent="#curriculumAccordion">
                    <div className="accordion-body bg-light" style={{ borderTop: 'none' }}>
                      <p className="text-muted">Advanced performance marketing and analytics.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center mt-4">
                <button 
                  className="btn btn-lg px-5 py-3 text-white fw-bold"
                  style={{ 
                    backgroundColor: '#FF6B35',
                    borderColor: '#FF6B35',
                    borderRadius: '12px'
                  }}
                >
                  <i className="bi bi-download me-2"></i>
                  Download Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Master Industry-Relevant Tools Section */}
      <div className="py-5" style={{ backgroundColor: 'rgb(3, 86, 66)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-white fw-bold mb-4">Master Industry-Relevant Tools</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {/* First Row of Tools */}
              <div className="row g-3 mb-4">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo1.webp" alt="Sitechecker" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo2.webp" alt="SparkToro" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo3.webp" alt="ScreamingFrog" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo4.webp" alt="SocialBlade" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo5.webp" alt="YouTube" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo6.webp" alt="Canva" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
              </div>

              {/* Second Row of Tools */}
              <div className="row g-3 mb-4">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo7.webp" alt="Hootsuite" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo8.webp" alt="Google Analytics" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo9.webp" alt="Google Ads" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo10.webp" alt="Meta Business Suite" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo11.webp" alt="Buffer" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo12.webp" alt="Ubersuggest" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
              </div>

              {/* Third Row of Tools */}
              <div className="row g-3">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo13.webp" alt="ChatGPT" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo14.webp" alt="LinkedIn" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo15.webp" alt="HubSpot" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="bg-white rounded-3 p-3 h-100 d-flex align-items-center justify-content-center">
                    <img src="/home/CompanyLogo16.webp" alt="SEMrush" className="img-fluid" style={{ maxHeight: '40px', maxWidth: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Batches Section */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3" style={{ color: '#333' }}>Upcoming Batches</h2>
            <p className="text-muted">We offer both offline and online classes, you can find the details about the upcoming batches here.</p>
          </div>

          <div className="row justify-content-center g-4">
            {/* Online Batch Card */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3" style={{ color: 'rgb(3, 86, 66)' }}>ONLINE BATCH</h4>
                  <div className="mb-3">
                    <span className="text-decoration-line-through text-muted me-2">₹1,75,000</span>
                    <h5 className="fw-bold d-inline">₹1,60,000 <span className="fw-normal">(All Inclusive)</span></h5>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2" style={{ color: 'rgb(3, 86, 66)', fontWeight: '600' }}>Upcoming Batch</p>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-calendar-event me-2" style={{ color: 'rgb(3, 86, 66)' }}></i>
                      <span className="fw-bold">August</span>
                    </div>
                  </div>
                  <button 
                    className="btn btn-lg w-100 text-white fw-bold py-3"
                    style={{ 
                      backgroundColor: '#FF6B35',
                      borderColor: '#FF6B35',
                      borderRadius: '12px'
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Offline Classroom Batch Card */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3" style={{ color: 'rgb(3, 86, 66)' }}>OFFLINE CLASSROOM BATCH</h4>
                  <div className="mb-3">
                    <span className="text-decoration-line-through text-muted me-2">₹1,75,000</span>
                    <h5 className="fw-bold d-inline">₹1,60,000 <span className="fw-normal">(All Inclusive)</span></h5>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2" style={{ color: 'rgb(3, 86, 66)', fontWeight: '600' }}>Upcoming Batch</p>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-calendar-event me-2" style={{ color: 'rgb(3, 86, 66)' }}></i>
                      <span className="fw-bold">August</span>
                    </div>
                  </div>
                  <button 
                    className="btn btn-lg w-100 text-white fw-bold py-3"
                    style={{ 
                      backgroundColor: '#FF6B35',
                      borderColor: '#FF6B35',
                      borderRadius: '12px'
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Your Trainers Section */}
      <div className="py-5 my-5" style={{ backgroundColor: 'rgb(3, 86, 66)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-white fw-bold mb-3">Meet Your Trainers</h2>
            <p className="text-white">You will be mentored by practitioners who are masters of their trade</p>
          </div>

          <div className="position-relative">
            {/* Trainers Container */}
            <div 
              id="trainers-container"
              className="d-flex overflow-auto pb-3"
              style={{ 
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                gap: '20px'
              }}
            >
              <style jsx>{`
                #trainers-container::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Trainer Card 1 */}
              <div className="flex-shrink-0" style={{ width: '280px' }}>
                <div className="text-center h-100" style={{ height: '350px' }}>
                  {/* Trainer Image with Company Logo Overlay - No background to blend with green */}
                  <div className="position-relative overflow-hidden" style={{ height: '70%', borderRadius: '20px 20px 0 0' }}>
                    <img 
                      src="/home/image-33.webp" 
                      alt="Trainer" 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '20px 20px 0 0' }}
                    />
                    {/* Company Logo Overlay */}
                    <div className="position-absolute bottom-0 end-0 m-3">
                      <div className="bg-white rounded-3 p-2" style={{ width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src="/home/TrainerLogo1.webp" 
                          alt="Company Logo" 
                          style={{ maxWidth: '50px', maxHeight: '30px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Trainer Details - Only this part has background */}
                  <div className="p-3 d-flex flex-column justify-content-center" style={{ height: '30%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '0 0 20px 20px' }}>
                    <h6 className="text-white fw-bold mb-1">Prashant Chandra</h6>
                    <p className="text-white-50 small mb-0 fw-bold">Assistant Brand Manager</p>
                  </div>
                </div>
              </div>

              {/* Trainer Card 2 */}
              <div className="flex-shrink-0" style={{ width: '280px' }}>
                <div className="text-center h-100" style={{ height: '350px' }}>
                  <div className="position-relative overflow-hidden" style={{ height: '70%', borderRadius: '20px 20px 0 0' }}>
                    <img 
                      src="/home/image-34.webp" 
                      alt="Trainer" 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '20px 20px 0 0' }}
                    />
                    <div className="position-absolute bottom-0 end-0 m-3">
                      <div className="bg-white rounded-3 p-2" style={{ width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src="/home/TrainerLogo2.webp" 
                          alt="Company Logo" 
                          style={{ maxWidth: '50px', maxHeight: '30px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center" style={{ height: '30%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '0 0 20px 20px' }}>
                    <h6 className="text-white fw-bold mb-1">Shashank Chandra</h6>
                    <p className="text-white-50 small mb-0 fw-bold">Growth Marketer</p>
                  </div>
                </div>
              </div>

              {/* Trainer Card 3 */}
              <div className="flex-shrink-0" style={{ width: '280px' }}>
                <div className="text-center h-100" style={{ height: '350px' }}>
                  <div className="position-relative overflow-hidden" style={{ height: '70%', borderRadius: '20px 20px 0 0' }}>
                    <img 
                      src="/home/image-35.webp" 
                      alt="Trainer" 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '20px 20px 0 0' }}
                    />
                    <div className="position-absolute bottom-0 end-0 m-3">
                      <div className="bg-white rounded-3 p-2" style={{ width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src="/home/TrainerLogo3.webp" 
                          alt="Company Logo" 
                          style={{ maxWidth: '50px', maxHeight: '30px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center" style={{ height: '30%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '0 0 20px 20px' }}>
                    <h6 className="text-white fw-bold mb-1">Sarthak Shukla</h6>
                    <p className="text-white-50 small mb-0 fw-bold">Product Specialist</p>
                  </div>
                </div>
              </div>

              {/* Trainer Card 4 */}
              <div className="flex-shrink-0" style={{ width: '280px' }}>
                <div className="text-center h-100" style={{ height: '350px' }}>
                  <div className="position-relative overflow-hidden" style={{ height: '70%', borderRadius: '20px 20px 0 0' }}>
                    <img 
                      src="/home/image-36.webp" 
                      alt="Trainer" 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '20px 20px 0 0' }}
                    />
                    <div className="position-absolute bottom-0 end-0 m-3">
                      <div className="bg-white rounded-3 p-2" style={{ width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src="/home/TrainerLogo4.webp" 
                          alt="Company Logo" 
                          style={{ maxWidth: '50px', maxHeight: '30px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center" style={{ height: '30%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '0 0 20px 20px' }}>
                    <h6 className="text-white fw-bold mb-1">Abhishek Sinha</h6>
                    <p className="text-white-50 small mb-0 fw-bold">Growth & Digital Experience</p>
                  </div>
                </div>
              </div>

              {/* Trainer Card 5 */}
              <div className="flex-shrink-0" style={{ width: '280px' }}>
                <div className="text-center h-100" style={{ height: '350px' }}>
                  <div className="position-relative overflow-hidden" style={{ height: '70%', borderRadius: '20px 20px 0 0' }}>
                    <img 
                      src="/home/image-37.webp" 
                      alt="Trainer" 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '20px 20px 0 0' }}
                    />
                    <div className="position-absolute bottom-0 end-0 m-3">
                      <div className="bg-white rounded-3 p-2" style={{ width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src="/home/TrainerLogo5.webp" 
                          alt="Company Logo" 
                          style={{ maxWidth: '50px', maxHeight: '30px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center" style={{ height: '30%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '0 0 20px 20px' }}>
                    <h6 className="text-white fw-bold mb-1">Jinal Patel</h6>
                    <p className="text-white-50 small mb-0 fw-bold">Marketing Manager</p>
                  </div>
                </div>
              </div>

              {/* Trainer Card 6 */}
              <div className="flex-shrink-0" style={{ width: '280px' }}>
                <div className="text-center h-100" style={{ height: '350px' }}>
                  <div className="position-relative overflow-hidden" style={{ height: '70%', borderRadius: '20px 20px 0 0' }}>
                    <img 
                      src="/home/image-38.webp" 
                      alt="Trainer" 
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: '20px 20px 0 0' }}
                    />
                    <div className="position-absolute bottom-0 end-0 m-3">
                      <div className="bg-white rounded-3 p-2" style={{ width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src="/home/TrainerLogo6.webp" 
                          alt="Company Logo" 
                          style={{ maxWidth: '50px', maxHeight: '30px', objectFit: 'contain' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 d-flex flex-column justify-content-center" style={{ height: '30%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '0 0 20px 20px' }}>
                    <h6 className="text-white fw-bold mb-1">Rohit Sharma</h6>
                    <p className="text-white-50 small mb-0 fw-bold">Content Strategist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-center mt-4">
              <button 
                className="btn me-3 d-flex align-items-center justify-content-center"
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: '2px solid white'
                }}
                onClick={() => {
                  const container = document.getElementById('trainers-container');
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }}
              >
                <i className="bi bi-arrow-left text-white" style={{ fontSize: '20px' }}></i>
              </button>
              <button 
                className="btn d-flex align-items-center justify-content-center"
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: '2px solid white'
                }}
                onClick={() => {
                  const container = document.getElementById('trainers-container');
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }}
              >
                <i className="bi bi-arrow-right text-white" style={{ fontSize: '20px' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Download Banner - always visible */}
      <div 
        className="position-fixed w-100 d-flex justify-content-center align-items-center"
        style={{ 
          bottom: '0', 
          zIndex: 1050,
          backgroundColor: '#C8E6C9', // Light mint green background
          height: '75px',
          boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <button 
          className="btn text-white fw-bold px-3 py-3"
          style={{ 
            backgroundColor: '#2C3E50', // Dark navy background
            borderColor: '#2C3E50',
            borderRadius: '4px',
            fontSize: '16px',
            minWidth: '140px'
          }}
          onClick={() => {
            // Add download functionality here
            console.log('Download brochure clicked');
            // You can add actual download logic here
          }}
        >
          Download Brochure
        </button>
      </div>
    </div>
  )
}
export default Body
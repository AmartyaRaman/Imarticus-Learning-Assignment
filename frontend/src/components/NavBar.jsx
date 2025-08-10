import React from 'react'

const NavBar = () => {
  return (
    <nav className="w-100 p-1" style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)' }}>
      <div className="d-flex align-items-center justify-content-between px-5 py-3">
        <h5 className="mb-0 fw-bold" style={{ color: 'rgba(33, 42, 57, 0.5)' }}>
          Introduction To Machine Learning
        </h5>

        <div className="d-flex align-items-center gap-4">
          <button type="button" className="btn p-0 bg-transparent border-0">
            <img src="/notifications_icon.svg" alt="Notifications" style={{ width: '22px', height: '22px' }} />
          </button>
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/user_neutral.svg"
                alt="Logo"
                className="me-2"
                style={{ width: '24px', height: '24px' }}
              />
              <span className="fw-semibold px-3" style={{ color: 'rgba(33, 42, 57, 0.8)' }}>
                Your Name
              </span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

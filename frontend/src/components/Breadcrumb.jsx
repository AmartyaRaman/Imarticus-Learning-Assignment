import React from 'react'

const Breadcrumb = () => {
  return (
    <div className="d-flex align-items-center mb-3">
      <span 
        className="fw-semibold" 
        style={{ color: 'rgb(3, 86, 66)', cursor: 'pointer' }}
      >
        My Courses
      </span>
      <span className="mx-2" style={{ color: '#6c757d' }}>
        &gt;
      </span>
      <span style={{ color: '#6c757d' }}>
        Introduction to Machine Learning
      </span>
    </div>
  )
}

export default Breadcrumb

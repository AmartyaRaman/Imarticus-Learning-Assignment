import React, { useState } from 'react'
import useCourseDetails from '../hooks/useCourseDetails';

export default function CourseCard() {
  const [expandedSections, setExpandedSections] = useState({});
  const {courseDetails} = useCourseDetails();

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="card shadow-sm" style={{ backgroundColor: 'white', borderRadius: '12px', border: 'none' }}>
      <div className="card-body p-4">
        <div className="d-flex mb-4">
          <div style={{ flex: '1' }} className="me-3">
            <img 
              src="/course_image.jpg" 
              className="w-100" 
              alt="Course" 
              style={{ height: '120px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
          <div style={{ flex: '3' }} className="d-flex flex-column justify-content-between">
            <div>
              <h4 className="card-title fw-bold mb-2" style={{ color: '#2c3e50' }}>
              <div>{courseDetails[0]?.title || "Loading..."}</div>
              </h4>
              <p className="text-muted small mb-0">
              <div>{courseDetails[0]?.batch_id || "Loading..."}</div>
              </p>
            </div>
            <div className="align-self-end">
              <button 
                className="btn btn-outline-success px-4 py-2"
                style={{ borderColor: 'rgb(3, 86, 66)', color: 'rgb(3, 86, 66)' }}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {courseDetails[0]?.modules?.map((module, index) => {
            const totalItems = module.content?.length || 0;
            const completedItems = module.content?.filter(item => item.isCompleted).length || 0;
            const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
            
            const lectures = module.content?.filter(item => item.type === 'Lecture') || [];
            const quizzes = module.content?.filter(item => item.type === 'Quiz') || [];
            
            return (
              <div key={module._id} className="border-bottom py-3">
                <div 
                  className="d-flex justify-content-between align-items-center"
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleSection(module._id)}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center position-relative"
                      style={{ 
                        width: '32px', 
                        height: '32px', 
                        backgroundColor: '#e9ecef',
                        border: '2px solid #dee2e6'
                      }}
                    >
                      <svg width="32" height="32" className="position-absolute">
                        <circle
                          cx="16"
                          cy="16"
                          r="14"
                          fill="none"
                          stroke="#e9ecef"
                          strokeWidth="2"
                        />
                        <circle
                          cx="16"
                          cy="16"
                          r="14"
                          fill="none"
                          stroke="rgb(3, 86, 66)"
                          strokeWidth="2"
                          strokeDasharray={`${2 * Math.PI * 14}`}
                          strokeDashoffset={`${2 * Math.PI * 14 * (1 - progressPercentage / 100)}`}
                          transform="rotate(-90 16 16)"
                          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                        />
                      </svg>
                      <span className="small fw-bold text-muted position-relative" style={{ fontSize: '10px' }}>
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: '#495057' }}>
                        {module.title}
                      </h6>
                      <p className="small text-muted mb-0">
                        {lectures.length} Lecture{lectures.length !== 1 ? 's' : ''}
                        {quizzes.length > 0 && `, ${quizzes.length} Quiz${quizzes.length !== 1 ? 'zes' : ''}`}
                      </p>
                    </div>
                  </div>
                  <button 
                    className="btn btn-sm p-0"
                    style={{ fontSize: '20px', color: '#6c757d' }}
                  >
                    {expandedSections[module._id] ? '−' : '+'}
                  </button>
                </div>
                {expandedSections[module._id] && (
                  <div className="mt-3 ms-5">
                    {lectures.map((lecture) => (
                      <div key={lecture._id} className="d-flex align-items-center py-2">
                        <img 
                          src="/play_button.png" 
                          alt="Play" 
                          style={{ width: '16px', height: '16px' }}
                          className="me-3"
                        />
                        <span 
                          className="small"
                          style={{ 
                            color: lecture.isCompleted ? 'rgb(3, 86, 66)' : '#6c757d',
                            textDecoration: lecture.isCompleted ? 'line-through' : 'none'
                          }}
                        >
                          {lecture.title}
                        </span>
                        <div 
                          className="ms-auto rounded-circle"
                          style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: lecture.isCompleted ? 'rgb(3, 86, 66)' : '#e9ecef'
                          }}
                        />
                      </div>
                    ))}

                    {quizzes.map((quiz) => (
                      <div key={quiz._id} className="d-flex align-items-center py-2">
                        <img 
                          src="/quiz.png" 
                          alt="Quiz" 
                          style={{ width: '16px', height: '16px' }}
                          className="me-3"
                        />
                        <span 
                          className="small"
                          style={{ 
                            color: quiz.isCompleted ? 'rgb(3, 86, 66)' : '#6c757d',
                            textDecoration: quiz.isCompleted ? 'line-through' : 'none'
                          }}
                        >
                          {quiz.title}
                        </span>
                        <div 
                          className="ms-auto rounded-circle"
                          style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: quiz.isCompleted ? 'rgb(3, 86, 66)' : '#e9ecef'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

import React, {useState} from 'react'

function SideBar() {
  const [activeItem, setActiveItem] = useState('course');
  const [helpHover, setHelpHover] = useState(false);

  return (
    <div className="p-3 d-flex flex-column h-100">
          <div className='d-flex justify-content-center align-items-center mb-5'>
            <img src="/imarticus-new-logo.svg" className='w-75' style={{cursor: 'pointer'}} />
          </div>
          <div 
            className={`d-flex align-items-center mb-3 p-2 rounded w-100`}
            style={{
              cursor: 'pointer',
              backgroundColor: activeItem === 'course' ? 'rgb(1, 43, 33)' : 'transparent'
            }}
            onClick={() => setActiveItem('course')}
          >
            <img src="/course_icon.svg" className="me-2" style={{width: '20px', height: '20px'}} />
            <p className="mb-0 text-white">Course</p>
          </div>
          <div 
            className={`d-flex align-items-center mb-3 p-2 rounded w-100`}
            style={{
              cursor: 'pointer',
              backgroundColor: activeItem === 'discussion' ? 'rgb(1, 43, 33)' : 'transparent'
            }}
            onClick={() => setActiveItem('discussion')}
          >
            <img src="/discussion_icon.svg" className="me-2" style={{width: '20px', height: '20px'}} />
            <p className="mb-0 text-white">Discussion</p>
          </div>
          <div className="mt-auto">
            <hr className="border border-light opacity-25 my-3" />
            <p className='text-white'>Facing problems?</p>
            <button
              className="btn w-100 fw-bold"
              onMouseEnter={() => setHelpHover(true)}
              onMouseLeave={() => setHelpHover(false)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'white',
                border: helpHover ? '1px solid rgba(255, 255, 255, 0.9)' : '1px solid transparent',
                transition: 'border-color 0.15s ease-in-out, background-color 0.15s ease-in-out'
              }}
            >
              Get Help
            </button>
          </div>

        </div>
  )
}

export default SideBar

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Breadcrumb from '../components/Breadcrumb';
import CourseCard from '../components/CourseCard';
import CertificateCard from '../components/CertificateCard';

export default function Course() {
  return (
    <div>
      <div className="d-flex vh-100 flex-row">
      <div className="d-none d-md-flex border-end" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '16.666%', // equivalent to flex: 1 in a 1:5 ratio
        height: '100vh',
        backgroundColor: 'rgb(3, 86, 66)',
        zIndex: 1000
      }}>
        <SideBar />
      </div>
      <div style={{
        flex: '5', 
        backgroundColor: 'rgb(242, 246, 249)',
        marginLeft: '16.666%', // offset for fixed sidebar
        minHeight: '100vh',
        overflowY: 'auto'
      }}>
        <NavBar />
        <div className="px-5 my-5">
          <Breadcrumb />
        </div>
        <div className="px-5">
          <CourseCard />
        </div>
        <div className='px-5 mt-4'>
          <CertificateCard />
        </div>
      </div>
    </div>
    </div>
  )
}

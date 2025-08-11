import { useEffect, useState } from 'react';

const useCourseDetails = () => {
    const [courseDetails, setCourseDetails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
      const getResponse = async () => {
        setLoading(true);
        try {
          const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/courses`);
          const data = await res.json();
          if (data.error) throw new Error(data.error)
          
          setCourseDetails(data);
        } catch (error) {
          return {Error: error.message}
        }finally {
          setLoading(false);
        } 
      }
      getResponse();
    }, [])
    return {courseDetails}


}

export default useCourseDetails
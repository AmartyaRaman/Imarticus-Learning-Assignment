import Course from "./pages/Course"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Course/>}/>
      </Routes>
    </>
  )
}

export default App


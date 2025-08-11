import Course from "./pages/Course"
import Home from "./pages/home/Home"
import { Routes, Route } from "react-router-dom"


function App() {

  return (

    <Routes>
      <Route path="/" element={<Course/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>

  )
}

export default App


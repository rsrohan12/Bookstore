import { useState } from 'react'
import Home from './home/Home'
import Courses from './components/courses/Courses'
import { Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import About from './components/conatct/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/course' element={<Courses/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={< About/>}/>
      </Routes>
    </>
  )
}

export default App

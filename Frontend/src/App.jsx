import Home from './home/Home'
import Courses from './components/courses/Courses'
import {Navigate, Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import About from './components/conatct/About'
import { useAuth } from './context/AuthProvider'
import { Toaster } from "react-hot-toast";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/course' 
         element={authUser ? <Courses /> : <Navigate to="/signup" />} /> {/* if auth user logggedin then show the contnet of courses otherwise send to signup page*/}
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={< About/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App

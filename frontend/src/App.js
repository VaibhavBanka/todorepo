import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/home'
import Footer from './components/Footer/Footer'
import About from './components/about/about'
import Signup from './components/SignUp/Signup'
import SignIn from './components/SignUp/Signin'
import Todo from './components/todo/Todo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import { authActions } from './store'
import { useDispatch } from 'react-redux'

// let id=sessionStorage.getItem("id");
// alert(id);
const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    const id=sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login())
    };
  },[])
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import "./home.css"
const home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center'>Organise your <br/> work and life, finally</h1>
            <p>Become focused, organised, and calm with <br/> todo app. The world's #1 Task Manager</p>
            <button className='home-btn p-2'>Make Todo</button>
        </div>
    </div>
  )
}

export default home

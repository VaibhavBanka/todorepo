import React,{useState} from 'react'
import './Signup.css'
import HeadingComp from './HeadingComp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store'
import { fetchTasks } from '../../store'
const Signin = () => {
  const dispatch=useDispatch();
  const history=useNavigate()
  const [inputs,setinputs]=useState({"email":"","password":""});
  const change=(e)=>{
      const {name,value}=e.target;
      setinputs({...inputs,[name]:value})
  }
  const submit=async(e)=>{
    // e.preventDefault();
    const signin=await axios.post("http://localhost:1000/api/v1/signin",inputs)
    sessionStorage.setItem("id",signin.data._id);
    dispatch(authActions.login());
    let id=signin.data._id;
    dispatch(fetchTasks(id)); 
    // window.location.reload();
    // change(e);
    history("/todo");
  };

  
  return (
    <div className='signup'>
      <div className="container">
        <div className="row">
            <div className="col-lg-4 column col-left d-lg-flex justify-content-center align-items-center d-none" style={{height:"100vh"}}>
                <HeadingComp first="Sign" second="In"/>
            </div>
            <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                <div className='d-flex flex-column w-100 p-3'>
                    <input className='p-2 my-3 input-signup' name='email' type="email" placeholder='Enter your email' onChange={change} value={inputs.email}/>
                    <input className='p-2 my-3 input-signup' name='password' type="password" placeholder='Enter your Password' onChange={change} value={inputs.password}/>
                    <button className='btn-signup p-2' onClick={submit}>SignIn</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin

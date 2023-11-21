import React, { useState } from "react";
import './Todo.css';
import TodoCards from "./TodoCards";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";
import axios from "axios";
import { useEffect } from "react";
let id=sessionStorage.getItem("id");
let toupdatearray=[]
const Todo = () => {
    // alert(id);  
    const [inputs,setinputs]=useState({title:"",body:""});
    const [array,setarray]=useState([]);

    const show=()=>{
        document.getElementById('textarea').style.display="block";
    }

    const change=(e)=>{
        const {name,value}=e.target;
        setinputs({...inputs,[name]:value});
    }

    const submit=async()=>{
      if(inputs.title==="" || inputs.body===""){
        toast.error("Title or body Should not be empty")
      }else{
        if(id){
          await axios.post("http://localhost:1000/api/v2/addTask",{title:inputs.title,body:inputs.body,id:id})
          .then((response)=>console.log(response));
          // setarray([...array,inputs])
          setinputs({title:"",body:""});
          toast.success("Your task is Added");
        }
        else{
          setarray([...array,inputs])
          setinputs({title:"",body:""});
          toast.error("Your task is Added but not saved! Please sign up")
        }
      }
    }
    const del=async(Cardid)=>{
      if(id){
        await axios.delete(`http://localhost:1000/api/v2/deleteTask/${Cardid}`,{data:{id:id},}).
        then(()=>{
          toast.success("Your task is Deleted");
        })
      }
      else{
        toast.error("Please SignUp First")
      }
      
      // array.splice(id,"1");
      // setarray([...array]);
    }

    const dis=(value)=>{
      document.getElementById("todo-update").style.display=value;
    }

    const update=(value)=>{
      toupdatearray=array[value];
    }

    useEffect(()=>{
      if(id){
        const fetch=async()=>{
          await axios.get(`http://localhost:1000/api/v2/getTasks/${id}`).then((response)=>{setarray(response.data.list)});
        };
        fetch();
      }
    },[submit])

  return (
    <>
    <div className='todo'>
      <ToastContainer/>
      <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
        <div className='d-flex flex-column todo-inputs-div w-100 w-lg-50 p-1'>
            <input type="text" placeholder='TITLE' className='my-2 p-2 todo-inputs' onClick={show} onChange={change} name='title' value={inputs.title}/>
            <textarea id='textarea' type="text" placeholder='BODY' className='p-2 todo-inputs' onChange={change} name='body' value={inputs.body}/>
        </div>
        <div className='w-lg-50 w-100 d-flex justify-content-end my-3'>
            <button className='home-btn px-2 py-1' onClick={submit}>Add</button>
        </div>
      </div>
      <div className="todo-body">
        <div className="container-fluid">
            <div className="row">
                {array && 
                array.map((item,index)=>(
                    <div className="col-lg-3 col-10 mx-5 my-2" key={index}><TodoCards 
                    title={item.title} body={item.body} id={item._id} delid={del} display={dis} updateId={index} tobeupdate={update}/></div>
                ))}
            </div>
        </div>
      </div>
    </div>
    <div className="todo-update" id="todo-update">
       <div className="container update"><Update display={dis} update={toupdatearray} /></div> 
    </div>
    </>
  );
};

export default Todo

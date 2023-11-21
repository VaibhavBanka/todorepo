import {createSlice,configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks=createAsyncThunk('auth/fetchTasks',async(id)=>{
    const response=await axios.get(`http://localhost:1000
:1000/api/v2/getTasks/${id}`);
    console.log(response.data);
})

const authSlice=createSlice({
    name:"auth",
    initialState:{user:"",isLoggedIn:false,tasks:[]},
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
            state.tasks=[];
        },
    },
});

export const authActions=authSlice.actions;
export const store=configureStore({
    reducer:authSlice.reducer,
})
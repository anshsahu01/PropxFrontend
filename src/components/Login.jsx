import React from 'react'
import Input from './Input'
import { useSelector,useDispatch } from 'react-redux'
import authService from '../appwrite/Auth'
import service from '../appwrite/Services'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { current } from '@reduxjs/toolkit'


function Login() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const currentState=useSelector((state)=>state.auth.isLoggedIn);
    const {register,handleSubmit}=useForm();


    const loginHandle=async (data)=>{
        try {

            try {
                const currentSession=await authService.getCurrentUser();
                if(currentSession){
                    console.log("user aleready logged in");
                    navigate("/profile");
                    return currentSession;
                }
                
            } catch (error) {
            throw error;
                
            }
           const session= await authService.Login({email:data.email,password:data.password});
           if(session){
            console.log("login successfully");
            navigate("/profile");
           }
            
        } catch (error) {
            console.log("login error",error);
            throw error;
            
        }

    }


    const handleLogout=async()=>{
        try {
            await authService.Logout();
            
        } catch (error) {
            console.log("error in logout",error);
            throw error;
            
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit(loginHandle)} >
      <Input
            label="Email:"
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />

          <Input
            label="Password:"
            type="text"
            placeholder="Enter your password"
            {...register('password', { required: true })}
          />

           <button type="submit" className="w-full">
            Login
          </button>

          <button onClick={handleLogout}>Logout</button>
          </form>
    </div>
  )
}

export default Login

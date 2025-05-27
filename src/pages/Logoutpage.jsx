import React from 'react'
import Button from '../components/Button'
import authService from '../appwrite/Auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout as authLogout } from '../Store/Authslice'

function Logoutpage() {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleLogout=async ()=>{
       const isLogout= await authService.Logout();
       if(isLogout){
        dispatch(authLogout());
        navigate("/login");
       }

    }
  return (
    <div>
        <Button onClick={handleLogout}
        type='button'
        children='Logout'
        className='w-ful font-bold'/>
        
      
    </div>
  )
}

export default Logoutpage

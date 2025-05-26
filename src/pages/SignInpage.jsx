import React from 'react'
import SignIn from '../components/SignIn'
import { login,logout } from '../Store/Authslice'
import { useSelector,useDispatch } from 'react-redux'




function SignInpage() {
  const currentState=useSelector((state)=>state.auth.isLoggedIn);
  console.log(currentState);
  








  return (
    <div>
        <SignIn/>
      
    </div>
  )
}

export default SignInpage

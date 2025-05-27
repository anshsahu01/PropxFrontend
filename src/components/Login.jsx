import React from 'react';
import Input from './Input';
import { useSelector, useDispatch } from 'react-redux';
import authService from '../appwrite/Auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login as authLogin, logout as authLogout } from '../Store/Authslice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentState = useSelector((state) => state.auth.isLoggedIn);
  const { register, handleSubmit } = useForm();

  const loginHandle = async (data) => {
    try {


      const session = await authService.Login({
        email: data.email,
        password: data.password,
      });

      if (session) {
        console.log('login successfully');
        const currentUser = await authService.getCurrentUser();
        if(currentUser){
        dispatch(authLogin(currentUser));
        navigate('/profile');
      }
      }
    } catch (error) {
      console.log('login error', error);
    }
  };

  const handleLogout = async () => {
    try {
      const currentUser=await authService.getCurrentUser();
      if(currentUser){
        await authService.Logout();
        dispatch(authLogout());
        console.log('Logout successfully');

      }else{
        console.log("not login login first");

      }
      
     
    } catch (error) {
      console.log('error in logout', error);
    }
  };

  return (


    




<div className="min-h-screen flex justify-center items-start bg-white ">
  <div className="w-full min-h-screen max-w-[375px] bg-gray-100 pt-10 px-4 pb-10">
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-left text-gray-900 mb-2">Signin to your</h2>
      <h2 className="text-2xl font-bold text-left text-gray-900 mb-4">PopX account</h2>
      <p className="text-gray-500 text-left text-sm mb-1">Lorem ipsum dolor sit amet,</p>
      <p className="text-gray-500 text-left text-sm mb-6">consectetur adipiscing elit,</p>

      <form onSubmit={handleSubmit(loginHandle)} className="space-y-4">
        <Input
      label="Email"
      placeholder="Enter email"
      className="border border-gray-300 rounded-lg p-3 w-full"
      {...register('Name', { required: true })}
    />

    <Input
      label="Password"
      placeholder="Enter password"
      className="border border-gray-300 rounded-lg p-3 w-full"
      {...register('Name', { required: true })}
    />
        <button
          type="submit"
          className="w-full bg-gray-300 text-gray-700 font-medium py-2 rounded-md transition hover:bg-gray-400"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</div>





   


  );
}

export default Login;


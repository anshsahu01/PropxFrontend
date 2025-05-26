import React,{useState} from 'react'
import Input from './Input'
import { useDispatch,useSelector } from 'react-redux'
import service from '../appwrite/Services'
import authService from '../appwrite/Auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import conf from '../config/Conf'
import { login as authLogin } from '../Store/Authslice'






function SignIn() {
  const [error,setError]=useState();
  const {register,handleSubmit}=useForm();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [isAgency, setIsAgency] = useState(""); // form state

  const handleChange = (e) => {
    setIsAgency(e.target.value); // value update ho gayi
  };
  
  

  const createAccount=async(data)=>{
    
    try {
      
      await authService.createAccount({
        Name:data.Name,
        password:data.password,
        email:data.email
      });

      
        const currentUser=await authService.getCurrentUser();
        if(currentUser){
          dispatch(authLogin(currentUser));
          navigate("/login");
        }
      //  if(currentUser){
      //  const userData= await service.createProfile({
      //   UserId:currentUser.$id,
      //     MobileNo:data.MobileNo,
      //     Company:data.Company,
      //     Name:data.Name,


      //   });
      // }

       

        
      
      
    } catch (error) {
      console.log("Error",error);
      throw error;
      
    }
  }





  return (
    <div>
       <form onSubmit={handleSubmit(createAccount)} className="space-y-4">
          <Input
            label="Full Name:"
            placeholder="Enter your name"
            {...register('Name', { required: true })}
          />

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

          <Input
            label="Company:"
            type="text"
            placeholder="Company Name"
            {...register('Company', { required: true })}
          />

          <Input
            label="MobileNo:"
            type="text"
            placeholder="Mobile No"
            {...register('MobileNo', { required: true })}
          />

            <label className="block text-gray-700 font-medium mb-2">
    Are you an Agency? <span className="text-red-500">*</span>
  </label>
  <div className="flex space-x-6">
    <Input
      label="Yes"
      name="isAgency"
      type="radio"
      value="yes"
      onChange={handleChange}
      required
    />
    <Input
      label="No"
      name="isAgency"
      type="radio"
      value="no"
      onChange={handleChange}
    />
  </div>






           <button type="submit" className="w-full">
            Create Account
          </button>
        </form>


        
      
    </div>
  )
}

export default SignIn

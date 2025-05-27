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

    //  const islogin= await authService.Login({email:data.email,password:email.password});
     

      
        const currentUser=await authService.getCurrentUser();
        if(currentUser){
          dispatch(authLogin(currentUser));
          navigate("/login");
        }

        
    } catch (error) {
      console.log("Error",error);
      throw error;
      
    }
  }





  return (
  //   <div>
  //      <form onSubmit={handleSubmit(createAccount)} className="space-y-4">
  //         <Input
  //           label="Full Name:"
  //           placeholder="Enter your name"
  //           {...register('Name', { required: true })}
  //         />

  //         <Input
  //           label="Email:"
  //           type="email"
  //           placeholder="Enter your email"
  //           {...register('email', { required: true })}
  //         />

  //         <Input
  //           label="Password:"
  //           type="text"
  //           placeholder="Enter your password"
  //           {...register('password', { required: true })}
  //         />

  //         <Input
  //           label="Company:"
  //           type="text"
  //           placeholder="Company Name"
  //           {...register('Company', { required: true })}
  //         />

  //         <Input
  //           label="MobileNo:"
  //           type="text"
  //           placeholder="Mobile No"
  //           {...register('MobileNo', { required: true })}
  //         />

  //           <label className="block text-gray-700 font-medium mb-2">
  //   Are you an Agency? <span className="text-red-500">*</span>
  // </label>
  // <div className="flex space-x-6">
  //   <Input
  //     label="Yes"
  //     name="isAgency"
  //     type="radio"
  //     value="yes"
  //     onChange={handleChange}
  //     required
  //   />
  //   <Input
  //     label="No"
  //     name="isAgency"
  //     type="radio"
  //     value="no"
  //     onChange={handleChange}
  //   />
  // </div>






  //          <button type="submit" className="w-full">
  //           Create Account
  //         </button>
  //       </form>


        
      
  //   </div>

  <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
  <h1 className="text-2xl text-left font-semibold text-center mb-1">Create your </h1>
  <h1 className="text-2xl text-left font-semibold text-center mb-6">PopX account</h1>
  <form onSubmit={handleSubmit(createAccount)} className="space-y-4">
    <Input
      label="Full Name:"
      placeholder="Enter your name"
      className="border border-gray-300 rounded-lg p-3 w-full"
      {...register('Name', { required: true })}
    />

    <Input
      label="Phone number:"
      type="text"
      placeholder="Enter your phone number"
      className="border border-gray-300 rounded-lg p-3 w-full"
      {...register('phoneNo', { required: true })}
    />

    <Input
      label="Email address:"
      type="email"
      placeholder="Enter your email"
      className="border border-gray-300 rounded-lg p-3 w-full"
      {...register('email', { required: true })}
    />

    <Input
      label="Password:"
      type="text"
      placeholder="Enter your password"
      className="border border-gray-300 rounded-lg p-3 w-full"
      {...register('password', { required: true })}
    />

    <Input
      label="Company name:"
      type="text"
      placeholder="Enter your company name"
      className="border border-gray-300 rounded-lg p-3 w-full"
      {...register('Company', { required: true })}
    />

    <label className="block text-gray-700 font-medium mb-2">
      Are you an Agency? <span className="text-red-500">*</span>
    </label>
    <div className="flex items-center space-x-4 mb-4">
      <Input
        label="Yes"
        name="isAgency"
        type="radio"
        value="yes"
        className="mr-2"
        onChange={handleChange}
        required
      />
      <Input
        label="No"
        name="isAgency"
        type="radio"
        value="no"
        className="mr-2"
        onChange={handleChange}
      />
    </div>

    <button
      type="submit"
      className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-500 transition duration-200"
    >
      Create Account
    </button>
  </form>
</div>

  )
}

export default SignIn

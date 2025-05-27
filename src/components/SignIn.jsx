import React, { useState } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import service from "../appwrite/Services";
import authService from "../appwrite/Auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { login as authLogin } from "../Store/Authslice";
import Button from "./Button";

function SignIn() {
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAgency, setIsAgency] = useState(""); // form state

  const handleChange = (e) => {
    setIsAgency(e.target.value); // value update ho gayi
  };

  const createAccount = async (data) => {
    try {
      await authService.Logout();

      // create account
      await authService.createAccount({
        Name: data.Name,
        password: data.password,
        email: data.email,
      });

      // login after account creation
      await authService.Login({
        email: data.email,
        password: data.password,
      });

      // now get user
      const currentUser = await authService.getCurrentUser();

      // create profile
      await service.createProfile({
        UserId: currentUser.$id,
        MobileNo: data.MobileNo,
        Company: data.Company,
        Name: data.Name,
        email: data.email,
      });

      dispatch(authLogin(currentUser));
      navigate("/profile");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="bg-gray-100 w-[390px] h-[844px] border border-gray-400 rounded-sm shadow-md p-4 ">
      <h1 className="text-2xl text-left font-semibold  mb-1">Create your </h1>
      <h1 className="text-2xl text-left font-semibold  mb-6">PopX account</h1>
      <form onSubmit={handleSubmit(createAccount)} className="space-y-4">
        <Input
          label="Full Name:"
          placeholder="Enter your name"
          className="border border-gray-300 rounded-lg p-3 w-full"
          {...register("Name", { required: true })}
        />

        <Input
          label="Phone number:"
          type="text"
          placeholder="Enter your phone number"
          className="border border-gray-300 rounded-lg p-3 w-full"
          {...register("MobileNo", { required: true })}
        />

        <Input
          label="Email address:"
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-lg p-3 w-full"
          {...register("email", { required: true })}
        />

        <Input
          label="Password:"
          type="text"
          placeholder="Enter your password"
          className="border border-gray-300 rounded-lg p-3 w-full"
          {...register("password", { required: true })}
        />

        <Input
          label="Company name:"
          type="text"
          placeholder="Enter your company name"
          className="border border-gray-300 rounded-lg p-3 w-full"
          {...register("Company", { required: true })}
        />

        <label className="block text-left text-gray-700 font-medium mb-2">
          Are you an Agency? <span className="text-red-500">*</span>
        </label>

        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="IsAgency"
              value="yes"
              onChange={handleChange}
              required
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="IsAgency"
              value="no"
              onChange={handleChange}
            />
            <span>No</span>
          </label>
        </div>

        <Button
          type="submit"
          children="Create Account"
          className="w-full font-bold"
        />
      </form>
    </div>
  );
}

export default SignIn;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F7F8F9] pb-1 flex items-center justify-center">
      <div className="w-[375px] h-[812px] bg-white shadow-md flex flex-col justify-end p-6 rounded-sm border-gray-400">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#1D2226] mb-2 text-left">
            Welcome to PopX
          </h1>
          <p className="text-sm text-[#3E3E3E] text-left">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={() => navigate("/signin")}
            className="w-full bg-[#6C25FF] text-white text-sm font-semibold py-3 rounded-md"
            children='Create Account'
            type="button"
          />
           
          

          <Button
            onClick={() => navigate("/login")}
            type="button"
            children='Already Registered? Login'
            className="w-full bg-purple-200 text-[#1D2226] text-sm font-semibold py-3 rounded-md"
          />
           
        </div>
      </div>
    </div>
  );
}

export default Homepage;

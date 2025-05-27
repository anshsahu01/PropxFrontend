import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F7F8F9] flex items-center justify-center">
      <div className="w-[375px] h-[812px] bg-white shadow-md flex flex-col justify-end p-6 rounded-md">
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
          <button
            onClick={() => navigate("/signin")}
            className="w-full bg-[#6C25FF] text-white text-sm font-semibold py-3 rounded-md"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-[#EEE5FF] text-[#1D2226] text-sm font-semibold py-3 rounded-md"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

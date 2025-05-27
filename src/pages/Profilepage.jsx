import React, { useEffect, useState } from "react";
import service from "../appwrite/Services";

import authService from "../appwrite/Auth";
import conf from "../config/Conf";
import { login, logout } from "../Store/Authslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

function Profilepage() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getProfile = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          const profileDetails = await service.getProfileDetails(user.$id);
          console.log("Profile fetched:", profileDetails);
          setData(profileDetails);
        }
      } catch (err) {
        console.error("Error getting profile:", err);
      }
    };

    getProfile();
  }, []);

  console.log(data);

  const handleLogout = async () => {
    try {
      await authService.Logout();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <div className="min-h-screen w-full flex  justify-center overflow-y-hidden  ">
        <div className="bg-gray-100 w-[390px] h-[844px] border border-gray-400 rounded-sm shadow-md ">
          <div className="px-4 py-4 bg-white">
            <h2 className="text-xl my-4 ml-2text-lg text-left font-medium text-gray-800">
              Account Settings
            </h2>
          </div>

          <div className="px-4 py-4 flex gap-4 items-start">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-violet-600 p-[6px] rounded-full">
                <Camera size={14} className="text-white" />
              </div>
            </div>

            <div className="pt-1">
              <h3 className="text-sm  text-left font-bold text-gray-900">
                {data?.Name}
              </h3>
              <p className="text-sm text-left text-black">{data?.email}</p>
            </div>
          </div>

          <div className="px-4 pb-6 pt-1">
            <p className="text-sm font-semibold text-black text-left">
              Lorem ipsum dolor sit amet, consectetur sadipscing
            </p>
            <p className="text-sm font-semibold  text-black text-left">
              elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
            <p className="text-sm font-semibold  text-black text-left">
              labore et dolore magna aliquyam erat, sed diam
            </p>
          </div>
        </div>
      </div>

      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
}

export default Profilepage;

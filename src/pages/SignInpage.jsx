import React from "react";
import SignIn from "../components/SignIn";

import { useSelector } from "react-redux";

function SignInpage() {
  const currentState = useSelector((state) => state.auth.isLoggedIn);
  console.log(currentState);

  return (
    <div className="flex justify-center mt-0 items-center bg-white">
      <SignIn />
    </div>
  );
}

export default SignInpage;

import React from "react";

function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

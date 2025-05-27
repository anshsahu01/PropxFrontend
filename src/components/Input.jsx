import React, { useId } from "react";

function Input({ label, type, className = "", ...props }, ref) {
  const Id = useId();
  return (
    <div className="relative mb-6">
      <label
        htmlFor={Id}
        className="absolute text-sm text-purple-700 font-medium left-3 -top-2.5 bg-gray-100 px-1 z-10"
      >
        {label}
      </label>

      <input
        type={type}
        id={Id}
        ref={ref}
        className={`w-full px-3 pt-5 pb-2 border border-gray-400 rounded-[6px] focus:outline-none focus:border-gray-500 shadow-sm transition duration-150 ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;

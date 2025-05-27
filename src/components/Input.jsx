import React,{useId} from 'react'


function Input({
    label,
    type,
    className="",
    ...props
},ref) {
    const Id=useId();
  return (
    // <div>

    //     {label && (

    //         <label 
    //         htmlFor={Id}
    //         className={className}>{label}</label>
    //     )}

    //     <input
    //     type={type}
    //     id={Id}
    //     ref={ref}
    //     className={`w-full {className}`}
    //     {...props}/>
      
    // </div>


//     <div className="mb-6">
//   {label && (
//     <label
//       htmlFor={Id}
//       className="block text-purple-800 text-sm text-left font-semibold mb-1"
//     >
//       {label}
//     </label>
//   )}

//   <input
//     type={type}
//     id={Id}
//     ref={ref}
//     className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150 ease-in-out ${className}`}
//     {...props}
//   />
// </div>

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


  )
}

export default Input

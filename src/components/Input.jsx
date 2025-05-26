import React,{useId} from 'react'


function Input({
    label,
    type,
    className="",
    ...props
},ref) {
    const Id=useId();
  return (
    <div>

        {label && (

            <label 
            htmlFor={Id}
            className={className}>{label}</label>
        )}

        <input
        type={type}
        id={Id}
        ref={ref}
        className={`w-full {className}`}
        {...props}/>
      
    </div>
  )
}

export default Input

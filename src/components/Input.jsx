import React from "react";



const Input = ({placeholder, type,name, onChange}) =>{

    return(
        <div className="flex justify-center items-center">
            <input type = {type}
            placeholder={placeholder} 
            name={name}
            onChange={onChange}
            className="w-96 p-4 text-lg outline-none bg-gray-100 shadow-inner rounded-full hover:outline-2" />

        </div>    
    )
}

export default Input;
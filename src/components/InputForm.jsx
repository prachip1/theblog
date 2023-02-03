import React from "react";

const InputForm = () =>{

    return(
        <div>
            <div className="bg-gray-300 rounded-lg p-4 outline-none">
                <input type="text" placeholder="Enter Title"/>
                <input type="text" placeholder="Enter subtitle (optional)" />
            </div>
        </div>
    )
}


export default InputForm;
import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () =>{

  const navigate = useNavigate();


    return(
        <div className="flex justify-between p-6">
         <div className="ml-2 cursor-pointer" onClick={()=>{navigate("/")}}>
           <h2 className="font-semibold text-xl flex ml-6">blog <p className="text-purple-700 text-xl">.</p></h2> 
         </div>
         <div className="gap-4">
           <button className="text-black font-semibold mr-14" onClick={()=>{navigate("/login")}}>Login</button>
            <button className="bg-black text-white p-4 mr-6" onClick={()=>{navigate("/register")}}>Register</button>
         </div>
        </div>
    )
}

export default Navbar;
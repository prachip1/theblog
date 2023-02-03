import React from "react";
import { motion as m} from 'framer-motion'



const Formform = () =>{

    return(
        <form className="bg-gray-600 p-10 h-64">
            <h2 className="text-white text-base font-light mt-2">Don't worry we won't spam, unsubscribe anytime!</h2>
            <div className="flex flex-col mt-8 justify-start items-start" >
            <m.input whileTap={{scale: 0.7,}}
             transition={{ duration: 0.75, ease: "easeOut"}}
            placeholder="🐱‍🏍Enter your email" 
            className="bg-gray-600 text-gray-50 w-full leading-normal outline-none border-b-2 shadow-lg text-sm"/>
            <button className="bg-black px-6 py-4 text-teal-100 mt-6 rounded-full">Subscribe</button>
            </div>
            
        </form>
    )
}

export default Formform;
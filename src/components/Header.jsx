import React from 'react';
import Style from './Style.css';
import { motion as m } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Header = ({src}) =>{
    const navigate = useNavigate();

    return(
        <div className='flex flex-col gap-6 shadow-2xl lg:flex-row '>
            <div className='lg:w-2/3'>
               <img src={"https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=600" }
                className='lg:w-2/3' />
            </div>
            <div className='flex flex-col lg:w-1/3 lg:-ml-44 p-8'>
                <span className="text-2xl">Blog Title</span>
                <span className='mt-8'>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                </span>
                <m.button 
                whileHover={{ scale: 1.1, backgroundColor:"rgb(1,1,1)", color:"white", duration:0.75}}
                whileTap = {{scale: 0.9}}
                className='text-center mt-8 px-2 py-4 w-32' onClick={() =>{navigate('/blogpage')}}>
                    Read More</m.button>
            </div>
        </div>
    )
}

export default Header;
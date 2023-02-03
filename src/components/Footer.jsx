import React from 'react';
import {BsInstagram, BsGithub, BsTwitter} from 'react-icons/bs';
import Formform from './Formform';
import { motion as m} from 'framer-motion';

const Footer = () =>{

    return(
        <div className="flex text-black justify-between p-6 h-60 w-full border-t-2">
            
            <m.div className='flex flex-col' initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 0.75, ease: "easeOut"}}>  {/*first div */}
            <h2 className="font-semibold text-xl flex">blog <p className="text-green-400 text-xl">.</p></h2> 
             <h4 className='mt-6'> A place to have blogs in simple and informative words.</h4>
            <div className='mt-28'>
            <p className='text-sm'>Coded in ReactJS and Tailwind CSS ❤</p>
             <p className='text-xs'>© 2021-2022</p> 
             </div>
        
            </m.div>
            <m.div className='flex' initial={{opacity:0}} animate={{opacity:1}} transition={{ duration: 0.90, ease: "easeOut"}}>
              
               <div className='flex flex-col mt-8 justify-start '>
               <h2 className='text-center mb-4 font-semibold text-base'>Give us a follow</h2>
               <h2 className='flex gap-2 justify-start items-center'><BsInstagram /> Instagram</h2> 
               <h2 className='flex gap-2 justify-start items-center'><BsGithub /> Github</h2>   
               <h2 className='flex gap-2 justify-start items-center'><BsTwitter /> Twitter</h2>
               </div>
            </m.div>
            <div className='flex'>
            <Formform />
            </div>
        </div>
    )
}

export default Footer;
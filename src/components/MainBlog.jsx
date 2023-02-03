import React from "react";
import { Link } from "react-router-dom";
import {RiEdit2Fill} from 'react-icons/ri';
import {BsInstagram} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';
import {GrYoutube} from 'react-icons/gr';
import {RiDeleteBinFill} from 'react-icons/ri';





const MainBlog =({p})=>{

       



    return(
        <div className="bg-gray-100 p-44 justify-center items-center relative">
            <div className="flex w-55 -mt-16"> {/*cover image  */}
                <img src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg" 
                className="w-55 h-96 object-cover object-center" />

                <div className="ml-6 bg-slate-100 p-16 rounded-xl shadow-sm shadow-slate-500">   {/*author detail*/ }
                    <div className="rounded-full ">
                    <img src="https://ik.imagekit.io/iif2lo8ef1/assets/images/prachiheaderopt.jpg"
                    className="rounded-full w-24 h-24 shadow-lg" />

                    </div>
                   
                    <div className="flex flex-col justify-center items-center">
                   
                    <span className="font-bold text-slate-800 text-[18px] outline-solid">Prachi P</span>
                    
                    </div>
                    <p className="text-gray-600 font-medium text-center text-[14px]">Bio</p>
                    <div className="flex mt-4">
                      <ul className="flex flex-row gap-2 justify-center items-center ml-4">
                       <a href="https://www.instagram.com/uxprachicodes/" target="_blank"><li className="cursor-pointer"><BsInstagram /></li></a>
                       <a href="https://www.twitter.com/uxprachicodes/" target="_blank"><li className="cursor-pointer"><FaTwitter /></li> </a>
                       <a href="https://www.youtube.com/@uxprachicodes/" target="_blank"><li className="cursor-pointer"><GrYoutube className="text-xl"/></li></a>
                       
                      </ul>
                    </div>
                    {/*edit section */}
                  <div className="absolute flex gap-3 border-t-2 w-44 -ml-12 mt-4">
                    <div className="flex gap-4 justify-center items-center ml-10 mt-6">
                    <Link to={`/draft?edit=2`}>
                  <button className="border-2 border-purple-500 rounded-md px-12 py-3.5 text-purple-500 text-md font-semibold justify-center items-center">Edit</button>
                
                  </Link>

                  

                    </div>
              
                  </div> 

                
                
                </div>
                 {/*this is for google ad */}
                <div className="flex ml-28 w-30 p-10 text-right">
                    For google ad
                  </div>

        
              
            </div>
            
            <div className="mt-12 p-4 gap-6">
                <h1 className="text-4xl font-bold">Blog Title</h1>
                <p className="text-lg">subtitle</p>
            </div>

            <div className="p-4 gap-6">
               
            <p className="text-sm text-gray-600">18 Jan 2023</p>
            </div>

            {/* content body*/}
            <div className="flex flex-col justify-center align-center p-24 text-justify -ml-20 w-full -mt-20">
              <p className="">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged.</p> <br></br>

            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. </p> 
            
         
            </div>

            </div>
      )}
export default MainBlog;
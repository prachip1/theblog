import React from "react";
import Header from './components/Header';
import Cards from './components/Cards'
import Search from "./components/Search";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

import { animate, motion as m } from "framer-motion";

const Home = () =>{

  const blogs = [
    {
      id:1,
      title: "Blog Title 1",
      desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:2,
      title: "Blog Titl 2",
      desc:"This is the description of showing how to do it second",
      img:"https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:3,
      title: "This is it",
      desc:"This is the description of showing how to do it",
      img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },

    {
      id:4,
      title: "This is the second",
      desc:"This is the description of showing how to do it second",
      img:"https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id:5,
      title: "Blog Title 5",
      desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:6,
      title: "Blog Title 6",
      desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img:"https://images.pexels.com/photos/3183135/pexels-photo-3183135.jpeg?auto=compress&cs=tinysrgb&w=600",
    }

  ]
  return(
    <m.div className="flex flex-col justify-center items-center p-12" 
          initial={{opacity: 0}} 
          animate={{opacity:1}} 
          transition={{ duration: 0.75, ease: "easeOut"}}>
    
      <Search />
   
    
      <div className="mt-24 justify-center items-center">  {/* this is for the recent blog section*/}
        <Header />
      </div>

   <div className="mt-16 gap-8 flex flex-wrap justify-center items-center"> {/* this is for the cards section*/}
    {blogs.map((post) => (
      
       <Cards key = {post.id} items={post} />
     
    ))}

  </div>
  
 
</m.div>
  )
}

export default Home;
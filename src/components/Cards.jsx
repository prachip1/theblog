import React from 'react';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cards = ({items}) =>{
    return(
        <m.div className='flex flex-col gap-6 shadow-xl flex-wrap justify-center items-center'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{ once: true }}
        >
        <div className='w-96'>
           <img src={items.img} 
           className='w-96'/>
        </div>
        <div className='flex flex-col w-96 p-4'>
           <Link to={`/blog/${items.id}`}><span className="text-2xl">{items.title}</span></Link>
            <span className='mt-8 w-80'>{items.desc}
            </span>
            <m.button   
            whileHover={{ scale: 1.1, backgroundColor:"rgb(1,1,1)", color:"white", duration:0.75}}
            whileTap = {{scale: 0.9}}
             className='text-center mt-8 px-2 py-4 w-32'>Read More</m.button>
        </div>
    </m.div>
    )
}

export default Cards;
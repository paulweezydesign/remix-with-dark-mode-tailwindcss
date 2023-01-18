import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaBars  } from 'react-icons/fa'
import { Navigation } from './Navigation';
import "./Sidebar.css"
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="">

        {isOpen && (
       <motion.aside
       animate={isOpen ? "open" : "closed"}
      variants={variants}
       className='fixed bottom-0 top-0 left-0 w-[350px] animate-[translate-x-full]  z-50 h-screen bg-black  shadow-xl shadow-black/60'>
                <div className="">
                    <div className='flex justify-end w-full'>
                <button className='text-3xl font-medium pr-4 pt-3 bg-transparent text-white'   onClick={() => setIsOpen(isOpen => !isOpen)} >&times;</button>
                </div>s
                    <h1 className="text-xl text-white text-center font-black">Menu</h1>
                    <Navigation />
                </div>
        </motion.aside>
            )}
            </div>
        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
 
        onClick={() => setIsOpen(isOpen => !isOpen)}>
              <FaBars className='text-4xl' />
        </motion.button>
        </>
    )
}
export default  Sidebar;
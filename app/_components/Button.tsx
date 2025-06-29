"use client"
import React, { FC } from 'react'
import {motion} from "framer-motion"
const Button:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <motion.button 
     whileHover={{y:[10,-10,0]}}
    //  transition={{type:"spring",stiffness:200}}
     className={`border-0 p-2 outline-0 bg-purple-500 min-w-[50px] rounded-lg`}>
        {children} 
     </motion.button>
  )
}

export default Button

"use client"
import React, { FC } from 'react'
import {motion} from "framer-motion"

const MotinCard:FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <motion.div
    initial={{y:100}}
    whileInView={{y:0}}
    transition={{duration:.5}}
    >
       {children}
    </motion.div>
  )
  
}

export default MotinCard

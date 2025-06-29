"use client"
import React from 'react'
import {motion} from "framer-motion"

const loading = () => {
  return (
     <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-blue-600 z-50"
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  )
}

export default loading
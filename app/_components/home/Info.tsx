"use client"
import React  from 'react'
import {motion} from "framer-motion"
import AnemyFn from "./animy"
import { useRouter } from 'next/navigation'
const Info = () => {
  const text = " I am Front-End Developer"
  const router = useRouter()
  return (
    <div className='w-full  lg:w-3/4 p-6 flex flex-col justify-center items-center gap-1   mx-auto mt-20 relative'>
      <h2 className='text-slate-600 font-semibold text-lg'>Hi</h2>

       <h1 className="font-extrabold text-xl md:text-2xl lg:text-4xl text-slate-900 mb-3 flex flex-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -10, 0], // يتحرك لأعلى ثم يرجع
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * 0.1, // يجعل الحركة موجية
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
        <p className='text-slate-500 text-center mb-3 w-full lg:w-3/4 mx-auto'>
            I am a front-end developer with a 
            passion for creating dynamic and responsive web applications. I specialize in using modern technologies like React, Next.js, and Tailwind CSS to build user-friendly interfaces that enhance the user experience.
          </p>

          <a 
          href={"/cv2025.pdf"}
          target="_blank"
          className='p-1.5 border-2 border-purple-300  min-w-24  rounded-md cursor-pointer flex justify-center items-center' >
            Download Cv
          </a>

<AnemyFn  layer='size-16 lg:size-24 rounded top-7 left-8 bg-gradient-to-b from-purple-700 to-blue-600 opacity-20  ' />
<AnemyFn  animate={{x:[12,0,12]}} layer='size-14 lg:size-20 rounded top-1/2  right-10 bg-gradient-to-r from-orange-700 to-yellow-600 opacity-20  ' />
<AnemyFn  animate={{scale:[.8,1.3,.8]}} layer='size-10 lg:size-14 rounded left-1/3  top-full bg-gradient-to-b  from-green-600 to-lime-400  opacity-20  ' />
    </div>
  )
}

export default Info

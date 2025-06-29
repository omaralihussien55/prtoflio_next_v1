"use client"
import React, { FC } from 'react'
import { Handshake, Rocket, Sparkles, Wrench } from 'lucide-react'

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const parentVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const childVariant: Variants = {
  hidden: {
    x: -100, // يبدأ من اليسار
    opacity: 0,
  },
  visible: {
    x: 0,   // يتحرك إلى مكانه الطبيعي
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AboutMe = () => {
  return (
    <section className="min-h-screen">
      <div className="flex items-center justify-center p-2 rounded-md h-full mb-32">
        <div className="w-full md:w-3/4 lg:w-2/3 shadow bg-white">
          <div className="h-full p-2">
            <motion.h1 initial={{opacity:0,x:-80}}
             animate={{x:0,opacity:1}} 
             transition={{type:"spring",stiffness:200}}
             className="font-extrabold text-[90px] text-purple-700 tracking-wider md:text-[125px] lg:text-[170px] md:leading-44">
              About
            </motion.h1>
            <div className="flex gap-2">
              <motion.span initial={{opacity:0,x:-80}}
             animate={{x:0,opacity:1}} 
             transition={{type:"spring",stiffness:200,delay:.4}} className="block font-extrabold text-[75px] text-blue-500 md:text-[115px] lg:text-[150px] leading-[70px] md:leading-20 lg:leading-36">
                Me
              </motion.span>


              <div>
                <p className="text-gray-700 text-sm">
                  Hello! I'm a passionate Front-End Developer with a strong focus on
                  building modern, high-performance user interfaces.
                </p>
                <p className="font-bold hidden md:block text-sm text-[#0f172a] my-1">
                  HTML, CSS, JavaScript, React.js, Redux Toolkit, Tailwind CSS, React
                  Query, TypeScript, and Next.js.
                </p>
              </div>
            </div>

            <motion.div
             variants={parentVariant}
             initial="hidden"
             animate="visible"
            >
              
              <motion.p variants={childVariant} className="font-bold md:hidden text-sm text-[#0f172a] my-1 flex gap-2">
                <Wrench className="text-green-600" size={28} />
                <span>
                  HTML, CSS, JavaScript, React.js, Redux Toolkit, Tailwind CSS, React
                  Query, TypeScript, and Next.js.
                </span>
              </motion.p>

              <Paragraph>
                    <Sparkles className="text-yellow-500" size={48} />
                <span>
                  I care deeply about user experience, clean and reusable code, and
                  optimal performance. I believe that the small details make a big
                  difference, and I’m always eager to learn new technologies and stay
                  up-to-date with the latest in web development.
                </span>
              </Paragraph>
              
              <Paragraph>
                    <Rocket className="text-red-500" size={28} />
                <span>
                  Whether it's a simple landing page or a complex web app, my goal is
                  always to deliver a smooth and impressive experience for the end
                  user.
                </span>
              </Paragraph>
              <Paragraph>
                     <Handshake className="text-purple-600" size={28} />
                <span>
                  I’m known for being detail-oriented, proactive, and a great team
                  player. I enjoy sharing knowledge and collaborating with development
                  teams to deliver the best possible solutions.
                </span>
              </Paragraph>
              
            </motion.div>
       </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutMe


const Paragraph:FC<{children:React.ReactNode}> = ({children})=>{
  return <motion.p variants={childVariant} className="text-gray-500 mt-1.5 flex gap-2">
    {children}
  </motion.p>
}
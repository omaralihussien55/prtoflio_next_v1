"use client"
import { Phone ,Mail,Facebook,Linkedin} from 'lucide-react'
import React, { FC } from 'react'
import Title from '../Title'
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

const ContactComponent = () => {
  return (
    <div className='min-h-screen'>
    <Title title='Contact Us' />
    
        <div className='w-[90%] md:w-md mx-auto  bg-white shadow p-5 rounded-lg mb-40'>
      
      <motion.div 
      variants={parentVariant}
      initial="hidden"
      animate="visible"
      className='w-11/12 mx-auto'>
         <Item  name='01093389354'  icon={<Phone size={22} />}/>
         <Item  name='omaralihussien55@gmail.com' dir='left' color='border-purple-300'  borderCir_Dir2="border-r-purple-400"  icon={<Mail size={22} />} />
         <Item  name='facebook' color='border-blue-500'   borderCir_Dir2="border-l-blue-500" icon={<Facebook size={22} />}/>
         <Item  name='linkdin' dir='left' color='border-blue-300'   borderCir_Dir2="border-r-blue-300" icon={<Linkedin size={22} />}/>
      </motion.div>
    </div>
    </div>

  )
}



export default ContactComponent


const Item:FC<{dir?:string ,color?:string, borderCir_Dir2?:string,icon?:React.ReactNode,name:string

}> = ({dir="right",color="border-green-300",borderCir_Dir2="border-l-green-400",icon,name})=>{
  return(    <motion.div variants={childVariant} className='flex items-center justify-between gap-3 mb-5'>
             {dir=="right"? <div className='w-1/3 '></div>: <div className={`px-8 h-20 p-2 w-1/3 text-[9px] md:text-[12px]   font-bold text-gray-400 flex justify-center  items-center border-t-3 ${color} border-dotted`}>{name}</div>}
              <div className='w-1/3'>
                <div className='w-full  h-20 relative overflow-hidden  flex justify-center items-center '>
                  
                      <span className={`block absolute top-0 h-full w-[8%] ${dir=="right" ?"right-0":"left-0"} bg-white z-10 ${color} border-t-3`}></span>

                       
                     <div className={`h-20 ${dir=="right" ? "left-[20%]":"right-[20%]"} rounded-full flex   w-full absolute border-3  ${color} ${dir=="right" ? "border-r-0 ":"border-l-0 "}`}>
                         <div className={`size-20 absolute -top-1.5 ${dir=="right" ?"rotate-25":"-rotate-25"} ${dir=="right" ?"-left-2":"-right-2"}  flex justify-center items-center  rounded-full 
                         border-transparent z-20 border-[10px] ${borderCir_Dir2}`}>
                              
                         <div className='w-[98%] h-[98%] text-gray-500 flex justify-center items-center  rounded-full shadow-[8px_8px_6px_rgba(0,0,0,0.2),-6px_-6px_4px_rgba(0,0,0,0.2)]'>
                           <div className={`flex justify-center items-center ${dir=="right" ? "-rotate-25":"rotate-25"} `}>{icon}</div>
                         </div>
                         </div>

                     </div>
                </div>
              </div>
              
               {dir=="right"?  <div className={`px-8 h-20 p-2 w-1/3  text-[9px] md:text-[12px]  text-gray-400 flex justify-center  items-center   border-t-3 ${color} border-dotted`}>{name}</div>:<div className='w-1/3 '></div>}
          </motion.div>)
}     
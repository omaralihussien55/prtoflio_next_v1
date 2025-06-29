"use client"

import { FC } from "react"
import {motion} from "framer-motion"
const AnemyFn:FC<{layer:string,time?:number,animate?:Parameters<typeof motion.div>["0"]["animate"]}> = ({layer,time=3,animate={y:[15,0,15]}})=>{


  return (
  <motion.div 
   animate={animate}
   
   transition={{
    
    repeat:Infinity,
    duration:time
   }}
  className={`absolute ${layer} `}>

  </motion.div>
 )
}

export default AnemyFn
"use client"
import React from 'react'
import InfoFlexCards from '../cards/CardsProjects'
import Title from '../Title'
import { ArrayProject } from '../db'
import {motion} from "framer-motion"
const ProjectComponent = () => {

  return (
     <motion.div
     initial={{y:200}}
     animate={{y:0}}
     exit={{y:-200}}
     transition={{type:"spring",stiffness:200}}
     className="min-h-screen   p-4 ">
        <Title title='Projects'  />
      <div className="flex flex-wrap justify-center gap-6 mb-32">
        {
            ArrayProject.map((i:any,idx:number)=>{
                 return <InfoFlexCards title={i?.title} info={i.info} photo={i.photo} link={i.link} key={idx} />
            })
        }
      </div>
      </motion.div>
  )
}

export default ProjectComponent

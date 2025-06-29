"use client"
import React, { useEffect, useRef, useState } from 'react'
import {Home,Contact,User,Projector} from "lucide-react"
import style from "./navbar.module.css"
import Link from 'next/link'

interface itemsProps{
  name:string,
  link:string,
  icon:React.ReactNode,
}
const items : Array<itemsProps> = [{name:"home",link:"/",icon:<Home size={22}/>},{name:"about",link:"/about",icon:<User size={22}/>},
    {name:"contact",link:"/contact",icon:<Contact size={22}/>},{name:"project",link:"/projects",icon:<Projector size={22}/>}
]
const NavbarMagic = () => {
      const [active, setActive] = useState("home");
      const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
      const itemRefs:any = useRef({});
      useEffect(() => {
        const currentItem  = itemRefs.current[active];

        if (currentItem) {
          const { offsetLeft, clientWidth } = currentItem;
          setIndicatorProps({ left: offsetLeft, width: clientWidth });
        }
      }, [active]);
  return (
    <div className={`${style.nav} w-[90%] mx-auto md:w-1/2 `}>
      <ul className={`${style.lists}`}>
        {items.map((i,idx)=>{
             
            return(
                <li key={idx} 
                onClick={()=> setActive(i.name)}
                ref={(el:any)=> (itemRefs.current[i.name] = el)}
                className={`${style.list} ${active === i.name? style.active:""} }`}>
                    <Link href={i.link} className={`${style.link}`}>
                   <span className={`${style.ic}`} >{i.icon}</span>
                    <span className={`${style.sp} ${style.text}`}>{i.name}</span>
                    <span className={`${style.sp} ${style.circle}`}></span>
                    </Link>
                </li>
            )
        })}
        <div className={style.indec}
        style={{left: indicatorProps.left,
        //   width: indicatorProps.width,
        }}
        ></div>
      </ul>
    </div>
  )
}

export default NavbarMagic

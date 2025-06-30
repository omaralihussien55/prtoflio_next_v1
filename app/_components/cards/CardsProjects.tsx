
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import MotinCard from "./MotinCard";

export interface CardProps {title:string,photo:string | StaticImageData ,link:string,info:string,api?:string,select?:string}
 const  InfoFlexCards:FC<CardProps> =({title,photo,info,link})=> {

  return (
    <MotinCard>
          <div
            className="bg-white rounded-xl shadow-[2px_2px_3px_rgba(0,0,0,0.1),-2px_-2px_2px_rgba(0,0,0,0.1)] p-6 w-64 h-64 flex flex-col justify-between text-center "
          >   
          
             <div className="flex justify-center items-center">
                 <div className="size-16 rounded-full overflow-hidden shadow-[2px_2px_3px_rgba(0,0,0,0.1),-2px_-2px_2px_rgba(0,0,0,0.1)]">
                 <Image src={photo} className="w-full h-full"alt=""  />
             </div>
             </div>
            <div>
              <h2 className="text-lg font-semibold mb-2 tracking-widest text-gray-900">{title}</h2>
              <p className="text-gray-500 text-sm tracking-wider">
                {info}
              </p>
            </div>
            {link&& <Link href={link} target="_blank"  className={`p-1 rounded-md block bg-indigo-100 text-indigo-400`}>visit</Link>}
           


          </div>
      </MotinCard> 
  )
}
export default InfoFlexCards
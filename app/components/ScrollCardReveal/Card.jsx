"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Card = () => {
//imageArray
const imageData = [
  {
    id: 1,
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    image: "https://picsum.photos/600/400?random=4",
  },
];
//animation logic
useEffect(()=>{
const containers=gsap.utils.toArray(".container")
containers.forEach((container)=>{
    const imageBox=container.querySelector(".image-box")
     gsap.to(imageBox,{
  height:"520px",
  duration:1,
//   ease:'power1.inOut',
  scrollTrigger:{
    trigger:container,
    scroller:"body",
    markers:true
  }  
 })  
}) 
},[])
  return (
    <div className='my-80'>
        <div className='h-[100vh]'>

        </div>
  {
    imageData.map((img,index)=>(
              <div key={index}  className='relative group mt-20 container'>
       <div className='w-full h-130 bg-gray-400'>
      </div>
     <div  className=' image-box  w-full  absolute inset-0  h-0 group-hover:h-0 transition-all duration-500 group-hover:rounded-br-[100px]'>
        <img src={img.image} alt="image"  className='w-full h-full object-cover'/>
     </div>
   </div>
    ))
  }
    </div>
  )
}

export default Card

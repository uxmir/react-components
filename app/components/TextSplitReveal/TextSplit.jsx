"use client"
import React, { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import SplitType from 'split-type';
const TextSplit = () => {
  useLayoutEffect(()=>{
   const ctx=gsap.context(()=>{
   const myText=new SplitType(".reveal-text",{types:["chars","words"]})
   gsap.from(myText.chars,{
    y:-100,
    duration:1,
    opacity:0,
    delay:1,
    stagger:{
    amount:1,
    from:"center"
    },
    ease:"power2.inOut"
   })
   })
   return ()=>ctx.revert()
  },[])
  return (
    <div className='mt-10'>
      <div  className='text-5xl reveal-text overflow-hidden font-bold uppercase'>
        MirmoNiruzzaman creative developer
      </div>
    </div>
  )
}

export default TextSplit

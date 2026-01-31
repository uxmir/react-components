"use client";
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from '../Container/Container';

interface ImageItem {
  id: number;
  image: string;
}

const imageData: ImageItem[] = [
  { id: 1, image: "https://picsum.photos/600/400?random=1" },
  { id: 2, image: "https://picsum.photos/600/400?random=2" },
  { id: 3, image: "https://picsum.photos/600/400?random=3" },
  { id: 4, image: "https://picsum.photos/600/400?random=4" },
];

gsap.registerPlugin(ScrollTrigger);

const ImageOpacity: React.FC = () => {
  const scope = useRef(null); 

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".image-card");
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { filter: 'blur(15px)', scale: 0.9, opacity: 0.5 }, 
          {
            filter: "blur(0px)",
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
            }
          }
        );
      });
      const texts = gsap.utils.toArray<HTMLElement>(".text-item");
      texts.forEach((text) => {
        gsap.fromTo(text, 
          { opacity: 0, x: -30 }, 
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: text, 
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            }
          }
        );
      });
    }, scope); 

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope}>
      <Container>
         <h1 className='text-4xl text-center mt-30 font-bold'>Scroll Down</h1>
        <div className='h-[200vh] flex items-center justify-center'>
        </div>
        
        <div className='flex flex-col gap-y-20 justify-center items-center my-30'>
          {imageData.map((img) => (
            <div key={img.id} className='flex items-center gap-x-10'>
              <span className='text-5xl font-mono text-item'>
                {img.id.toString().padStart(2, '0')}
              </span> 
              <div className='overflow-hidden rounded-xl shadow-2xl'>
                 <img 
                    src={img.image} 
                    alt="dynamic"  
                    className='w-[600px] h-[300px] object-cover image-card'
                 /> 
              </div>
            </div>
          ))}
        </div>
        
        <div className='h-[100vh]'></div>
      </Container>
    </div>
  );
}

export default ImageOpacity;
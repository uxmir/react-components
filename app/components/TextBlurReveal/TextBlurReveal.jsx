"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const TextBlurReveal = () => {
  const mainContainer = useRef(null);
  const textContainer = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          scroller: "body",
          start: "top top", 
          end: "+=1500", 
          pin: true,
          scrub: 1,
        },
      });
   tl.fromTo(
        textRef.current,
        { filter: "blur(10px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, duration: 1 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
  <>
  <div className="h-[100vh] w-full">

  </div>
      <div ref={mainContainer} className="py-20 lg:py-40 bg-white">
      <div className="relative about-container mt-15 overflow-hidden">
        <div 
          ref={textContainer} 
          className="w-full bg-black h-[100vh] flex flex-col justify-center items-center overflow-hidden"
        >
          <div className="max-w-[800px] px-6 flex flex-col justify-center items-start">
            <h4 className="text-start text-white opacity-70 mt-10 mb-4">For Me</h4>
            <div
              ref={textRef}
              className="text-start text-white capitalize font-medium leading-tight text-4xl lg:text-7xl"
            >
              I don’t just build interfaces I develop high-performance front-end
              solutions that drive engagement and growth.
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default TextBlurReveal;
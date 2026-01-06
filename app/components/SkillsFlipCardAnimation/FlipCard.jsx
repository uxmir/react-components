"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const FlipCard = () => {
  const skillData = [
    {
      id: 1,
      text_1: "my ",
      text_2: "ux/ui",
    },
    {
      id: 2,
      text_1: "skills ",
      text_2: "web",
    },
    {
      id: 3,
      text_1: "are",
      text_2: "app",
    },
  ];
  useLayoutEffect(() => {
    const cardFlip = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-container",
          scroller: "body",
          start: "top top",
          end: "+=300",
          scrub: 1,
          markers: true,
          pin: true,
        },
      });

      tl.to(".card-flip", {
        x: (index) => {
          if (index === 0) return "-20%";
          if (index === 2) return "20%";
          return 0;
        },
        duration: 0.9,
        ease: "",
      }).to(".card-flip", {
        rotateY: 180,
        borderRadius: 10,
        duration: 0.7,
        delay: 1,
        ease: "",
        stagger: 0.5,
      });
    });
    return () => cardFlip.revert();
  }, []);
  return (
    <>
      <div className="flex  h-[200vh] border-2"></div>
      <div className="flex justify-center items-center h-[100vh] border-2  card-container">
        {skillData.map((data) => (
          <div
            key={data.id}
            className="relative group w-[300px] h-[300px] [perspective:1000px] "
          >
            <div className="w-full h-full relative  transition-all duration-500 [transform-style:preserve-3d] card-flip">
              <div className="w-full h-full absolute inset-0 bg-black flex justify-center text-white items-center text-4xl font-semibold uppercase [backface-visibility:hidden] ">
                <span>{data.text_1}</span>
              </div>
              <div className=" absolute  inset-0 w-full h-full bg-gray-100 flex justify-center text-black items-center text-4xl font-semibold uppercase [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <span>{data.text_2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FlipCard;

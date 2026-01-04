"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import Container from "../Container/Container";
const PageTransition1 = ({ children }) => {
  const pathName = usePathname();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    const tl=gsap.timeline()
    tl.to([".image-left",".image-right"],{
     x:(index)=>index===0?'-120%':'120%',
     duration:0.7,
     delay:0.8,
    })
    .fromTo([".image-left",".image-right"],{
    clipPath: "inset(0% 0% 0% 0%)",
    },{
      clipPath: "inset(0% 0% 100% 0%)",
      ease: "sine.inOut",
      duration:2,
    })
    .fromTo(".image-middle",{
      clipPath: "inset(0% 0% 0% 0%)",
    },{
       clipPath: "inset(100% 0% 0% 0%)",
        ease: "sine.inOut",
        duration: 2,
    })
    .fromTo(".transition-container",  {
            y: "0%",
          },
          {
            y: "-100%",
            ease: "sine.inOut",
            duration: 2,
          }

    )
    });
    return () => ctx.revert();
  }, [pathName]);
  return (
  <>
    <div className="fixed w-full h-full transition-container pointer-events-none  top-0 left-0 right-0  bg-black">
      <Container>
        <div className="flex justify-center items-center mt-50">
          <div className="relative  mr-80">
            <div className="w-70 h-90 absolute inset-0 image-left ">
              <img
                src="/myphoto 1.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-70 h-90 absolute inset-0 image-right ">
              <img
                src="/my photo solid 2.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
                 <div className="w-70 h-100  absolute inset-0 image-middle">
              <img
                src="/image (1).png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
    <main>
      {children}
    </main>
  </>
  );
};
export default PageTransition1;

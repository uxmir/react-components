"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import Container from "../Container/Container";
const PageTransition1 = ({ children }) => {
  const pathName = usePathname();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.fromTo(
          ".transition-container",
          {
            height: "100%",
          },
          {
            height: "0%",
            ease: "sine.inOut",
            duration: 8,
          }
        );
      gsap.fromTo('.image-left',{
      clipPath: "inset(0% 0% 0% 0%)",
      },
      {
       clipPath: "inset(0% 0% 100% 0%)",
        ease: "sine.inOut",
        duration:4,
      }
    )
         gsap.fromTo('.image-right',{
      clipPath: "inset(0% 0% 0% 0%)",
      },
      {
       clipPath: "inset(0% 0% 100% 0%)",
        ease: "sine.inOut",
        duration: 4,
      }
    )
    });
    return () => ctx.revert();
  }, [pathName]);
  return (
    <div className="fixed w-full h-full transition-container  top-0 left-0 right-0 z-[9999] bg-black">
      <Container>
        <div className="flex justify-center items-center mt-50">
          <div className="flex gap-x-10 items-center">
            <div className="w-70 h-90 image-left "><img src="/myphoto 1.png" alt="image" className="w-full h-full object-cover"/></div>
            <div className="w-70 h-100 "><img src="/image (1).png" alt="image" className="w-full h-full object-cover"/></div>
            <div className="w-70 h-90 image-right "><img src="/my photo solid 2.png" alt="image" className="w-full h-full object-cover"/></div>
          </div>
        </div>
      </Container>
      {children}
    </div>
  );
};
export default PageTransition1;

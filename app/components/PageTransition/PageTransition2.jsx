"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import SplitType from "split-type";
const PageTransition2 = ({ children }) => {
  const divCount = 20;
  const pathName = usePathname();
  //animation logic
  const getDirectionByPathName = () => {
    if (pathName === "/") return "start";
    if (pathName === "/product") return "center";
    if (pathName === "/about") return "end";
  };
  const getDirectionForText = () => {
    if (pathName === "/") return "start";
    if (pathName === "/product") return "center";
    if (pathName === "/about") return "end";
  };
  useLayoutEffect(() => {
    const pageTransitionAnimation = gsap.context(() => {
      const heading = new SplitType(".heading", { types: "chars" });
      const tl = gsap.timeline();
      tl.from(heading.chars, {
        y: -120,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.3,
        stagger: {
          amount: 1,
          from: getDirectionForText(),
        },
      })
        .to(heading.chars, {
          y: 120,
          duration: 1,
          ease: "power2.inOut",
          stagger: {
            amount: 1,
            from: getDirectionByPathName(),
          },
        })
        .fromTo(
          ".page-transition-div",
          {
            y: "0%",
          },
          {
            y: "-100%",
            duration: 2,
            stagger: {
              amount: 1,
              from: getDirectionByPathName(),
            },
            ease: "power4.inOut",
          }
        )
        .fromTo(
          ".div-container",
          {
            y: "0%",
          },
          {
            y: "-100%",
          }
        );
    });
    return () => pageTransitionAnimation.revert();
  }, [pathName]);
  return (
    <>
      <div className="  div-container  w-full h-full  fixed top-0 left-0 right-0">
        <div className="flex gap-x-[1px] w-full h-full">
          {[...Array(divCount)].map((_, index) => (
            <div
              key={index}
              className="bg-black h-full page-transition-div"
              style={{ width: `${100 / divCount}%` }}
            ></div>
          ))}
        </div>
        <h1 className="text-center heading text-4xl font-bold uppercase fixed top-80 left-170 text-white z-[99999] overflow-hidden">
          mirmoniruzzaman
        </h1>
      </div>
      <main>{children}</main>
    </>
  );
};

export default PageTransition2;

"use client";
import React, { useLayoutEffect, useRef } from "react";
import Container from "../Container/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Parallex = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallex-image", {
        y: -350,
        ease: "none",
        scrollTrigger: {
          trigger: ".trigger-section",
          scroller: "body",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.fromTo(
        ".text",
        {
          y: -100,
        },
        {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".text-container",
            scroller: "body",
            start: "top bottom",
            end: "bottom top",
            markers: true,
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".footer-black-bg",
        { height: "180px" }, 
        {
          height: "900px",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
          }
        }
      );

      gsap.fromTo(
        ".footer-text",
        { y: -150 }, 
        {
          y: 300, 
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
            markers: true,
          }
        }
      );
    
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="w-full h-[80vh] trigger-section overflow-hidden">
        <img
          src="https://picsum.photos/600/400?random=1"
          alt="image"
          className="w-full h-full object-cover parallex-image"
        />
      </div>
      <BottomParallex />
      <div className="h-[100vh]  relative overflow-hidden text-container">
        <div className="mt-20 text w-full py-20 bg-black text-white text-center text-9xl font-extrabold uppercase">
          MirMOniruzzaman
        </div>
      </div>
   <div className="footer h-[700px] relative overflow-hidden ">
      {/* উপরের গ্রিন সেকশন */}
      <div className="w-full h-60 bg-green-500"></div>

      {/* ব্ল্যাক সেকশন যার হাইট বাড়বে */}
      <div className="footer-black-bg w-full bg-black text-white flex  justify-center overflow-hidden">
        <span className="footer-text  text-6xl md:text-9xl font-extrabold uppercase">
          Mir Moniruzzaman
        </span>
      </div>
    </div>
    </>
  );
};

export default Parallex;

function BottomParallex() {
  return (
    <>
      <div className="h-[100vh]">
        <Container>
          <h3 className="mt-10 text-center text-6xl">Work</h3>
        </Container>
      </div>
    </>
  );
}

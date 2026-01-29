"use client";
import React, { useLayoutEffect, useRef } from "react";
import Container from "../Container/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ScaleImage: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const ux = useRef<HTMLSpanElement>(null);
  const web = useRef<HTMLSpanElement>(null);
  const web2 = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const scaleAnimation = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          scroller: "body",
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
          markers: true,
        },
      });
      tl.fromTo(
        box.current,
        {
          scale: 1,
        },
        {
          scale: 3,
          duration: 3,
          ease: "power1.inOut",
        },
      )
        .fromTo(
          ux.current,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "sine1.inOut",
          },
        )
        .fromTo(
          web.current,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power1.inOut",
          },
        )
        .fromTo(
          web2.current,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "sine1.inOut",
          },
        );
    });
    return () => scaleAnimation.revert();
  }, []);
  return (
    <div className="">
      <Container>
        <div className="h-[500vh]"></div>
        <div
          ref={container}
          className="h-[100vh] border-2 w-full flex justify-between items-center "
        >
          <div ref={box} className="w-50 h-50 bg-green-500"></div>
          <div className="flex flex-col gap-y-6">
            <span ref={ux} className="font-medium text-6xl">
              UX/UI
            </span>
            <span ref={web} className="font-medium text-6xl">
              Web Design
            </span>
            <span ref={web2} className="font-medium text-6xl">
              Web Development
            </span>
          </div>
          <div className="h-[100vh]"></div>
        </div>
      </Container>
    </div>
  );
};

export default ScaleImage;

"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stack = () => {
  const cardStack = [
    { id: 1, text: "content 1", colorBg: "bg-green-600" },
    { id: 2, text: "content 2", colorBg: "bg-red-600" },
    { id: 3, text: "content 3", colorBg: "bg-orange-600" },
    { id: 4, text: "content 4", colorBg: "bg-yellow-600" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-container",
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index !== 0) {
          tl.fromTo(
            card,
            { y: "100vh" },
            { y: `${index * 10}%`, ease: "none" }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="h-[100vh] w-full flex items-center justify-center text-2xl font-bold">
        Scroll Down
      </div>

      <div className="card-container h-screen w-full flex justify-center items-center overflow-hidden">
        <div className="relative w-[80%] h-[60vh]">
          {cardStack.map((card, index) => (
            <div
              key={card.id}
              className={`card absolute inset-0 w-full h-full rounded-2xl text-white ${card.colorBg} flex justify-center text-center items-center text-4xl font-medium uppercase shadow-2xl `}
              style={{ zIndex: index }}
            >
              <span>{card.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[100vh] w-full"></div>
    </>
  );
};

export default Stack;

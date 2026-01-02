"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Card = () => {
  //imageArray
  const imageData = [
    {
      id: 1,
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      id: 3,
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      id: 4,
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
  //animation logic
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const containers = gsap.utils.toArray(".container");
      containers.forEach((container) => {
        const imageBox = container.querySelector(".image-box");
        gsap.fromTo(
          imageBox,
          {
            y: "-100%",
          },
          {
            y: "0%",
            duration: 1.7,
            scrollTrigger: {
              trigger: container,
              scroller: "body",
              markers: true,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="my-80">
        <div className="h-[100vh]"></div>
        {imageData.map((img, index) => (
          <div
            key={index}
            className="relative group mt-20 overflow-hidden container transition-all cursor-pointer  duration-500 hover:rounded-br-[100px]"
          >
            <div className="w-full h-130 bg-gray-400"></div>
            <div className=" image-box  w-full  absolute inset-0  h-full -translate-y-full">
              <img
                src={img.image}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <ImageRevealFromBottom />
    </>
  );
};

export default Card;

export const ImageRevealFromBottom = () => {
  //imageArray
  const imageData = [
    {
      id: 1,
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      id: 3,
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      id: 4,
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
  //animation logic
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const containers = gsap.utils.toArray(".container-bottom");
      containers.forEach((container) => {
        const imageBox = container.querySelector(".image-box-bottom");
        gsap.fromTo(
          imageBox,
          { y: "100%" },
          {
            y: "0%",
            duration: 1.7,
            scrollTrigger: {
              trigger: container,
              scroller: "body",
              markers: true,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="my-80">
      <div className="h-[100vh]"></div>
      {imageData.map((img, index) => (
        <div
          key={index}
          className="relative group mt-20 container-bottom overflow-hidden transition-all cursor-pointer  duration-500 hover:rounded-br-[100px]"
        >
          <div className="w-full h-130 bg-gray-400"></div>
          <div className=" image-box-bottom  w-full  absolute inset-0  h-full translate-y-full">
            <img
              src={img.image}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

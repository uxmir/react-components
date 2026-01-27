"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../Container/Container";

const ScrollNav: React.FC = () => {
  const [scrollNav, setScrollNav] = useState<boolean>(true);
  const [scrollNavResponsive, setScrollResponsive] = useState<boolean>();
  const lastScroll = useRef<number>(0);

  const handleScrollNav = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      if (currentScroll > lastScroll.current) {
        setScrollNav(false);
        setScrollResponsive(false);
      } else {
        setScrollNav(true);
        setScrollResponsive(true);
      }
    } else {
      setScrollNav(true);
      setScrollResponsive(true);
    }

    lastScroll.current = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);
    return () => window.removeEventListener("scroll", handleScrollNav);
  }, []);

  return (
    <div className="relative">
      <nav
        className={`fixed hidden lg:block top-0 left-0 w-full h-16 bg-green-500 z-50 transition-transform duration-300 ${
          scrollNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Container>
          <div className="flex items-center h-full text-white font-bold">
            My Sticky Navbar
          </div>
        </Container>
      </nav>
      {/* content*/}
      <div className="pt-20">
        <Container>
          <div className="h-[200vh] bg-gray-100 p-4"></div>
        </Container>
      </div>
      {/* inresponsive*/}
      <nav
        className={`fixed block lg:hidden bottom-0 left-0 w-full h-16 bg-green-500 z-50 transition-transform duration-300 ${
          scrollNavResponsive ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Container>
          <div className="flex items-center h-full text-white font-bold">
            My Sticky Navbar
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default ScrollNav;

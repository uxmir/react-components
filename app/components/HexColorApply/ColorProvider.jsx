"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
const ColorContext = createContext();
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("gray-600");
  useEffect(() => {
    const savedcolor = localStorage.getItem("color");
    if (!savedcolor) {
      alert("color is didn't added");
    } else {
      setColor(savedcolor);
    }
  }, []);
  const applyColor = (value) => {
    localStorage.setItem("color", value);
    setColor(value);
    alert(`${value} color is successfully added`);
  };
  return (
    <ColorContext.Provider value={{ color, applyColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;

export const useColor = () => useContext(ColorContext);

"use client";
import React, { useState } from "react";
import { useColor } from "./ColorProvider";

const ColorPage = () => {
  const { color } = useColor();
  return (
    <div className="flex justify-center items-center gap-x-5 mt-20">
      <button style={{backgroundColor:color}} className={`px-3 py-2  text-white`}>
        Apply Color
      </button>
      <p style={{color:color}} className={` font-medium`}>Color Text</p>
    </div>
  );
};
export default ColorPage;

export function ColorSetting() {
  const { color, applyColor } = useColor();
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="flex items-center gap-x-3 mt-40">
        <input
          type="text"
          name="color"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="apply color"
          className="w-[400px] py-2 px-4 rounded-lg text-gray-600 outline-none focus:outline-none border border-gray-200 focus:border-amber-400"
        />
        <button
          type="button"
          onClick={() => applyColor(inputValue)}
          className={`px-3 py-2 cursor-pointer rounded text-white`}
          style={{backgroundColor:color}}
        >
          Apply Color
        </button>
      </div>
    </>
  );
}

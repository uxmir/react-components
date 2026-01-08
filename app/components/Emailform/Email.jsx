"use client";
import React, { useEffect, useState } from "react";
import { IconCheck, IconX } from "@tabler/icons-react";
const Email = () => {
  const [toastSuccess,setToastSuccess]=useState(false)
  const [toastError,setToastError]=useState(false)
    // //logic for toast
  useEffect(()=>{
    const timer=setTimeout(()=>{
    if(toastError || toastSuccess){
      setToastSuccess(false)
      setToastSuccess(false)
    }
    },2000)
    return ()=>clearTimeout(timer)
  },[toastError,toastSuccess])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_EMAIL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setToastSuccess(true)
      } else {
        setToastError(true)
      }
    } catch (error) {
      console.error("email is not working", error);
    }
  };

  return (
    <>
      <div className="max-w-[700px] mx-auto mt-5 bg-gray-50 px-4 py-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Your Name"
              className="w-full py-3 rounded-lg px-5 outline-none focus:outline-none border border-gray-200 focus:border-amber-500 text-gray-600"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="w-full py-3 rounded-lg px-5 outline-none focus:outline-none border border-gray-200 focus:border-amber-500 text-gray-600"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="message" className="text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Enter Your Name"
              className="w-full py-3 rounded-lg px-5 outline-none focus:outline-none border border-gray-200 focus:border-amber-500 text-gray-600"
            />
          </div>
          <button
            type="submit"
            className="px-5 cursor-pointer w-full py-3 bg-green-600 hover:bg-green-500 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
      { /*toasts */}
      <div className={`fixed top-4 right-0 w-[300px] transition-all duration-300 flex items-center font-medium gap-x-2 text-green-700  px-4 py-3 bg-green-200 shadow-lg border border-green-200 rounded-lg ${toastSuccess===true?'translate-x-0':'translate-x-full'}`}>
        <IconCheck className="text-green-600" />
        <span>Email Successfully Sent</span>
      </div>
            <div className={`fixed top-4 right-0 w-[300px] transition-all duration-300 flex items-center font-medium gap-x-2 text-red-700  px-4 py-3 bg-red-200 shadow-lg border border-red-200 rounded-lg ${toastError===true?'translate-x-0':'translate-x-full'}`}>
        <IconX className="text-red-600" />
        <span>Email didn't Sent</span>
      </div>
    </>
  );
};

export default Email;

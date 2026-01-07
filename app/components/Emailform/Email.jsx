"use client"
import React from "react";

const Email = () => {
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
        alert("email has been sent");
      } else {
        alert("email is not been sent");
      }
    } catch (error) {
      console.error("email is not working", error);
    }
  };
  return (
    <div className="max-w-[700px] mx-auto mt-5 bg-gray-50 px-4 py-6 rounded-lg shadow-lg">
      <form  onSubmit={handleSubmit} className="w-full space-y-4">
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
  );
};

export default Email;

"use client";
import React, { useState } from "react";
import Container from "../Container/Container";
const TodoApp: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [allData, setAllData] = useState<string[]>([]);
  const [deletedKey, setDeletedkey] = useState<number[]>([]);
  const [editedKey,setEditedKey]=useState<number>()
  return (
    <div>
      <Container>
        <div className="mt-10 flex items-center gap-x-3">
          <input
            type="text"
            placeholder="type here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-100 py-2 outline-none focus:outline-none border border-gray-300 focus:border-amber-600 px-5 rounded-2xl text-gray-600"
          />
          <button
            type="button"
            onClick={() => {
              setAllData([...allData, input]);
              setInput("");
            }}
            className="px-3 py-2 cursor-pointer rounded-lg bg-blue-500 text-white"
          >
            Submit
          </button>
          <div className="px-3 py-2 rounded bg-blue-600 text-white flex justify-center items-center">
            <span>Total Created Data {allData?.length}</span>
          </div>
          <div className="px-3 py-2 rounded bg-red-600 text-white flex justify-center items-center">
            <span>Total deleted Data {deletedKey?.length}</span>
          </div>
        </div>
        {allData?.length > 0 ? (
          <div>
            {allData?.map((data, index) => (
              <div
                key={index}
                className="flex mt-5 justify-between items-center w-100 py-2 px-3 bg-gray-50 rounded-lg "
              >
                <span className="capitalize font-medium text-gray-600">
                  {data}
                </span>
               <div className="flex gap-x-2 items-center">
                 <button
                  className="px-2 py-1 cursor-pointer rounded bg-green-600 text-white text-center"
                >
                  edit
                </button>
                  <button
                  onClick={() => {
                    setAllData(allData?.filter((item, i) => i !== index));
                    setDeletedkey([...deletedKey, index]);
                  }}
                  className="px-2 py-1 cursor-pointer rounded bg-red-600 text-white text-center"
                >
                  Delete
                </button>
               </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 font-medium capitalize text-lg">
            There is no data
          </div>
        )}
      </Container>
    </div>
  );
};

export default TodoApp;

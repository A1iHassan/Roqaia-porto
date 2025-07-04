"use client";
import { useState, useRef } from "react";

const CreateBlog = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cover, setCover] = useState("");

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <section className=" flex flex-col gap-4 h-full w-full">
      <input
        className=" px-3 py-1 focus:bg-blue-100 border border-blue-200 outline-none rounded-md focus:border-blue-400"
        type="text"
        placeholder="Enter the Blog Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input ref={inputRef} className="hidden" type="file" accept="image/*" />
      <button
        className="text-white bg-blue-300 m-1 rounded-md"
        onClick={handleClick}
      >
        Add a cover photo
      </button>
      <textarea
        className="p-2 outline-none border border-blue-200 focus:border-blue-400 focus:bg-blue-100 rounded-md h-full"
        name="body"
        id="body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></textarea>
      <button className="text-white bg-blue-300 m-1 rounded-md">Save</button>
      <button className="text-white bg-blue-300 m-1 rounded-md">Cancel</button>
    </section>
  );
};

export default CreateBlog;

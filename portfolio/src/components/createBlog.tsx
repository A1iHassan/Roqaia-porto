"use client";
import { useState, useRef } from "react";
import supabase from "@/lib/supabaseAdmin";

const CreateBlog = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cover, setCover] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleUpload(selectedFile);
    }
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `blogs/${fileName}`;

    const { error } = await supabase.storage
      .from("rogya")
      .upload(filePath, file, {
        upsert: true,
        contentType: file.type,
      });

    if (error) {
      console.error("Upload error:", error.message);
    }

    const { data: publicUrlData } = supabase.storage
      .from("rogya")
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData?.publicUrl;
    console.log(publicUrl);
    if (publicUrl) setCover(publicUrl);

    setUploading(false);
  };

  const handleSubmit = async () => {
    if (title && body && cover) {
      await supabase.from("blogs").insert([{ title, body, cover }]);
      location.reload();
    } else console.log("not valid");
  };

  return (
    <section
      className=" flex flex-col gap-4 h-full w-full
     sm:h-auto sm:p-10
    "
    >
      <input
        className=" px-3 py-1 focus:bg-blue-100 border border-blue-200 outline-none rounded-md focus:border-blue-400
        sm:text-xl
        "
        type="text"
        placeholder="Enter the Blog Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button
        className="text-white bg-blue-300 m-1 rounded-md cursor-pointer
        sm:text-lg sm:tracking-wide sm:w-36 sm:p-1
        "
        onClick={handleClick}
      >
        {uploading ? "uploading" : "Add a cover photo"}
      </button>
      <textarea
        className="p-2 outline-none border border-blue-200 focus:border-blue-400 focus:bg-blue-100 rounded-md h-full
        sm:text-xl
        "
        name="body"
        id="body"
        placeholder="What's on your mind..."
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></textarea>
      <button
        className="text-white bg-blue-300 m-1 rounded-md cursor-pointer
        sm:text-lg sm:tracking-wide sm:w-36
        "
        onClick={handleSubmit}
      >
        Save
      </button>
    </section>
  );
};

export default CreateBlog;

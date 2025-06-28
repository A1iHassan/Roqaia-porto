"use client";
import { useState } from "react";

type CardProp = {
  paragraph1: string | string[];
  paragraph2?: string | string[];
};

type CardSide = "front" | "back";

const Card = ({ paragraph1, paragraph2 }: CardProp) => {
  const [face, setFace] = useState<CardSide>("front");

  const toggle = () => {
    setFace((prev) => (prev === "front" ? "back" : "front"));
  };

  return (
    <article
      className={`backface-hidden w-80 min-h-[30rem] bg-blue-200 m-3 p-6 pb-14 ${face === "back" && "rotate-y-180"} rounded-lg text-blue-900 transition-transform duration-1000 relative ease-in-out`}
    >
      <p>{face === "front" ? paragraph1 : paragraph2}</p>
      <button
        className="absolute right-2 bottom-2 cursor-pointer hover:text-blue-500 transform-transition duration-300"
        onClick={toggle}
      >
        {face === "front" ? "What we do" : "Who we are"}
      </button>
    </article>
  );
};

export default Card;

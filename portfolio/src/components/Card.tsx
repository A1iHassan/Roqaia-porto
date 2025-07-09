"use client";
import { useState } from "react";

type CardProp = {
  title1: string;
  paragraph1: string | string[];
  paragraph2?: string | string[];
  title2?: string;
  button1?: string;
  button2?: string;
  comment?: string;
};

type CardSide = "front" | "back";

const Card = ({
  title1,
  paragraph1,
  title2,
  paragraph2,
  button1,
  button2,
  comment,
}: CardProp) => {
  const [face, setFace] = useState<CardSide>("front");

  const front = () => {
    setFace("front");
  };

  const back = () => {
    setFace("back");
  };

  return (
    <section className="relative">
      <article
        className={`${face === "back" && "rotate-y-180"}
          backface-hidden bg-blue-200 text-blue-950 transition-transform duration-1000 ease-in-out absolute top-0 left-0 w-80 h-[26rem] p-4 rounded-xl m-3
          
          sm:w-[25vw] sm:min-h-[30rem] sm:text-xl sm:m-3 sm:p-6 sm:pb-14 sm:rounded-lg  `}
      >
        <p className="font-semibold text-2xl mb-4">{title1}</p>
        <p className="break-normal">{paragraph1}</p>
        <p className="p-2 bg-blue-900 border-l-5 rounded-md border-black text-blue-50 opacity-50 mt-3">
          {comment}
        </p>
        <button
          className="absolute right-2 bottom-2 text-base cursor-pointer hover:text-blue-500 transform-transition duration-300 animate-pulse"
          onClick={back}
        >
          {button1}
        </button>
      </article>
      <article
        className={`${face === "front" && "rotate-y-180"}
          backface-hidden bg-blue-950 text-blue-200 transition-transform duration-1000 ease-in-out absolute top-0 left-0 w-80 h-[26rem] p-4 rounded-xl m-3
          sm:w-[25vw] sm:min-h-[30rem] sm:text-xl sm:m-3 sm:p-6 sm:pb-14 sm:rounded-lg  `}
      >
        <p className="font-semibold text-2xl mb-4">{title2}</p>
        <p className="break-normal">{paragraph2}</p>
        <button
          className="absolute right-2 bottom-2 text-base cursor-pointer hover:text-blue-50 transform-transition duration-300 animate-pulse"
          onClick={front}
        >
          {button2}
        </button>
      </article>
    </section>
  );
};

export default Card;

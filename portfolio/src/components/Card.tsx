"use client";
import { useState } from "react";

type CardProp = {
  title1: string;
  paragraph1: string | string[];
  paragraph2?: string | string[];
  title2: string;
  button1?: string;
  button2?: string;
};

type CardSide = "front" | "back";

const Card = ({
  title1,
  paragraph1,
  title2,
  paragraph2,
  button1,
  button2,
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
        className={`backface-hidden w-[25vw] min-h-[30rem] text-xl bg-blue-200 m-3 p-6 pb-14 ${face === "back" && "rotate-y-180"} rounded-lg text-blue-950 transition-transform duration-1000 ease-in-out absolute top-0 left-0 `}
      >
        <p className="font-semibold text-2xl mb-4">{title1}</p>
        <p className="break-normal">{paragraph1}</p>
        <button
          className="absolute right-2 bottom-2 text-base cursor-pointer hover:text-blue-500 transform-transition duration-300 animate-pulse"
          onClick={back}
        >
          {button1}
        </button>
      </article>
      <article
        className={`backface-hidden w-[25vw] min-h-[30rem] text-xl bg-blue-950 m-3 p-6 pb-14 ${face === "front" && "rotate-y-180"} rounded-lg text-blue-200 transition-transform duration-1000 ease-in-out absolute top-0 left-0 `}
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

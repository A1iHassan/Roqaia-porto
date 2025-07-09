import Oval from "@/components/Oval";
import { content } from "@/content/content";
import Image from "next/image";

const Meet = () => {
  return (
    <>
      <header
        className="flex justify-center items-center pt-16
      sm:gap-24 sm:h-svh sm:w-full"
      >
        <span className="absolute left-0 ml-2 w-45 z-20">
          <h1 className="text-2xl font-semibold text-blue-900 mb-1">
            Rogya Abdelrasol
          </h1>
          <h2 className="text-xl text-blue-950">
            Mdical Doctor & Public Health Professional
          </h2>
        </span>
        <div className="relative flex flex-col items-center ml-40 scale-60">
          <Image
            src="/Rogya1.png"
            alt="rogya"
            width={300}
            height={300}
            className="w-44 h-64 z-10 "
          />
          <Oval
            fill="#072956"
            styling="rotate-[15deg] absolute -translate-y-30 translate-x-12 scale-65 z-0"
          />
          <Oval
            fill="#bedbff"
            styling="rotate-[-15deg] absolute left-[-8rem] -translate-y-30 translate-x-12 scale-65 z-0"
          />
          <Oval
            fill="#bedbff"
            styling="-rotate-[75deg] absolute left-[-5rem] -translate-x-12 scale-x-35 scale-y-50 z-20"
          />
          <Oval
            fill="#072956"
            styling="-rotate-[70deg] absolute left-[-5rem] top-[-1rem] -translate-x-12 scale-x-35 scale-y-50 z-10"
          />
        </div>
      </header>
      <main className="w-full">{content.founder}</main>
    </>
  );
};

export default Meet;

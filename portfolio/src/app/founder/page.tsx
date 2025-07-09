import Oval from "@/components/Oval";
import { content } from "@/content/content";
import Image from "next/image";

const Meet = () => {
  return (
    <div className="w-screen">
      <header
        className="flex justify-center items-center pt-16 scale-90
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
      <main className="m-4 flex flex-col gap-8 mb-40">
        {content.founder.map((element, index) => (
          <p
            key={index}
            className={`
              sm:text-2xl sm:w-1/2 h-auto
              ${index % 2 === 0 ? "bg-blue-950 text-blue-100" : "bg-blue-200 text-blue-900"}
              ${index === 6 ? "text-2xl font-bold tracking-wider" : "text-lg tracking-wide"}
              ${
                index === 0
                  ? "sm:ml-[6rem]"
                  : index === 1
                    ? "sm:ml-[14rem]"
                    : index === 2
                      ? "sm:ml-[22rem]"
                      : index === 3
                        ? "sm:ml-[30rem]"
                        : index === 4
                          ? "sm:ml-[38rem]"
                          : index === 5
                            ? "sm:ml-[46rem]"
                            : index === 6
                              ? "sm:ml-[54rem]"
                              : ""
              }
              p-5 rounded-lg w-40`}
          >
            {element}
          </p>
        ))}
      </main>
    </div>
  );
};

export default Meet;

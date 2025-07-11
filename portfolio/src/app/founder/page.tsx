import { content } from "@/content/content";
import Image from "next/image";

const Meet = () => {
  return (
    <div className="w-screen">
      <header
        className="flex justify-center items-center pt-16
      sm:gap-24 sm:h-svh sm:w-full"
      >
        <span>
          <h1 className="sm:text-5xl text-xl font-semibold text-blue-900 mb-4">
            Rogya Abdelrasol
          </h1>
          <h2 className="sm:text-4xl sm:w-auto w-35 text-blue-950">
            Mdical Doctor & Public Health Professional
          </h2>
        </span>
        <Image
          src="/Rogya1.png"
          alt="rogya"
          width={300}
          height={300}
          className="sm:w-auto sm:h-auto w-35 h-55"
        />
      </header>
      <main className="m-4 flex flex-col items-center gap-8 mb-40">
        {content.founder.map((element, index) => (
          <p
            key={index}
            className="flex text-center sm:w-1/2 w-3/4 sm:text-2xl tracking-wide"
          >
            {element}
          </p>
        ))}
      </main>
    </div>
  );
};

export default Meet;

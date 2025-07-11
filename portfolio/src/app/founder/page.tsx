import { content } from "@/content/content";
import Image from "next/image";

const Meet = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-white via-blue-100 to-white grid grid-cols-2 grid-rows-[auto_auto_auto_1fr] gap-2 h-full p-3">
      <span className="col-start-1 row-start-1 sm:row-span-2 row-span-1 mt-40 place-self-end mb-5 sm:w-3/4">
        <h1 className="sm:text-6xl text-xl font-semibold text-blue-900 mb-4">
          Rogya Abdelrasol
        </h1>
        <h2 className="sm:text-4xl text-blue-950 text-start">
          Mdical Doctor & Public Health Professional
        </h2>
      </span>
      <Image
        src="/Rogya3.png"
        alt="rogya"
        width={300}
        height={300}
        className="sm:w-[24rem] sm:h-[27rem] w-35 h-43 col-start-2 row-start-1 sm:row-span-3 row-span-2 mt-35 place-items-end"
      />
      <p className="col-start-1 row-start-3 col-span-1 place-self-end sm:w-3/4 sm:text-2xl sm:block hidden">
        {content.founder[0]}
      </p>
      <p className="col-start-1 row-start-2 col-span-1 place-self-end sm:w-3/4 sm:text-2xl sm:hidden">
        {content.founder[0].split("currently")[0]}
      </p>
      <p className="col-start-1 row-start-3 col-span-2 block place-self-end sm:w-3/4 sm:text-2xl sm:hidden">
        {content.founder[0].split("professional")[1]}
      </p>
      <main className="m-4 flex flex-col items-center gap-8 mb-40 col-span-2 row-start-4 sm:mr-25">
        {content.founder.map((element, index) => (
          <p
            key={index}
            className={`flex sm:w-3/4 w-full sm:text-2xl tracking-wide ${index === 0 ? "hidden" : ""}`}
          >
            {element}
          </p>
        ))}
      </main>
    </div>
  );
};

export default Meet;

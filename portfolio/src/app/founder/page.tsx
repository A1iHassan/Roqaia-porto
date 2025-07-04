import { content } from "@/content/content";
import Image from "next/image";

const Meet = () => {
  return (
    <>
      <header className="flex justify-center items-center gap-24 h-svh w-full">
        <div>
          <Image src="/rogya.jpeg" alt="rogya" width={20} height={20} />
        </div>
        <span>
          <h1></h1>
          <h2></h2>
        </span>
      </header>
      <main className="w-full">{content.founder}</main>
    </>
  );
};

export default Meet;

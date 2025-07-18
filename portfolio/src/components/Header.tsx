import Image from "next/image";
import { Lens, Tool, Paper } from "./Icons";

const Header = () => {
  return (
    <header
      className="flex flex-col sm:relative items-center justify-center gap-10 w-svw h-56
       sm:h-[100vh]"
    >
      <Image
        src="/header.png"
        alt="mom"
        fill
        className="z-0 object-cover overflow-hidden"
      />
      <div className="w-full h-full z-10 bg-gradient-to-b from-blue-300 to-transparent absolute"></div>
      <section className="flex flex-row items-center gap-3 text-blue-900 sm:mt-40 sm:mb-20 z-20 pt-18 mt-20">
        <img
          src="bitmap.png"
          alt="logo"
          className="sm:w-36 sm:h-36 w-26 h-26 ml-1"
        />
        <p
          className=" font-semibold text-3xl border-l-3 border-blue-900 pl-2 w-64
        sm:text-7xl sm:ml-16 text-wrap sm:w-[43vw] sm:border-l-8 sm:pl-7 sm:rounded-lg z-20 "
        >
          Public Health Research & Impact Hub
        </p>
      </section>
      <div className="flex gap-10 sm:gap-16 text-4xl font-bold text-white z-20 sm:mt-10 scale-75 sm:scale-100">
        <Lens width={40} height={40} />+<Tool width={40} height={40} />+
        <Paper width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;

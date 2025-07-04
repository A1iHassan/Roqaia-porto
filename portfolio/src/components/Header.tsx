import Image from "next/image";
import { Lens, Tool, Paper } from "./Icons";

const Header = () => {
  return (
    <header className="flex flex-col relative items-center h-[100vh] mb-64">
      <Image
        src="/mom.jpg"
        alt="mom"
        fill
        className="z-0 object-cover overflow-hidden"
      />
      <div className="w-full h-full z-10 bg-gradient-to-b from-blue-300 to-transparent absolute"></div>
      <section className="flex flex-row justify-center items-center  text-blue-900 w-full mt-80 mb-20 z-20">
        <img src="bitmap.png" alt="logo" className="w-36 h-36" />
        <p className="text-7xl ml-16 text-wrap w-[43vw] border-l-8 pl-7 border-blue-900 rounded-lg z-20 ">
          Public Health Research & Impact Hub
        </p>
      </section>
      <div className="flex gap-16 text-4xl font-bold text-white z-20 mt-10">
        <Lens width={40} height={40} />+<Tool width={40} height={40} />+
        <Paper width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;

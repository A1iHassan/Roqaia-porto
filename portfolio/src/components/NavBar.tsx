"use client";
import { useState } from "react";
import ButtonC from "./Button";

const NavBar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className="absolute z-30">
      <div
        onClick={() => {
          setClicked((prev) => !prev);
        }}
        className={`relative w-6 h-1 bg-blue-900 my-5 mx-1 rounded-lg
          before:content-[''] before:w-6 before:h-1 before:bg-blue-900 before:top-2 before:absolute before:rounded-lg before:right-0 before:transition-all before:duration-300
          after:content-[''] after:w-6 after:h-1 after:bg-blue-900 after:bottom-2 after:absolute after:rounded-lg after:right-0 after:transition-all after:duration-300
          ${clicked ? "before:rotate-[60deg] before:-translate-y-2 after:-rotate-[60deg] after:translate-y-2" : ""}
          sm:hidden`}
      ></div>
      <nav
        className={`
          ${clicked ? "h-44" : "h-0"}
          flex flex-col gap-1 w-20 bg-blue-100 rounded-lg ml-2
          sm:flex sm:flex-row sm:gap-56 sm:w-svw sm:h-18 sm:py-4 sm:px-20 sm:m-4 sm:justify-center sm:rounded-lg sm:z-20 sm:fixed sm:inset-0
          transition-all duration-300
        `}
      >
        <ButtonC name="Blogs" path="/blogs" />
        <ButtonC name="About Us" path="/" />
        <ButtonC name="Meet The Founder" path="/founder" />
        <ButtonC name="Contact Us" path="/#footer" />
      </nav>
    </div>
  );
};

export default NavBar;

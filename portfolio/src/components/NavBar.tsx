"use client";
import { useState, useEffect } from "react";
import ButtonC from "./Button";

const NavBar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    // Only attach listener on client
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div
      className={`fixed z-30 flex flex-col items-center w-full ${scroll ? "backdrop-blur-md bg-white/10" : "bg-transparent"}`}
    >
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
          flex flex-col gap-1 w-20 rounded-lg ml-2 
          sm:flex sm:flex-row sm:gap-56 sm:h-18 sm:py-4 sm:px-20 sm:ml-0 sm:justify-center sm:rounded-lg sm:z-20 sm:w-auto
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

import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <NavBar />
      <section className="flex flex-row justify-center items-center py-72 text-blue-300 w-full">
        {/* <span className="text-9xl m-4 -translate-y-20 tracking-[2rem]">
          {" "}
          P.H.R.I.H
        </span>
        <span className="text-4xl m-4 flex space-x-5 font-light">
          <span>Public</span>
          <span>Health</span>
          <span>Research</span>
          <span>&</span>
          <span>Impact</span>
          <span>Hub</span>
        </span> */}
        <img src="bitmap.png" alt="logo" className="w-36 h-36" />
        <p className="text-7xl ml-16 text-wrap w-[43vw] border-l-8 pl-7 border-blue-900 rounded-lg">
          Public Health Research & Impact Hub
        </p>
      </section>
      <hr className="w-100vw mx-6 border-t border-t-blue-300 mb-20" />
    </header>
  );
};

export default Header;

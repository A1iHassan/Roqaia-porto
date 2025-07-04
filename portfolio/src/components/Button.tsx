import Link from "next/link";

type ButtonProp = {
  name: string;
  path: string;
};

const ButtonC = ({ name, path }: ButtonProp) => {
  return (
    <Link
      href={path}
      className=" text-blue-900 group hover:bg-blue-100 border-blue-100 relative transform-all ease-in-out duration-300 text-sm px-2 py-1 rounded-md overflow-hidden cursor-pointer sm:text-xl"
    >
      {name}
      <span className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-1/3 rotate-45 bg-white w-full h-5 z-0 opacity-70 blur-lg"></span>
    </Link>
  );
};

export default ButtonC;

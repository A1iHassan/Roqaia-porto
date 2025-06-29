import Link from "next/link";

type ButtonProp = {
  name: string;
  path: string;
};

const ButtonC = ({ name, path }: ButtonProp) => {
  return (
    <Link
      href={path}
      className="hover:bg-linear-to-r from-blue-900 to-blue-500 text-blue-900 font-medium hover:text-blue-100 group relative ease-in-out duration-300 text-xl px-2 py-1 rounded-lg overflow-hidden cursor-pointer"
    >
      {name}
      <span className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-1/3 rotate-45 bg-white w-full h-5 z-0 opacity-70 blur-lg"></span>
    </Link>
  );
};

export default ButtonC;

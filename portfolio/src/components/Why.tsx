import { content } from "@/content/content";

const Why = () => {
  return (
    <section className="bg-blue-950 text-blue-200 p-5 rounded-xl flex flex-col gap-10 items-center mb-80 mt-44 mx-5">
      <span className="text-5xl">Why we exist?</span>
      <p className="sm:text-center sm:w-[75vw] text-lg">{content.why}</p>
    </section>
  );
};

export default Why;

import { content } from "@/content/content";

const Why = () => {
  return (
    <section className="flex flex-col gap-10 items-center my-80">
      <span className="text-5xl">Why we exist?</span>
      <p className="text-center w-[75vw] text-lg">{content.why}</p>
    </section>
  );
};

export default Why;

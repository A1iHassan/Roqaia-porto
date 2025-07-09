import { content } from "@/content/content";

const Why = () => {
  return (
    <section className="bg-blue-950 text-blue-200 p-5 rounded-xl flex flex-col gap-10 items-center mb-80 mt-44 md:max-w-1/2 mx-auto">
      <span className="text-5xl">Why we exist?</span>
      <div className="flex flex-col md:gap-10 gap-6 p-4">
        {content.why.map((element, index) => (
          <p
            key={index}
            className="md:text-2xl font-light tracking-wider text-xl"
          >
            {element}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Why;

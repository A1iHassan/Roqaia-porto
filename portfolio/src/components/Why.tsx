import { content } from "@/content/content";

const Why = () => {
  return (
    <section
      className="
        bg-[url('/why.jpeg')]  
        bg-cover bg-center      
        text-blue-900                   
        p-5 rounded-xl
        flex flex-col gap-10 items-center
        mb-80 mt-15 md:max-w-2/3 mx-auto
      "
    >
      <span className="text-5xl text-blue-100">Why we exist?</span>
      <div className="flex flex-col gap-6 md:gap-10 w-full px-4">
        {content.why.map((element, index) => (
          <p
            key={index}
            className="
              md:text-2xl text-xl font-light tracking-wider
              bg-white/40      
              backdrop-blur-sm   
              p-4 rounded-md   
            "
          >
            {element}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Why;

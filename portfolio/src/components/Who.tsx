import Card from "./Card";
import { content } from "@/content/content";

const Who = () => {
  return (
    <section
      className="h-[50vh] flex my-56 mx-auto tracking-wide
    sm:w-100vw sm:h-[70vh] sm:mx-20 sm:flex sm:flex-row sm:gap-72 sm:justify-around sm:mb-40"
    >
      <Card
        title1="Who we are?"
        paragraph1={content.who[0]}
        title2="What we do?"
        paragraph2={content.what}
        button1="What we do"
        button2="Who we are"
        comment={content.who[1]}
      />
      <div className="flex justify-center items-center relative">
        <div className="sm:w-[22rem] sm:h-[22rem] sm:rounded-full sm:border-[1.5rem] sm:absolute sm:border-blue-50 sm:z-0 sm:-translate-y-18 sm:block hidden"></div>
        <img
          src="women.png"
          alt=""
          className="sm:w-[32rem] sm:h-[30rem] sm:block hidden z-10 -translate-y-25"
        />
      </div>
    </section>
  );
};

export default Who;

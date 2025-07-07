import Card from "./Card";
import { content } from "@/content/content";

const Who = () => {
  return (
    <section
      className="h-[50vh] flex my-56 tracking-wide
    sm:w-100vw sm:h-[70vh] sm:mx-20 sm:flex sm:flex-row sm:gap-72 sm:justify-around"
    >
      <Card
        title1="Who we are?"
        paragraph1={content.who}
        title2="What we do?"
        paragraph2={content.what}
        button1="What we do"
        button2="Who we are"
      />
      <img
        src="women.png"
        alt=""
        className="sm:w-[32rem] sm:h-[30rem] sm:block hidden"
      />
    </section>
  );
};

export default Who;

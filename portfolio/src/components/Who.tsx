import Card from "./Card";
import { content } from "@/content/content";

const Who = () => {
  return (
    <section className="w-100vw h-[70vh] mx-20 flex flex-row justify-around">
      <Card
        title1="Who we are?"
        paragraph1={content.who}
        title2="What we do?"
        paragraph2={content.what}
        button1="What we do"
        button2="Who we are"
      />
      <img src="" alt="" />
    </section>
  );
};

export default Who;

import Card from "./Card";
import { content } from "@/content/content";

const Who = () => {
  return (
    <section className="w-100vw mx-20">
      <Card paragraph1={content.who} paragraph2={content.what} />
      <aside></aside>
    </section>
  );
};

export default Who;

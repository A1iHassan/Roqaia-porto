import Activities from "@/components/Activities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SquareCard from "@/components/Square";
import Values from "@/components/Values";
import Who from "@/components/Who";
import Why from "@/components/Why";
import { content } from "@/content/content";

export default function Home() {
  return (
    <>
      <Header />
      <Who />
      <Activities />
      <section className="ml-[1vw] w-[96vw] mb-[20rem] flex flex-row justify-around">
        <SquareCard head="Mission" text={content.mission} />
        <SquareCard head="Vision" text={content.vision} />
      </section>
      <Values />
      <Why />
      <Footer />
    </>
  );
}

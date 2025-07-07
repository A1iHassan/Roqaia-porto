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
      <section
        className="flex flex-col items-center gap-4 mb-44
      sm:ml-[1vw] sm:w-[96vw] sm:mb-[20rem] sm:flex-row sm:justify-center sm:gap-96"
      >
        <SquareCard head="Mission" text={content.mission} />
        <SquareCard head="Vision" text={content.vision} />
      </section>
      <Values />
      <Why />
      <Footer />
    </>
  );
}

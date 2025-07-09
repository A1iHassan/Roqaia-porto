import Activities from "@/components/Activities";
import Arrow from "@/components/Arrow";
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
        className="flex flex-col items-center gap-5 mb-50
      md:flex-row md:justify-center
      "
      >
        <SquareCard head="Mission" text={content.mission} />
        <Arrow styling="hidden md:block" fill="#0779ff" />
        <SquareCard head="Vision" text={content.vision} />
      </section>
      <Values />
      <Why />
      <Footer />
    </>
  );
}

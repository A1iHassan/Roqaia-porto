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
        className="flex flex-col items-center gap-5 mb-50
      md:flex-row sm:justify-center sm:gap-20 sm:items-center
      "
      >
        <SquareCard head="Mission" text={content.mission} />
        <div className="flex justify-center items-center relative">
          <div className="sm:w-[22rem] sm:h-[22rem] sm:rounded-full sm:border-[1.5rem] sm:absolute sm:border-blue-50 sm:z-0 sm:-translate-y-18 sm:block hidden"></div>
          <img
            src="women.png"
            alt=""
            className="sm:w-[32rem] sm:h-[30rem] sm:block hidden z-10 -translate-y-25"
          />
        </div>
        <SquareCard head="Vision" text={content.vision} />
      </section>
      <Values />
      <Why />
      <Footer />
    </>
  );
}

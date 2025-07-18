import { content } from "@/content/content";
import Image from "next/image";

const Values = () => {
  return (
    <section
      className="
    sm:w-100vw sm:flex sm:flex-row sm:justify-center"
    >
      <Image
        src="/values1.jpeg"
        alt="values"
        width={700}
        height={200}
        className="sm:w-[25vw] sm:h-80 sm:mt-20 rounded-lg"
      />
      <article className="sm:w-[40vw] sm:min-h-[30rem] text-2xl bg-blue-200 m-3 p-6 pb-14 rounded-lg text-blue-900">
        <span className="font-semibold text-2xl block mb-4">Our Values</span>
        <ul className="break-normal flex flex-col gap-4">
          {content.ourValues.map((value, index) => (
            <li className="list-disc ml-6" key={index}>
              {value}
            </li>
          ))}
        </ul>
      </article>
      <Image
        src="/values2.jpeg"
        alt="values"
        width={700}
        height={200}
        className="sm:w-[25vw] sm:h-80 sm:mt-20 rounded-lg"
      />
    </section>
  );
};

export default Values;

import { content } from "@/content/content";

const Values = () => {
  return (
    <section className="w-100vw  mx-20 flex flex-row justify-center gap-72">
      <img src="women.png" alt="image" className="w-[32rem] h-[30rem]" />
      <article className="w-[25vw] min-h-[30rem] text-xl bg-blue-200 m-3 p-6 pb-14 rounded-lg text-blue-950">
        <span className="font-semibold text-2xl block mb-4">Our Values</span>
        <ul className="break-normal flex flex-col gap-4">
          {content.ourValues.map((value, index) => (
            <li className="list-disc ml-6" key={index}>
              {value}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Values;

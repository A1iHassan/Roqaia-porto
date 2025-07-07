import { content } from "@/content/content";

const Values = () => {
  return (
    <section
      className="
    sm:w-100vw sm:mx-20 sm:flex sm:flex-row sm:justify-center sm:gap-72"
    >
      <img
        src="women.png"
        alt="image"
        className="sm:w-[32rem] sm:h-[30rem] hidden"
      />
      <article className="sm:w-[25vw] sm:min-h-[30rem] text-xl bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 m-3 p-6 pb-14 rounded-lg text-blue-900">
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

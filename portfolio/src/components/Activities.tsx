import { content } from "@/content/content";

const Activities = () => {
  return (
    <section className="flex flex-col items-center relative mb-40 sm:mb-20">
      <span className="text-6xl my-6 text-blue-900 tracking-wide font-medium">
        Our activities
      </span>
      <div
        className="flex flex-col gap-16 bg-linear-to-br from-60% from-blue-950 to-blue-700 w-[96vw] p-6 bg-blue-950 rounded-2xl text-blue-200
      sm:flex-row sm:justify-around"
      >
        <div className="">
          <span className="block text-blue-100 text-2xl font-bold mb-4 ">
            Research Support & Capacity Building
          </span>
          <p className="w-64 text-lg font-light tracking-wide ">
            {content.ourCore[0][0]}
          </p>
        </div>
        <div className="">
          <span className="block text-blue-100 text-2xl font-bold mb-4 ">
            Maternal & Public Health Research
          </span>
          <div className="w-64 text-lg font-light tracking-wide">
            <ul>
              {content.ourCore[1].map((element: string, index: number) => (
                <li
                  key={index}
                  className={`${index > 0 ? "list-disc ml-5" : ""}`}
                >
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <span className="block text-blue-100 text-2xl font-bold mb-4 ">
            Community Solutions & Advocacy
          </span>
          <div className="w-64 text-lg font-light tracking-wide">
            <ul>
              {content.ourCore[2].map((element: string, index: number) => (
                <li
                  key={index}
                  className={`${index > 0 ? "list-disc ml-5" : ""}`}
                >
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src="image862.png"
          alt="woman line"
          className="h-32 w-64 absolute right-6 bottom-2 invert"
        />
      </div>
    </section>
  );
};

export default Activities;

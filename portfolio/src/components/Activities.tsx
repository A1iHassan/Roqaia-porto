import { content } from "@/content/content";

const Activities = () => {
  return (
    <section className="flex flex-col items-center relative">
      <span className="text-5xl my-6">Our activities</span>
      <div className=" bg-linear-to-br from-60% from-blue-950 to-blue-700 w-[96vw] p-6 bg-blue-950 rounded-2xl text-blue-200">
        <div className="flex justify-around font-bold text-2xl text-blue-50">
          <span>Research Support & Capacity Building</span>
          <span>Maternal & Public Health Research</span>
          <span>Community Solutions & Advocacy</span>
        </div>
        <div className="flex justify-around text-wrap p-3 rounded-lg pt-7 text-lg font-light">
          <p className="w-64 ">{content.ourCore[0]}</p>

          <p className="w-64">{content.ourCore[1]}</p>

          <p className="w-64">{content.ourCore[2]}</p>
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

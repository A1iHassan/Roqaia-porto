import { content } from "@/content/content";

const Who = () => {
  return (
    <section className="relative mt-50 sm:my-50 flex sm:flex-row flex-col sm:justify-center gap-10">
      <article
        className={`
           bg-blue-200 text-blue-950 w-80 h-[26rem] p-4 rounded-xl m-3
          
          sm:w-[25vw] sm:min-h-[30rem] sm:text-xl tracking-wide sm:m-3 sm:p-6 sm:pb-14 sm:rounded-lg  `}
      >
        <p className="font-semibold text-2xl mb-4">Who we are</p>
        <p className="break-normal">{content.who[0]}</p>
        <p className="p-2 bg-blue-900 border-l-5 rounded-md border-black text-blue-50 opacity-50 mt-3">
          {content.who[1]}
        </p>
      </article>
      <article
        className={`
           bg-blue-950 text-blue-200 w-80 h-[26rem] p-4 rounded-xl m-3
          sm:w-[25vw] sm:min-h-[30rem] sm:text-xl tracking-wide sm:m-3 sm:p-6 sm:pb-14 sm:rounded-lg  `}
      >
        <p className="font-semibold text-2xl mb-4">What we do</p>
        <p className="break-normal">{content.what}</p>
      </article>
    </section>
  );
};

export default Who;

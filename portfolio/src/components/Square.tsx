type SquareCardProp = {
  head: string;
  text: string | string[];
};

const SquareCard = ({ head, text }: SquareCardProp) => {
  return (
    <article
      className="flex flex-col items-start bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 rounded-lg py-4 px-8 mx-4 gap-2
     sm:gap-6 md:w-[30rem] md:h-[25rem]"
    >
      <span className="text-4xl sm:text-6xl font-semibold text-blue-950">
        {head}
      </span>
      <p className="text-xl sm:text-3xl text-blue-900 tracking-wide ">{text}</p>
    </article>
  );
};

export default SquareCard;

type SquareCardProp = {
  head: string;
  text: string | string[];
};

const SquareCard = ({ head, text }: SquareCardProp) => {
  return (
    <article
      className="flex flex-col items-start bg-blue-200 rounded-lg py-4 px-8 mx-4 gap-2
    sm:w-64 sm:gap-6"
    >
      <span className="text-4xl font-semibold text-blue-950">{head}</span>
      <p className="text-lg font-light text-blue-900 tracking-wide ">{text}</p>
    </article>
  );
};

export default SquareCard;

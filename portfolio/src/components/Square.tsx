type SquareCardProp = {
  head: string;
  text: string | string[];
};

const SquareCard = ({ head, text }: SquareCardProp) => {
  return (
    <article className="w-64 flex flex-col items-center gap-6 bg-blue-200 py-4 px-8 rounded-lg">
      <span className="text-4xl font-semibold text-blue-900">{head}</span>
      <p className="text-lg font-light text-blue-900">{text}</p>
    </article>
  );
};

export default SquareCard;

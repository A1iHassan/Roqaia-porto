type OvalProp = {
  fill: string;
  styling?: string;
};

const Oval = ({ fill, styling }: OvalProp) => {
  return (
    <svg
      version="1.1"
      id="svg10523"
      width="294.46317"
      height="475.83334"
      className={styling}
    >
      <defs id="defs10527" />

      <g
        id="g10529"
        transform="matrix(3.7795276,0,0,3.7795276,-324.97756,-328.25692)"
      >
        <ellipse
          id="path8650"
          cx="124.93867"
          cy="149.80009"
          rx="38.822731"
          ry="62.816494"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default Oval;

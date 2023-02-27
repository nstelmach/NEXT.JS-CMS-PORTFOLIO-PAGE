export const Hero = (props) => {
  const { headline, subheadline, backgroundImage } = props;
  return (
    <div
      className={`min-h-[500px]
    relative
    flex
    items-end
    justify-center
    p-6
    my-6
    rounded-[5px]
  }`}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-6xl text-white font-bold mb-3">{headline}</h1>
        <h2 className="text-4xl text-white font-light">{subheadline}</h2>
      </div>
    </div>
  );
};

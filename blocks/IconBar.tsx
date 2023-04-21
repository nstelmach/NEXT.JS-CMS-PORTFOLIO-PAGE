import { iconBar } from "../constants/icons";

type IconBarProps = {
  title: string;
};

export default function IconBar(props: IconBarProps) {
  const { title } = props;
  return (
    <div className="grid content-center overflow-hidden w-full sm:mt-12">
      <h2 className="text-center my-16 text-xl sm:text-2xl drop-shadow-xs tracking-xl">
        {title}
      </h2>
      <div className="m-auto max-w-[100vw]">
        <div className="flex gap-20">
          <div className="flex shrink-0 justify-around items-center gap-20 min-w-full animate-scroll-left">
            {iconBar.map((technology) => (
              <div
                key={technology.name}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-4xl"> {technology.icon}</div>

                <p className="my-2">{technology.name}</p>
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="flex shrink-0 justify-around items-center gap-20 min-w-full animate-scroll-left"
          >
            {iconBar.map((technology) => (
              <div
                key={technology.name}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-4xl"> {technology.icon}</div>
                <p className="my-2">{technology.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

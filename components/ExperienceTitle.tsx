type ExperienceTitleProps = {
  position: string;
  date: string;
  visibleDivs: { div1: boolean; div2: boolean; div3: boolean };
  showInfo: (event: any, key: string) => void;
  hideInfo: (event: any, key: string) => void;
  div: string;
};

export default function ExperienceTitle(props: ExperienceTitleProps) {
  const { position, date, visibleDivs, showInfo, hideInfo, div } = props;

  return (
    <div className="flex justify-center items-center rounded-lg bg-dark-grey shadow-grey max-w-2xl m-6 sm:text-lg">
      <div className="grow p-4">{position}</div>
      <div className="p-4">{date}</div>
      <div
        onClick={(e) => {
          visibleDivs[div] ? hideInfo(e, div) : showInfo(e, div);
        }}
        className="hover:cursor-pointer"
      >
        {visibleDivs[div] ? (
          <i className="fa-solid fa-minus p-4"></i>
        ) : (
          <i className="fa-solid fa-plus p-4"></i>
        )}
      </div>
    </div>
  );
}

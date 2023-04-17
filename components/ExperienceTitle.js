export default function ExperienceTitle(props) {
  const { position, date, visibleDivs, showInfo, hideInfo, div } = props;

  return (
    <div className="flex justify-center items-center rounded-lg bg-dark-grey shadow-grey max-w-2xl m-6 text-lg">
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

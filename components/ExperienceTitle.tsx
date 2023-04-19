type ExperienceTitleProps = {
  position: string;
  date: string;
  isVisibleDiv: boolean;
  onClickHandler: () => void;
};

export default function ExperienceTitle(props: ExperienceTitleProps) {
  const { position, date, isVisibleDiv, onClickHandler } = props;

  return (
    <div className="flex justify-center items-center rounded-lg bg-dark-grey shadow-grey max-w-2xl m-6 sm:text-lg">
      <div className="grow p-4">{position}</div>
      <div className="p-4">{date}</div>
      <div onClick={onClickHandler} className="hover:cursor-pointer">
        {isVisibleDiv ? (
          <i className="fa-solid fa-minus p-4"></i>
        ) : (
          <i className="fa-solid fa-plus p-4"></i>
        )}
      </div>
    </div>
  );
}

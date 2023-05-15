type ExperienceTitleProps = {
  position: string;
  date: string;
  isVisibleDiv: boolean;
  onClickHandler: () => void;
};

export default function ExperienceTitle(props: ExperienceTitleProps) {
  const { position, date, isVisibleDiv, onClickHandler } = props;

  return (
    <div className="flex items-center justify-between rounded-lg bg-dark-grey shadow-grey max-w-2xl m-6 sm:text-lg">
      <div className="p-4 flex-1">{position}</div>

      <div className="p-4  flex-1">{date}</div>

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

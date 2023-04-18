import { Animated } from "react-animated-css";

type ExperienceDescriptionProps = {
  description: string;
};

export default function ExperienceDescription(
  props: ExperienceDescriptionProps
) {
  const { description } = props;
  return (
    <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
      <div className="rounded-lg bg-dark-grey shadow-grey max-w-2xl p-4 m-6 text-center sm:text-lg sm:text-left">
        {description}
      </div>
    </Animated>
  );
}

import { Animated } from "react-animated-css";

export default function ExperienceDescription(props) {
  const { description } = props;
  return (
    <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
      <div className="rounded-lg bg-dark-grey shadow-grey max-w-2xl p-4 m-6">
        {description}
      </div>
    </Animated>
  );
}

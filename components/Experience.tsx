import ExperienceDescription from "./ExperienceDescription";
import ExperienceTitle from "./ExperienceTitle";
import { useState } from "react";

type ExperienceProps = {
  title: string;
  experience: Array<{
    component: string;
    experience: Array<{
      component: string;
      date: string;
      position: string;
      _uid: string;
      description: string;
    }>;
    _uid: string;
  }>;
};
export default function Experience(props: ExperienceProps) {
  const { title, experience } = props;

  const jobs = experience.map((job) => ({
    position: job.experience[0].position,
    date: job.experience[0].date,
    description: job.experience[1].description,
    id: job._uid,
  }));

  const initialVisibleDivs = {
    div1: false,
    div2: false,
    div3: false,
  };

  const [toggle, setToggle] = useState(true);

  const [visibleDivs, setVisibleDivs] = useState(initialVisibleDivs);

  function toggleClick() {
    setToggle((toggle) => !toggle);
  }

  const showInfo = (event: any, key: string) => {
    toggleClick();
    event.preventDefault();
    setVisibleDivs({
      div1: false,
      div2: false,
      div3: false,
      ...{ [key]: true },
    });
  };

  const hideInfo = (event: any, key: string) => {
    toggleClick();
    event.preventDefault();
    setVisibleDivs({ ...visibleDivs, ...{ [key]: false } });
  };

  return (
    <div
      id="experience"
      className="flex justify-center items-center flex-col my-10 lg:my-16"
    >
      <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-xl lg:tracking-xxl drop-shadow-s mb-16 mt-12 sm:mb-20 sm:mt-16 md:mb-24 lg:mt-20">
        {title}
      </h2>
      <div className="bg-[url('../public/images/white-concrete-wall.jpg')] bg-repeat bg-cover shadow-white max-w-7xl sm:max-w-xl rounded-lg mx-5">
        {jobs.map(({ position, date, id, description }) => (
          <div key={id}>
            <ExperienceTitle
              position={position}
              date={date}
              visibleDivs={visibleDivs}
              showInfo={showInfo}
              hideInfo={hideInfo}
              div={id}
            />
            {visibleDivs[id] && (
              <ExperienceDescription description={description} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

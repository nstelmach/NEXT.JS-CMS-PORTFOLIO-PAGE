import ExperienceDescription from "./ExperienceDescription";
import ExperienceTitle from "./ExperienceTitle";
import { useState } from "react";

export default function Experience(props) {
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

  const showInfo = (event, key) => {
    toggleClick();
    event.preventDefault();
    setVisibleDivs({
      div1: false,
      div2: false,
      div3: false,
      ...{ [key]: true },
    });
  };

  const hideInfo = (event, key) => {
    toggleClick();
    event.preventDefault();
    setVisibleDivs({ ...visibleDivs, ...{ [key]: false } });
  };

  return (
    <div
      id="experience"
      className="flex justify-center items-center flex-col h-screen"
    >
      <h2 className="text-6xl tracking-xxl drop-shadow-s mb-24 mt-20">
        {title}
      </h2>
      <div className="bg-[url('../public/images/white-concrete-wall.jpg')] bg-repeat bg-cover shadow-white max-w-7xl rounded-lg ">
        {jobs.map(({ position, date, id, description }) => (
          <div>
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

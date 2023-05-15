import ExperienceDescription from "../components/ExperienceDescription";
import ExperienceTitle from "../components/ExperienceTitle";
import { useState } from "react";
import { SBExperiences } from "../types/types";
import Container from "../components/Container";

type ExperienceProps = {
  title: string;
  experience: Array<SBExperiences>;
};
export default function Experience(props: ExperienceProps) {
  const { title, experience } = props;

  const jobs = experience.map((job) => ({
    position: job.experience[0].position,
    date: job.experience[0].date,
    description: job.experience[1].description,
    id: job._uid,
  }));

  const initialVisibleDivs = {};

  const [visibleDivs, setVisibleDivs] = useState(initialVisibleDivs);

  const showInfo = (key: string) => {
    setVisibleDivs({
      ...{ [key]: true },
    });
  };

  const hideInfo = (key: string) => {
    setVisibleDivs({ ...visibleDivs, ...{ [key]: false } });
  };

  const toggle = (div: string) => {
    visibleDivs[div] ? hideInfo(div) : showInfo(div);
  };

  return (
    <Container>
      <div
        id="experience"
        className="flex justify-center items-center flex-col my-10 lg:my-16"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-xl lg:tracking-xxl drop-shadow-s mb-16 mt-12 sm:mb-20 sm:mt-16 md:mb-24 lg:mt-20">
          {title}
        </h2>
        <div className="bg-[url('../public/images/white-concrete-wall.jpg')] bg-repeat bg-cover shadow-white max-w-7xl sm:max-w-2xl rounded-lg">
          {jobs.map(({ position, date, id, description }) => (
            <div key={id}>
              <ExperienceTitle
                position={position}
                date={date}
                isVisibleDiv={visibleDivs[id]}
                onClickHandler={() => {
                  toggle(id);
                }}
              />
              {visibleDivs[id] && (
                <ExperienceDescription description={description} />
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

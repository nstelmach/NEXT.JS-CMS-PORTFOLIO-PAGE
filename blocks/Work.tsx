import Link from "next/link.js";
import { icons } from "../constants/icons";
import { SBProjects } from "../types/types";
import Container from "../components/Container";

type WorkProps = {
  title: string;
  Projects: SBProjects;
};

export default function Work(props: WorkProps) {
  const { title, Projects } = props;
  const projectsObj = Projects.map((project) => ({
    key: project._uid,
    title: project.title,
    image: project.image.filename,
    description: project.description,
    appLink: project.links[1].link.url,
    appTitle: project.links[1].name,
    gitHubLink: project.links[0].link.url,
    gitHubTitle: project.links[0].name,
    technologies: project.technologies,
  }));

  const project = projectsObj.map(
    ({
      key,
      title,
      image,
      description,
      appLink,
      appTitle,
      gitHubLink,
      gitHubTitle,
      technologies,
    }) => (
      <div
        key={key}
        className="flex justify-center items-center flex-col rounded-lg bg-dark-grey shadow-grey max-w-sm p-5"
      >
        <h2 className="text-xl mb-3 font-semibold tracking-xl hover:text-2xl drop-shadow-xs hover:transition-all hover:cursor-pointer">
          {title}
        </h2>

        <img width="100%" height="225" src={image} alt="Project" />

        <div className="flex justify-between items-center flex-col grow max-w-full">
          <div className="text-justify my-5 text-sm ">{description}</div>

          <div className="flex justify-center items-center flex-col max-w-full">
            <div className="flex justify-center items-center m-3 ">
              <Link
                className="mx-5 hover:text-xl hover:drop-shadow-xs hover:transition-all hover:underline text-center"
                href={appLink}
                target="_blank"
              >
                {appTitle}
              </Link>
              <Link
                className="mx-5 hover:text-xl hover:drop-shadow-xs hover:transition-all hover:underline text-center"
                href={gitHubLink}
                target="_blank"
              >
                {gitHubTitle}
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center">
              {technologies.map((icon) => (
                <div
                  key={icons[icon]}
                  className="m-2 hover:text-light-grey hover:cursor-pointer text-4xl"
                >
                  {icons[icon]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
  return (
    <Container>
      <div id="work" className="flex justify-center items-center flex-col">
        <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-xl lg:tracking-xxl drop-shadow-s mb-16 mt-6 sm:mb-20 sm:mt-8 md:mb-24 md:mt-10">
          {title}
        </h2>
        <div className="grid md:gap-5 gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:p-12 p-8 bg-[url('../public/images/white-concrete-wall.jpg')] bg-repeat bg-cover shadow-white sm:max-w-2xl max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-6xl rounded-lg">
          {project}
        </div>
      </div>
    </Container>
  );
}

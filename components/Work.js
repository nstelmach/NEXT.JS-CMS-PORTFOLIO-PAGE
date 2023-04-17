import Link from "next/link.js";
import { icons } from "../public/projects.ts";

export default function Work(props) {
  const { title, Projects } = props;

  const projectsObj = Projects.map((project) => ({
    key: project._uid,
    title: project.title,
    image: project.image.filename,
    description: project.description,
    appLink: project.links[0].link.url,
    appTitle: project.links[0].name,
    gitHubLink: project.links[1].link.url,
    gitHubTitle: project.links[1].name,
    technologies: project.technologies,
  }));

  const parse = require("html-react-parser");

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
                className="mx-5 hover:text-xl hover:drop-shadow-xs hover:transition-all hover:underline"
                href={appLink}
                target="_blank"
              >
                {appTitle}
              </Link>
              <Link
                className="mx-5 hover:text-xl hover:drop-shadow-xs hover:transition-all hover:underline "
                href={gitHubLink}
                target="_blank"
              >
                {gitHubTitle}
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center">
              {technologies.map((icon) => (
                <div
                  key={technologies[icon]}
                  className="m-2 hover:text-light-grey hover:cursor-pointer"
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
    <div id="work" className="flex justify-center items-center flex-col">
      <h2 className="text-6xl tracking-xxl drop-shadow-s mb-24 mt-10">
        {title}
      </h2>
      <div className="grid gap-5 grid-cols-3 p-12 bg-[url('../public/images/white-concrete-wall.jpg')] bg-repeat bg-cover shadow-white max-w-7xl rounded-lg">
        {project}
      </div>
    </div>
  );
}
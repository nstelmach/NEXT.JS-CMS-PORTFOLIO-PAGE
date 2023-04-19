import Image from "next/image";
import { SBImage } from "../types/types";
import Container from "../components/Container";

type AboutMeProps = {
  title: string;
  description: string;
  image: SBImage;
};

export default function AboutMe(props: AboutMeProps) {
  const { title, description, image } = props;

  return (
    <Container>
      <div
        id="about"
        className="flex justify-center items-center flex-col sm:h-screen"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-xl lg:tracking-xxl drop-shadow-s mt-12">
          {title}
        </h2>
        <div className="flex justify-around items-center flex-col sm:flex-row mt-5 sm:mt-7 md:mt-8 lg:mt-9">
          <div className="transition ease-in-out duration-500 hover:scale-110 hover:cursor-pointer">
            <div className="rounded-full border-4 border-light-grey w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 flex justify-center items-center ml-5 m-4 lg:m-2">
              <Image
                className="rounded-full relative right-4 top-4 "
                src={image?.filename}
                alt="my profile picture"
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
          <div className="md:text-lg lg:text-xl m-8 text-justify sm:text-left sm:m-4 md:m-5 lg:w-1/2">
            {description}
          </div>
        </div>
      </div>
    </Container>
  );
}

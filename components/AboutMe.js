import Image from "next/image";
import profilepic from "../public/images/profilepic.jpeg";

export default function AboutMe(props) {
  const { title, description, image } = props;
  return (
    <div
      id="about"
      className="flex justify-center items-center flex-col h-screen"
    >
      <h2 className="text-6xl tracking-xxl drop-shadow-s">{title}</h2>
      <div className="flex justify-around items-center mt-9">
        <div className="transition ease-in-out duration-500 hover:scale-110 hover:cursor-pointer">
          <div className="rounded-full border-4 border-light-grey w-64 h-64 flex justify-center items-center m-6">
            <Image
              className="rounded-full relative right-4 top-4 "
              src={image?.filename}
              alt="my profile picture"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
        <div className="text-xl m-5 w-1/2">{description}</div>
      </div>
    </div>
  );
}

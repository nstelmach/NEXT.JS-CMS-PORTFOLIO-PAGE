export default function Home(props) {
  const { title, subtitle } = props;
  return (
    <div
      id="home"
      className="pt-24 flex justify-center items-center flex-col h-screen bg-[url('../public/images/background-cubes.jpg')] bg-repeat bg-cover"
    >
      <h1 className=" text-8xl tracking-xl">{title}</h1>
      <h5 className="text-5xl tracking-xxl drop-shadow-s my-8 ">{subtitle}</h5>
    </div>
  );
}

import Container from "../components/Container";

type HomeProps = {
  title: string;
  subtitle: string;
};

export default function Home(props: HomeProps) {
  const { title, subtitle } = props;
  return (
    <div
      id="home"
      className="pt-24 flex justify-center items-center flex-col h-screen bg-[url('../public/images/background-cubes.jpg')] bg-repeat bg-cover"
    >
      <Container>
        <h1 className="lg:text-8xl md:text-7xl text-5xl tracking-xs lg:tracking-xl text-center mx-2">
          {title}
        </h1>

        <h5 className="lg:text-5xl md:text-4xl text-2xl tracking-s lg:tracking-xxl drop-shadow-s my-8 text-center ">
          {subtitle}
        </h5>
      </Container>
    </div>
  );
}

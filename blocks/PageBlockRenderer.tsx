import { createBlockComponentRenderer } from "./createBlockComponentRenderer";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import IconBar from "../components/IconBar";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const PageComponents = {
  Home: Home,
  AboutMe: AboutMe,
  Work: Work,
  IconBar: IconBar,
  Experience: Experience,
  Footer: Footer,
};

export const PageBlockRenderer = createBlockComponentRenderer(PageComponents);

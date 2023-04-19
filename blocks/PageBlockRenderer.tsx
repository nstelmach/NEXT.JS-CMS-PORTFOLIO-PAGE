import { createBlockComponentRenderer } from "./createBlockComponentRenderer";
import Home from "./Home";
import AboutMe from "./AboutMe";
import IconBar from "./IconBar";
import Work from "./Work";
import Experience from "./Experience";
import Footer from "./Footer";

const PageComponents = {
  Home: Home,
  AboutMe: AboutMe,
  Work: Work,
  IconBar: IconBar,
  Experience: Experience,
  Footer: Footer,
};

export const PageBlockRenderer = createBlockComponentRenderer(PageComponents);

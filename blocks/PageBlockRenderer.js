import { createBlockComponentRenderer } from "./createBlockComponentRenderer";
import { Hero } from "./Hero";

const PageComponents = {
  Hero: Hero,
};

export const PageBlockRenderer = createBlockComponentRenderer(PageComponents);

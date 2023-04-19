type SBLinks = {
  component: string;
  link: SBLink;
  name: string;
  _uid: string;
};

type SBProject = {
  component: string;
  description: string;
  image: SBImage;
  links: Array<SBLinks>;
  technologies: Array<string>;
  title: string;
  _uid: string;
};

export type SBProjects = Array<SBProject>;

type NavLink = {
  href: string;
  key: string;
  label: string;
};

export type NavLinks = Array<NavLink>;

export type SBNavLink = {
  component: string;
  label: string;
  link: SBLink;
  _uid: string;
};

export type SBImage = {
  alt: string;
  copyright: string;
  fieldtype: string;
  filename: string;
  focus: string;
  id: number;
  is_external_url: boolean;
  name: string;
  title: string;
};

type SBExperience = {
  component: string;
  date: string;
  position: string;
  _uid: string;
  description: string;
};

export type SBExperiences = {
  component: string;
  experience: Array<SBExperience>;
  _uid: string;
};

export type SBLink = {
  cached_url: string;
  anchor: string;
  fieldtype: string;
  id: string;
  linktype: string;
  target: string;
  url: string;
};

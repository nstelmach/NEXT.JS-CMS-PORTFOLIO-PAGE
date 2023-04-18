export type Projects = Array<{
  component: string;
  description: string;
  image: {
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
  links: Array<{
    component: string;
    link: {
      cached_url: string;
      fieldtype: string;
      id: string;
      linktype: string;
      target: string;
      url: string;
    };
    name: string;
    _uid: string;
  }>;
  technologies: Array<string>;
  title: string;
  _uid: string;
}>;

export type NavLinks = Array<{ href: string; key: string; label: string }>;

export type NavLink = {
  component: string;
  label: string;
  link: {
    anchor: string;
    cached_url: string;
    fieldtype: string;
    id: string;
    linktype: string;
    url: string;
  };
  _uid: string;
};

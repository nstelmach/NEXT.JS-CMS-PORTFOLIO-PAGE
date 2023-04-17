export const icons = {
  react: '<i className="devicon-react-original text-4xl"></i>',
  typeScript: ' <i className="devicon-typescript-plain text-4xl"></i>',
  firebase: '<i className="devicon-firebase-plain text-4xl"></i>',
  CSS: '<i className="devicon-css3-plain text-4xl"></i>',
  javaScript: '<i className="devicon-javascript-plain text-4xl"></i>',
  nextJs: '<i className="devicon-nextjs-original text-4xl"></i>',
  tailwind: '<i className="devicon-tailwindcss-plain text-4xl"></i>',
  bootstrap: '<i className="devicon-bootstrap-plain text-4xl"></i>',
  redux: '<i className="devicon-redux-original text-4xl"></i>',
};

export const myProjects = [
  {
    id: 1,
    title: "TIC TAC TOE",
    description:
      'This is a tic-tac-toe game. The application is authorized. The logged-in user can create a game room to play with another online user or play against the computer. The user can choose whether to play with "O" or "X", as well as reset the game or leave the room. Previous games are saved as a table in the "History" tab. Used technologies: React, React Router, Typescript, Firebase, and CSS Modules.',
    image: "/images/tic-tac-toe.jpg",
    appLink: "https://nstelmach.github.io/Tic-Tac-Toe",
    gitHubLink: "https://github.com/nstelmach/Tic-Tac-Toe",
    technologies: [icons.react, icons.typeScript, icons.firebase, icons.CSS],
  },
  {
    id: 2,
    title: "PORTFOLIO",
    description:
      "This is my portfolio page. There are home, about, work, experience, contact, and resume sections. An additional variety is the use of Storyblok - Headless Content Management System with the Visual Editor. Used technologies: Next.js, React, Typescript, Tailwind, and Storyblok.",
    image: "/images/portfolio.jpg",
    appLink: "",
    gitHubLink: "https://github.com/nstelmach/Portfolio",
    technologies: [
      icons.react,
      icons.typeScript,
      icons.CSS,
      icons.tailwind,
      icons.nextJs,
    ],
  },
  {
    id: 3,
    title: "MYNEWS",
    description:
      "This is an application that displays news from different countries using a public API. It is possible to change the view of news from the list to grid. Clicking on a given country in the side menu redirects the user to the news page for that country. Clicking on a given news item opens a popup with additional information. The footer contains the current time and the number of articles that are displayed in the main content. Used technologies: React, React Router, Redux, Typescript, and Bootstrap.",
    image: "/images/mynews.jpg",
    appLink: "",
    gitHubLink: "https://github.com/nstelmach/gnNews",
    technologies: [
      icons.react,
      icons.typeScript,
      icons.CSS,
      icons.bootstrap,
      icons.redux,
    ],
  },
];

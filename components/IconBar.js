export default function IconBar(props) {
  const { title } = props;
  return (
    <div className="grid content-center overflow-hidden w-full mt-12">
      <h2 className="text-center my-16 text-2xl drop-shadow-xs tracking-xl">
        {title}
      </h2>
      <div className="m-auto max-w-[100vw]">
        <div className="flex gap-20">
          <div className="flex shrink-0 justify-around items-center gap-20 min-w-full animate-scroll-left">
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-html5-plain text-4xl"></i>
              <p className="my-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-css3-plain text-4xl"></i>
              <p className="my-2">CSS3</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-tailwindcss-plain text-4xl"></i>
              <p className="my-2">Tailwind</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-javascript-plain text-4xl"></i>
              <p className="my-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-react-original text-4xl"></i>
              <p className="my-2">React.js</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-typescript-plain text-4xl"></i>
              <p className="my-2">TypeScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-git-plain text-4xl"></i>
              <p className="my-2">Git</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-github-original text-4xl"></i>
              <p className="my-2">GitHub</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-vscode-plain text-4xl"></i>
              <p className="my-2">VS Code</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-firebase-plain text-4xl"></i>
              <p className="my-2">Firebase</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-nextjs-original text-4xl"></i>
              <p className="my-2">Next.js</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-bootstrap-plain text-4xl"></i>
              <p className="my-2">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-npm-original-wordmark text-4xl"></i>
              <p className="my-2">Npm</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-webpack-plain text-4xl"></i>
              <p className="my-2">Webpack</p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="flex shrink-0 justify-around items-center gap-20 min-w-full animate-scroll-left"
          >
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-html5-plain text-4xl"></i>

              <p className="my-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-css3-plain text-4xl"></i>
              <p className="my-2">CSS3</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-tailwindcss-plain text-4xl"></i>
              <p className="my-2">Tailwind</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-javascript-plain text-4xl"></i>
              <p className="my-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-react-original text-4xl"></i>
              <p className="my-2">React.js</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-typescript-plain text-4xl"></i>
              <p className="my-2">TypeScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-git-plain text-4xl"></i>
              <p className="my-2">Git</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-github-original text-4xl"></i>
              <p className="my-2">GitHub</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-vscode-plain text-4xl"></i>
              <p className="my-2">VS Code</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-firebase-plain text-4xl"></i>
              <p className="my-2">Firebase</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-nextjs-original text-4xl"></i>
              <p className="my-2">Next.js</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-bootstrap-plain text-4xl"></i>
              <p className="my-2">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-npm-original-wordmark text-4xl"></i>
              <p className="my-2">Npm</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i className="devicon-webpack-plain text-4xl"></i>
              <p className="my-2">Webpack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

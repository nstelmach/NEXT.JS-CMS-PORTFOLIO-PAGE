import Link from "next/link";
import { SBLink } from "../types/types";

type FooterProps = {
  email: string;
  phone: string;
  copyrights: string;
  github: SBLink;
  linkedin: SBLink;
};

export default function Footer(props: FooterProps) {
  const { email, phone, copyrights, github, linkedin } = props;

  return (
    <footer
      id="contact"
      className="bg-dark-grey flex justify-center items-center flex-col py-5 w-full mt-12 border-solid border-t border-white"
    >
      <div className="flex justify-center items-center m-2">
        <Link href={github.url} target="_blank">
          <i className="fa-brands fa-github fa-2xl m-3 sm:m-5 fa-beat hover:text-light-grey"></i>
        </Link>
        <Link href={linkedin.url} target="_blank">
          <i className="fa-brands fa-linkedin fa-2xl m-3 sm:m-5 fa-beat hover:text-light-grey"></i>
        </Link>
      </div>
      <div className="flex justify-center flex-col sm:flex-row items-center m-2">
        <div className="flex justify-center items-center mt-3 sm:mt-0">
          <i className="fa-solid fa-envelope fa-xl m-3 sm:m-5 hover:text-light-grey"></i>
          <div>{email}</div>
        </div>
        <div className="flex justify-center items-center mt-3 sm:mt-0">
          <i className="fa-solid fa-phone fa-xl m-3 sm:m-5 hover:text-light-grey"></i>
          <div>{phone}</div>
        </div>
      </div>
      <div className="text-xs mt-3 sm:mt-5 text-light-grey">
        <span className="text-lg ">&copy;</span>
        {copyrights}
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer(props) {
  const { email, phone, copyrights, github, linkedin } = props;
  return (
    <div
      id="contact"
      className="bg-dark-grey flex justify-center items-center flex-col py-5 w-full mt-12 border-solid border-t border-white"
    >
      <div className="flex justify-center items-center m-2">
        <Link href={github.url} target="_blank">
          <i className="fa-brands fa-github fa-2xl m-5 fa-beat hover:text-light-grey"></i>
        </Link>
        <Link href={linkedin.url} target="_blank">
          <i className="fa-brands fa-linkedin fa-2xl m-5 fa-beat hover:text-light-grey"></i>
        </Link>
      </div>
      <div className="flex justify-center items-center m-2">
        <i className="fa-solid fa-envelope fa-xl m-5 hover:text-light-grey"></i>
        <div>{email}</div>
        <i className="fa-solid fa-phone fa-xl m-5 hover:text-light-grey"></i>
        <div>{phone}</div>
      </div>
      <div className="text-xs mt-5 text-light-grey">
        <span className="text-lg ">&copy;</span>
        {copyrights}
      </div>
    </div>
  );
}

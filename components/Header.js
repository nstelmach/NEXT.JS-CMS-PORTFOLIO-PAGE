import HeaderButton from "./HeaderButton";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";
import ResumeLink from "./ResumeLink";

export default function Header({ navLinks }) {
  return (
    <div className="bg-dark-grey flex justify-center items-center h-24 fixed w-full px-12 z-10">
      <div className="mx-4 hover:cursor-pointer">
        <Link href="#home">
          <Image src={logo} alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className="grow text-center">
        {navLinks?.map(({ key, href, label }) => {
          return <HeaderButton label={label} href={href} key={key} />;
        })}
      </div>
    </div>
  );
}

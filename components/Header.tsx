import HeaderButton from "./HeaderButton";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";
import { NavLinks } from "../types/types";

type HeaderProps = {
  navLinks: NavLinks;
};

export default function Header({ navLinks }: HeaderProps) {
  return (
    <nav className="bg-dark-grey flex justify-center items-center h-24 fixed w-full lg:px-12 px-4 z-10">
      <div className="lg:mx-4 mx-2 hover:cursor-pointer">
        <Link href="#home">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex justify-center items-center flex-wrap grow text-center">
        {navLinks?.map(({ key, href, label }) => {
          return <HeaderButton label={label} href={href} key={key} />;
        })}
      </div>
    </nav>
  );
}

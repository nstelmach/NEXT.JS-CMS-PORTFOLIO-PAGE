import HeaderButton from "./HeaderButton";
import Image from "next/image";
import logo from "../images/logo.png";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
      <div className={styles.buttonWrapper}>
        <HeaderButton label="home" />
        <HeaderButton label="about" />
        <HeaderButton label="work" />
        <HeaderButton label="experience" />
        <HeaderButton label="contact" />
        <HeaderButton label="resume" />
      </div>
    </div>
  );
}

import styles from "../styles/HeaderButton.module.css";
import Link from "next/link";

export default function HeaderButton({ label }) {
  return (
    <Link className={styles.button} href={`#${label}`}>
      // {label}
    </Link>
  );
}

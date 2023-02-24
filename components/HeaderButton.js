import styles from "../styles/HeaderButton.module.css";

export default function HeaderButton({ label }) {
  return (
    <a className={styles.button} href={`#${label}`}>
      // {label}
    </a>
  );
}

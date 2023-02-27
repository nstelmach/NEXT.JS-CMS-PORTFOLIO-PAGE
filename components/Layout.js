import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}

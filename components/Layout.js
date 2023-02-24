import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
    </div>
  );
}

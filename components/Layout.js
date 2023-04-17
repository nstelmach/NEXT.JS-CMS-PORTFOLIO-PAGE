import Header from "./Header";

export default function Layout({ children, navLinks }) {
  return (
    <div>
      <Header navLinks={navLinks} />
      {children}
    </div>
  );
}

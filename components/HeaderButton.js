import Link from "next/link";

export default function HeaderButton({ label, href }) {
  return (
    <Link
      className="no-underline text-lg mx-4 hover:text-xl hover:drop-shadow-xs hover:transition-all"
      href={href}
      target={label === "resume" && "_blank"}
    >
      // {label}
    </Link>
  );
}

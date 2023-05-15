import Link from "next/link";

type HeaderButtonProps = {
  label: string;
  href: string;
};

export default function HeaderButton({ label, href }: HeaderButtonProps) {
  return (
    <div className="hover:scale-110">
      <Link
        className="no-underline lg:text-lg lg:mx-4 mx-2 hover:drop-shadow-xs hover:transition-all"
        href={href}
        target={label === "resume" ? "_blank" : undefined}
      >
        // {label}
      </Link>
    </div>
  );
}

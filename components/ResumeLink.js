import Link from "next/link";

export default function ResumeLink() {
  return (
    <Link
      className="no-underline text-lg mx-4 hover:text-xl hover:drop-shadow-xs hover:transition-all"
      href="/documents/resume.pdf"
      rel="noreferrer"
      target="_blank"
    >
      // resume
    </Link>
  );
}

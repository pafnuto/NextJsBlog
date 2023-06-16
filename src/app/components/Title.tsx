import Link from "next/link";

export default function Title() {
  return (
    <h1 className="text-5xl text-center my-5">
      <Link href="/">Блог на Next JS</Link>
    </h1>
  );
}
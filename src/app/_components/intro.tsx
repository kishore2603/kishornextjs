// src/app/_components/intro.tsx
import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog
        </h1>
      </div>
      <nav className="flex items-center">
        <Link href="/">
          <span className="mr-4 cursor-pointer">Home</span>
        </Link>
        <Link href="/about">
          <span className="cursor-pointer">About</span>
        </Link>
      </nav>
    </header>
  );
}

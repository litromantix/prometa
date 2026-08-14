import Link from "next/link";   
import { Michroma } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
    return (
        <nav className="h-16 flex justify-between items-center px-15 py-5 bg-taupe-900">
            <Link href="/" className={michroma.className}>
                PROMETA
            </Link>
            <div className="flex gap-10">
                <Link href="/about">About us</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/refs">References</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}


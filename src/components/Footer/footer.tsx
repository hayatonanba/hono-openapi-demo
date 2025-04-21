import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    return (
      <footer className="bg-[#111827] text-white">
        <div className="container mx-auto flex justify-between items-center border-white border-b p-5">
          <h1>Navigation_bar</h1>
          <div className="flex gap-8">
            <Link href="https://github.com/hayatonanba"><SiGmail className="size-6 sm:size-8" /></Link>
            <Link href="https://github.com/hayatonanba"><FaGithub className="size-6 sm:size-8" /></Link>
            <Link href="https://x.com/hayatonanba0228"><FaXTwitter className="size-6 sm:size-8" /></Link>
          </div>
        </div>
        <small className="flex justify-center p-4">© 2024 My blog. All rights reserved.</small>
      </footer>
    );
}
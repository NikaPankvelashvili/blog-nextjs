import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" h-20 w-screen bg-black flex items-center justify-between px-20">
      <Link href={"/"}>
        <Image src={Logo} width={140} height={28} alt="logo" />
      </Link>
      <nav className="text-[#fff]">
        <Link href={"/"}>Home</Link>
        <Link className="ml-6" href={"/blog"}>
          Blog
        </Link>
        <Link className="ml-6" href={"/about"}>
          About Us
        </Link>
        <Link className="ml-6" href={"/contact"}>
          Contact Us
        </Link>
        <button className=" h-14 w-44 bg-[#fff] text-black font-bold ml-8 hover:opacity-90 ease-in-out">
          Subscribe
        </button>
      </nav>
    </header>
  );
}

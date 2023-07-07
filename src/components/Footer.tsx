import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";
import { BiLogoFacebookCircle } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className=" py-14 px-20 bg-black w-screen">
      <div className="flex items-center justify-between mb-14">
        <Image src={Logo} width={140} height={28} alt="logo" />
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
          <Link className="ml-6" href={"/privacy"}>
            Privacy Policy
          </Link>
        </nav>
      </div>
      <div className="w-full py-14 px-20 bg-dark_grey/25 flex items-baseline justify-between mb-12 ">
        <p className="font-bold text-[#fff] leading-10 text-4xl w-full ">
          Subscribe to our news letter to get latest updates and news
        </p>
        <form className="flex items-center w-full pl-16">
          <input
            type="email"
            placeholder="Enter Your Email"
            style={{ backgroundColor: "transparent" }}
            className="py-4 px-5 text-medium_grey border border-[#4C4C4C] font-normal outline-none w-full"
          />
          <button className="ml-6 h-14 w-44 bg-yellow text-black font-bold hover:opacity-90 ease-in-out">
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex items-center justify-between">
        <div className=" font-normal text-md text-[#fff]">
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="flex text-medium_grey text-xl">
          <a
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            target={"_blank"}
            className="mr-6"
          >
            <BiLogoFacebookCircle />
          </a>
          <a
            href="https://www.twitter.com/"
            rel="noopener noreferrer"
            target={"_blank"}
            className="mr-6"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target={"_blank"}
            className="mr-6"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

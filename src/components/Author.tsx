import { StaticImageData } from "next/image";
import { BiLogoFacebookCircle } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

type Props = {
  name: string;
  position: string;
  image: StaticImageData;
};

export default function Author({ name, position, image }: Props) {
  return (
    <div className="px-20 py-10 bg-light_grey hover:bg-light_yellow w-1/5 flex flex-col items-center">
      <img className="mb-5" src={image.src} />
      <h5 className="font-bold text-black text-lg">{name.split(" ")[0]}</h5>
      <h5 className="font-bold text-black text-lg">{name.split(" ")[1]}</h5>
      {/* <h5 className="font-bold text-black text-lg text-center">{name}</h5> */}
      <h6 className=" text-xs text-center text-medium_grey mb-5">{position}</h6>
      <div className="flex text-black text-xl">
        <a
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target={"_blank"}
          className="mr-3"
        >
          <BiLogoFacebookCircle />
        </a>
        <a
          href="https://www.twitter.com/"
          rel="noopener noreferrer"
          target={"_blank"}
          className="mr-3"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target={"_blank"}
          className="mr-3"
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
  );
}

import { StaticImageData } from "next/image";

type Props = {
  name: string;
  photo: StaticImageData;
  origin: string;
};

export default function SwiperComment({ name, photo, origin }: Props) {
  return (
    <div className="mb-12">
      <p className="font-bold text-black text-2xl mb-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex items-start">
        <img src={photo.src} width={"48px"} height={"48px"} className="mr-4" />
        <div>
          <h3 className=" text-black text-2xl font-bold">{name}</h3>
          <h5 className=" text-medium_grey">{origin}</h5>
        </div>
      </div>
    </div>
  );
}

import { PostType } from "@component/data/postsData";
import Image from "next/image";
import Link from "next/link";

export default function Post({ id, image, title, text, cat }: PostType) {
  return (
    <Link href={`/blog/${id}`}>
      <div className=" flex items-center mt-14">
        <div className=" w-[490px] h-[320px]">
          <Image src={image.src} alt={title} width={490} height={320} />
        </div>
        <div className="ml-8 w-1/2">
          <h5 className=" text-purlpe font-semibold mb-5 ">
            {cat.toLocaleUpperCase()}
          </h5>
          <h2 className=" text-black text-4xl font-bold mb-4">{title}</h2>
          <p className=" text-medium_grey">{text}</p>
        </div>
      </div>
    </Link>
  );
}

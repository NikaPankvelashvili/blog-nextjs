"use client";

import { useRef } from "react";
import SwiperType from "swiper";
import Button from "@component/components/Button";
import house from "../images/home.png";
import Image from "next/image";
import Link from "next/link";
import PostMinimalistic from "@component/components/PostMinimalistic";
import CategoriesDetailed from "@component/components/CategoriesDetailed";
import groupPhoto from "../images/group.png";
import Author from "@component/components/Author";
import Person1 from "../images/person1.png";
import Person2 from "../images/person2.png";
import Person3 from "../images/person3.png";
import Person4 from "../images/person4.png";
import featuredIn from "../images/Featured-in.png";
import logosWrapper from "../images/Logo-Wrapper.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperComment from "@component/components/SwiperComment";

export default function Home() {
  const swiperRef = useRef<SwiperType>();

  return (
    <main>
      <section className="bg-[url('../images/man-in-black.png')] h-[720px] w-full bg-no-repeat bg-cover pt-32 pl-20 text-[#fff] bg-[grey] bg-blend-multiply">
        <p className=" text-base font-semibold mb-6">
          Posted on <span className="text-bold">startup</span>
        </p>
        <p
          className=" text-6xl font-bold w-1/2 drop-shadow mb-6"
          style={{
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          Step-by-step guide to choosing great font pairs
        </p>
        <p className="mb-4">
          By <span className="text-yellow text-base">James West</span> | May 23,
          2022{" "}
        </p>
        <p className="w-[40%] mb-12">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button className="py-4 px-12 bg-yellow text-black font-bold">
          {"Read More >"}
        </button>
      </section>
      <section className=" py-32 px-20 flex justify-between items-baseline mb-32">
        <div className="w-[500px]">
          <h3 className="text-black font-bold text-4xl mb-8">Featured Post</h3>
          <Image
            className="mb-8"
            src={house}
            height={770}
            width={500}
            alt="house"
          />
          <p className=" font-medium text-dark_grey mb-4">
            By <span className=" text-purlpe">John Doe</span> l May 23, 2022
          </p>
          <h3 className="font-bold text-3xl text-black mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h3>
          <p className="text-medium_grey mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Button text="Read More >" />
        </div>

        <div className="w-[45%]">
          <div className="flex justify-between">
            <h3 className="text-black font-bold text-4xl mb-8">All Posts</h3>
            <Link href={"/blog"} className=" text-purlpe">
              View All
            </Link>
          </div>
          <PostMinimalistic
            title="8 Figma design systems that you can download for free today."
            author="John Deo"
            date="Aug 23, 2021"
          />
          <PostMinimalistic
            title="8 Figma design systems that you can download for free today."
            author="John Deo"
            date="Aug 23, 2021"
          />
          <PostMinimalistic
            title="8 Figma design systems that you can download for free today."
            author="John Deo"
            date="Aug 23, 2021"
          />
          <PostMinimalistic
            title="8 Figma design systems that you can download for free today."
            author="John Deo"
            date="Aug 23, 2021"
          />
        </div>
      </section>
      <section className=" px-20">
        <div className="mb-32">
          <div className="flex">
            <div className="h-6 w-1/5 bg-[#fff]"></div>
            <div className="h-6 w-3/5 bg-yellow"></div>
            <div className="h-6 w-1/5 bg-purlpe"></div>
          </div>
          <div className=" bg-lavender py-24 px-20 flex justify-between items-baseline">
            <div className="w-[40%]">
              <h5 className="text-black font-semibold mb-6">ABOUT US</h5>
              <h3 className="text-black font-bold text-4xl mb-4">
                We are a community of content writers who share their learnings
              </h3>
              <p className=" text-medium_grey mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href={"/about"} className=" text-purlpe font-bold text-lg">
                {"Read More >"}
              </Link>
            </div>
            <div className="w-[40%]">
              <h5 className="text-black font-semibold mb-6">OUR MISSION</h5>
              <h3 className="text-black font-bold text-3xl mb-4">
                Creating valuable content for creatives all around the world
              </h3>
              <p className=" text-medium_grey mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" text-black font-bold text-4xl text-center mb-12 ">
            Choose A Category
          </h2>
          <div className=" mb-32">
            <CategoriesDetailed />
          </div>
        </div>
      </section>
      <section className="px-20">
        <div className=" flex items-end relative mb-32">
          <Image
            src={groupPhoto}
            alt="group of people"
            sizes="100vw"
            style={{ width: "70%", height: "auto" }}
          />
          <div className=" p-20 ml-[50%] absolute w-1/2 h-2/3 bg-[#fff] ">
            <h4 className="font-semibold mb-6 text-black">WHY WE STARTED</h4>
            <h2 className="font-bold text-4xl text-black mb-4">
              It started out as a simple idea and evolved into our passion
            </h2>
            <p className=" text-medium_grey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Button text="Discover Our Story >" />
          </div>
        </div>

        <div className="mb-24">
          <h3 className="font-bold text-3xl text-black text-center mb-12">
            List of Authors
          </h3>
          <div className="flex justify-between">
            <Author
              image={Person1}
              name="Floyd Miles"
              position="Content Writer @Company"
            />
            <Author
              image={Person2}
              name="Dianne Russell"
              position="Content Writer @Company"
            />
            <Author
              image={Person3}
              name="Jenny Wilson"
              position="Content Writer @Company"
            />
            <Author
              image={Person4}
              name="Leslie Alexander"
              position="Content Writer @Company"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-24">
          <Image className=" select-none" src={featuredIn} alt="featured-in" />
          <Image
            className=" select-none"
            src={logosWrapper}
            alt="logos-wrapper"
          />
        </div>
      </section>
      <section className="px-20">
        <div className="py-20 px-28 bg-light_yellow flex mb-32">
          <div className="w-[40%]">
            <p className="text-black font-semibold mb-3">TESTIMONIALS</p>
            <h4 className="font-bold text-4xl mb-4">
              What people say about our blog
            </h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="w-[1px] h-3-4 border rounded border-[#6D6E76] ml-20 mr-24"></div>
          <div className="w-[60%]">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[]}
              loop={true}
              autoplay={{ delay: 1000 }}
              spaceBetween={50}
              slidesPerView={1}
            >
              <SwiperSlide>
                <SwiperComment
                  name="Floyd Miles"
                  origin="New York, USA"
                  photo={Person1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperComment
                  name="Dianne
                  Russell"
                  origin="New York, USA"
                  photo={Person2}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperComment
                  name="Jenny
                  Wilson"
                  origin="New York, USA"
                  photo={Person3}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperComment
                  name="Leslie
                  Alexander"
                  origin="New York, USA"
                  photo={Person4}
                />
              </SwiperSlide>
            </Swiper>
            <div className="w-full flex justify-between">
              <div className="flex items-center justify-center p-4 bg-yellow rounded-full">
                <button
                  className="text-black text-3xl font-bold  "
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <GrFormPreviousLink />
                </button>
              </div>
              <div className="flex items-center justify-center p-4 bg-yellow rounded-full">
                <button
                  className="text-black text-3xl font-bold  "
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <GrFormNextLink />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mb-32">
          <h2 className=" w-1/3 font-bold text-4xl text-black mb-4 text-center">
            Join our team to be a part of our story
          </h2>
          <p className="text-medium_grey w-[30%] text-center mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button text="Join Now" />
        </div>
      </section>
    </main>
  );
}

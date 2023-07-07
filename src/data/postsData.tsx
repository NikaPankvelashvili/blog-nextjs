import { StaticImageData } from "next/image";
import { CategoryType } from "@component/components/CategoriesDetailed";
import post1 from "../images/post1.png";
import post2 from "../images/post2.png";
import post3 from "../images/post3.png";
import post4 from "../images/post4.png";

export type PostType = {
  id: number;
  image: StaticImageData;
  title: string;
  text: string;
  cat: CategoryType;
};

export const data: PostType[] = [
  {
    id: 1,
    image: post1,
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
  },
  {
    id: 2,
    image: post2,
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Business",
  },
  {
    id: 3,
    image: post3,
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
  },
  {
    id: 4,
    image: post4,
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Technology",
  },
  {
    id: 5,
    image: post1,
    title: "Font sizes in UI design: The complete guide to follow",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Economy",
  },
  {
    id: 6,
    image: post2,
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
  },
  {
    id: 7,
    image: post4,
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Business",
  },
  {
    id: 8,
    image: post3,
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
  },
  {
    id: 9,
    image: post1,
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Technology",
  },
  {
    id: 10,
    image: post3,
    title: "Font sizes in UI design: The complete guide to follow",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Economy",
  },
  {
    id: 11,
    image: post2,
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
  },
  {
    id: 12,
    image: post4,
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Business",
  },
  {
    id: 13,
    image: post3,
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
  },
  {
    id: 14,
    image: post4,
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Technology",
  },
  {
    id: 15,
    image: post1,
    title: "Font sizes in UI design: The complete guide to follow",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Economy",
  },
];

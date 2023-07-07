import { StaticImageData } from "next/image";
import { CategoryType } from "@component/components/CategoriesDetailed";
import post1 from "../images/post1.png";
import post2 from "../images/post2.png";
import post3 from "../images/post3.png";
import post4 from "../images/post4.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";

export type PostType = {
  id: number;
  image: StaticImageData;
  title: string;
  text: string;
  cat: CategoryType;
  author?: string;
  authorImg?: StaticImageData;
  postedOn?: string;
};

export const data: PostType[] = [
  {
    id: 1,
    image: post1,
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
    authorImg: person1,
    author: "Floyd Miles",
    postedOn: "26th January 2022",
  },
  {
    id: 2,
    image: post2,
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Business",
    authorImg: person2,
    author: "Dianne Russell",
    postedOn: "27th February 2023",
  },
  {
    id: 3,
    image: post3,
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
    authorImg: person3,
    author: "Jenny Wilson",
    postedOn: "15th March 2023",
  },
  {
    id: 4,
    image: post4,
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Technology",
    authorImg: person4,
    author: "Leslie Alexander",
    postedOn: "31st January 2023",
  },
  {
    id: 5,
    image: post1,
    title: "Font sizes in UI design: The complete guide to follow",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Economy",
    authorImg: person1,
    author: "Floyd Miles",
    postedOn: "26th January 2022",
  },
  {
    id: 6,
    image: post2,
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
    authorImg: person2,
    author: "Dianne Russell",
    postedOn: "27th February 2023",
  },
  {
    id: 7,
    image: post4,
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Business",
    authorImg: person3,
    author: "Jenny Wilson",
    postedOn: "15th March 2023",
  },
  {
    id: 8,
    image: post3,
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
    authorImg: person4,
    author: "Leslie Alexander",
    postedOn: "31st January 2023",
  },
  {
    id: 9,
    image: post1,
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Technology",
    authorImg: person1,
    author: "Floyd Miles",
    postedOn: "26th January 2022",
  },
  {
    id: 10,
    image: post3,
    title: "Font sizes in UI design: The complete guide to follow",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Economy",
    authorImg: person2,
    author: "Dianne Russell",
    postedOn: "27th February 2023",
  },
  {
    id: 11,
    image: post2,
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
    authorImg: person3,
    author: "Jenny Wilson",
    postedOn: "15th March 2023",
  },
  {
    id: 12,
    image: post4,
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Business",
    authorImg: person4,
    author: "Leslie Alexander",
    postedOn: "31st January 2023",
  },
  {
    id: 13,
    image: post3,
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Startup",
    authorImg: person1,
    author: "Floyd Miles",
    postedOn: "26th January 2022",
  },
  {
    id: 14,
    image: post4,
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Technology",
    authorImg: person2,
    author: "Dianne Russell",
    postedOn: "27th February 2023",
  },
  {
    id: 15,
    image: post1,
    title: "Font sizes in UI design: The complete guide to follow",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    cat: "Economy",
    authorImg: person3,
    author: "Jenny Wilson",
    postedOn: "15th March 2023",
  },
];

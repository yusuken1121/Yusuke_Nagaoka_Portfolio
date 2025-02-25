"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { BsArrowRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useTranslations } from "next-intl";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

// const projects = [
//   {
//     num: "01",
//     category: "full-stack",
//     title: "Vancouver RoomFinder",
//     description:
//       "I’m excited to share that I have built a website that introduces shared housing in Canada! From requirement gathering to final implementation, I handled every step of this project. The website provides easy navigation and valuable information for people looking for shared accommodations in Canada.",
//     stack: [
//       { name: "Next.js" },
//       { name: "TypeScript" },
//       { name: "Notion" },
//       { name: "Shadcn UI" },
//       { name: "Tailwind" },
//       { name: "Express" },
//     ],
//     image: "/Van_ouchi.png",
//     live: "https://www.van-ouchi.com/properties",
//     github: "",
//   },
//   {
//     num: "02",
//     category: "full-stack",
//     title: "Social Media Clone",
//     description:
//       "This project aims to create a unique social media platform by integrating essential features from modern social networking sites and major services. I started with basic functionalities such as authentication and user posts. Although the project is still in progress, I plan to expand its features and enhance its usability in the future.",
//     stack: [
//       { name: "Next.js" },
//       { name: "TypeScript" },
//       { name: "PostgreSQL" },
//       { name: "Prisma" },
//       { name: "Shadcn UI" },
//       { name: "TailwindCSS" },
//       { name: "Express" },
//     ],
//     image: "SocialMediaClone.png",
//     live: "https://social-media-app-next-js-ten.vercel.app",
//     github: "https://github.com/yusuken1121/SocialMediaApp_NextJs",
//   },
//   {
//     num: "03",
//     category: "frontend",
//     title: "project 3",
//     description: "",
//     stack: [{ name: "Next.js" }, { name: "Css 3" }],
//     image: "",
//     live: "",
//     github: "",
//   },
// ];
export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

const Work = () => {
  const t = useTranslations();

  // const projects: Project[] = JSON.parse(t("Projects")); // 多言語化されたプロジェクトデータを取得
  const projects = t.raw("Projects") as Project[];

  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              <h3 className="text-2xl text-accent text-shadow font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              {/* description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, idx) => {
                  return (
                    <li key={idx} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {idx !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="h-auto relative group flex justify-between bg-pink-50/20">
                      {/* overlay */}
                      {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                      {/* image */}
                      {/* <div className="relative w-full h-full"> */}
                      <AspectRatio
                        ratio={16 / 9}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.image}
                          fill
                          alt="project"
                          unoptimized={true}
                          className="object-cover"
                        />
                      </AspectRatio>
                    </div>
                    {/* </div> */}
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all shadow-custom"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

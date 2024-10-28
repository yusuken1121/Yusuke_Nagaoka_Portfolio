"use client";
// メンテ方法
// 1. 追加方法
// ja, en jsonに配列で書く
// iconを追加する場合は、iconのimportをし、iconMapにも追加する

import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMongodb,
  SiShadcnui,
  SiMui,
} from "react-icons/si";

export interface AboutType {
  title: string;
  description: string;
  info: InfoItem[];
}
export interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

export interface ExperienceType {
  title: string;
  description: string;
  items: {
    company: string;
    position: string;
    employmentType?: string;
    country: string;
    duration: string;
    homepageUrl?: string; // for future
  }[];
}

export interface EducationsType {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
}
export interface EducationItem {
  school: string;
  program: string;
  country: string;
  duration: string;
}

export interface SkillsType {
  title: string;
  description: string;
  SkillList: SkillItem[];
}
export interface SkillItem {
  name: string;
  icon: string; // アイコン名は文字列で保存
}

const iconMap: { [key: string]: JSX.Element } = {
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiMongodb: <SiMongodb />,
  SiPostgresql: <SiPostgresql />,
  SiExpress: <SiExpress />,
  SiNodedotjs: <SiNodedotjs />,
  SiTailwindcss: <SiTailwindcss />,
  SiShadcnui: <SiShadcnui />,
  SiMui: <SiMui />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslations } from "next-intl";

const Resume = () => {
  const t = useTranslations("Resume");
  const about = t.raw("About")[0] as AboutType;
  const experiences = t.raw("Experiences")[0] as ExperienceType;
  const educations = t.raw("Educations")[0] as EducationsType;
  const skills = t.raw("Skills")[0] as SkillsType;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{experiences.title}</TabsTrigger>
            <TabsTrigger value="education">{educations.title}</TabsTrigger>
            <TabsTrigger value="skills">{skills.title}</TabsTrigger>
            <TabsTrigger value="about">{about.title}</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#23232c] h-[196px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[30px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          {item.employmentType && (
                            <p className="text-white/80 min-h-[40px]">
                              - {item.employmentType}
                            </p>
                          )}
                          <p className="text-white/60">{item.country}</p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educations.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {educations.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educations.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#23232c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.program}
                          </h3>
                          <p className="text-white/60">{item.country}</p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.school}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.SkillList.map((skill, idx) => {
                      return (
                        <li key={idx}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#23232c] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {iconMap[skill.icon]}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-white">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

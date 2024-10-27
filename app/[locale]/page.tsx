import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FiDownload } from "react-icons/fi";
// import * as motion from "framer-motion/client";
// import { motion } from "framer-motion";

// const text = "Full-Stack Developer".split("");

const Home = () => {
  const t = useTranslations("Home");

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-8 xl:pt-24 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none mt-5">
            <span>Hello, I&apos;m</span>

            <h1 className="h1 mb-6">
              <span>
                Yusuke Nagaoka
                <br />
              </span>
              <span className="text-accent text-shadow">
                Full-Stack Developer
              </span>
              {/* {text.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.05,
                      delay: 1 + i * 0.05,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2,
                    },
                  }}
                  style={{ letterSpacing: "normal" }}
                  className="text-accent text-shadow"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))} */}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {t("description")}
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 shadow-custom"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 border border-accent shadow-custom rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

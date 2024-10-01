import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div className="relative w-[230px] h-[230px] xl:w-[398px] xl:h-[398px] mix-blend-lighten flex justify-center items-center">
        {/* circle (背景の円) */}
        <motion.svg
          className="absolute w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4,250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* photo (写真) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute w-5/6 h-5/6"
        >
          <Image
            alt="profile"
            src="/profileImg_remove_bg.png"
            priority={true}
            quality={100}
            fill
            className="object-contain"
            unoptimized={true}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

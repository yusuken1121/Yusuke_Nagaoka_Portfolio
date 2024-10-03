"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    href: "",
    title: "Web Development",
    description: "description",
  },
  {
    num: "02",
    href: "",
    title: "Web Development",
    description: "description",
  },
  {
    num: "03",
    href: "",
    title: "Web Development",
    description: "description",
  },
  {
    num: "04",
    href: "",
    title: "Web Development",
    description: "description",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-2">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover group-hover:text-shadow transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent group-hover:shadow-custom transition-all duration-500 rotate-45 hover:-rotate-0"
                    href={service.href}
                  >
                    <BsArrowRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                  group-hover:text-accent group-hover:text-shadow transition-all duration-500"
                >
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

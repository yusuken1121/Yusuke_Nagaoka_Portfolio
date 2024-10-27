"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone-Canada",
//     description: "(+1) 604 726 0374",
//   },
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone-Japan",
//     description: "(+81) 090 6189 1996",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "yusukechopin11@gmail.com",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     title: "Address",
//     description: "Vancouver or Tokyo",
//   },
// ];

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface DescriptionType {
  state: string;
  description: string;
}
interface InfoType {
  icon: string;
  title: string;
  description: string;
}
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  content: string;
  button: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  FaPhoneAlt: <FaPhoneAlt />,
  FaEnvelope: <FaEnvelope />,
  FaMapMarkerAlt: <FaMapMarkerAlt />,
};

const Contact = () => {
  const t = useTranslations("Contact");
  const descriptions = t.raw("Description")[0] as DescriptionType;
  const info = t.raw("Info") as InfoType[];
  const contactForm = t.raw("Form")[0] as ContactForm;
  console.log(contactForm);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent text-shadow">
                {/* Let&apos;s work together */}
                {descriptions.state}
              </h3>
              <p className="text-white/60">{descriptions.description}</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" /> */}
                <Input type="text" placeholder={contactForm.name} />
                <Input type="email" placeholder={contactForm.email} />
                <Input type="phone" placeholder={contactForm.phone} />
              </div>

              {/* select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Develop</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select> */}

              {/* textarea */}
              <Textarea
                className="h-[200px] text-white"
                placeholder={contactForm.content}
              />
              {/* btn */}
              <Button size="md" className="max-w-40 shadow-custom">
                {contactForm.button}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, idx) => {
                return (
                  <li key={idx} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{iconMap[item.icon]}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

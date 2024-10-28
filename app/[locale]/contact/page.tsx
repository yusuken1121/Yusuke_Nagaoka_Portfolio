"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

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
  subject: string;
  content: string;
  button: string;
}

interface ErrorMessageType {
  name: string;
  subject: string;
  email: string;
  content: string;
}

interface ToastMessageType {
  success: string;
  fail: string;
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
  const errorMessage = t.raw("Error")[0] as ErrorMessageType;
  const toastMessage = t.raw("Toast")[0] as ToastMessageType;
  const [loading, setLoading] = useState<boolean>(false);

  const formSchema = z.object({
    name: z.string().min(1, errorMessage.name).max(50),
    subject: z.string().min(1, errorMessage.subject).max(50),
    email: z.string().email(errorMessage.email),
    content: z.string().min(1, errorMessage.content),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast.success(`${toastMessage.success}`, { position: "top-right" });
        form.reset(); // フォームリセット
      } else {
        const result = await response.json();
        toast.error(`${toastMessage.fail}`, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("予期せぬエラーが発生しました。", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  }

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
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-secondDark rounded-xl"
            >
              <h3 className="text-4xl text-accent text-shadow">
                {/* Let&apos;s work together */}
                {descriptions.state}
              </h3>
              <p className="text-white/60">{descriptions.description}</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" /> */}
                <div className="flex flex-col gap-2">
                  <Input
                    type="text"
                    placeholder={contactForm.name}
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <span className=" text-accent text-shadow text-xs">
                      {form.formState.errors.name.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    type="text"
                    placeholder={contactForm.subject}
                    {...form.register("subject")}
                  />
                  {form.formState.errors.subject && (
                    <span className=" text-accent text-shadow text-xs">
                      {form.formState.errors.subject.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    type="email"
                    placeholder={contactForm.email}
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <span className=" text-accent text-shadow text-xs">
                      {form.formState.errors.email.message}
                    </span>
                  )}
                </div>
                {/* <Input type="phone" placeholder={contactForm.phone} /> */}
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
              <div className="flex flex-col gap-2">
                <Textarea
                  className="h-[200px] text-white"
                  placeholder={contactForm.content}
                  {...form.register("content")}
                />
                {form.formState.errors.content && (
                  <span className=" text-accent text-shadow text-xs">
                    {form.formState.errors.content.message}
                  </span>
                )}
              </div>

              {/* btn */}
              <Button
                size="md"
                type="submit"
                className="max-w-40 shadow-custom"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-black" />
                ) : (
                  contactForm.button
                )}
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

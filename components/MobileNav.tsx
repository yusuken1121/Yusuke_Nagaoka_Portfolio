"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { useTranslations } from "next-intl";

const MobileNav = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");

  const links = [
    { name: t("home"), path: "/" },
    { name: t("services"), path: "/services" },
    { name: t("resume"), path: "/resume" },
    { name: t("work"), path: "/work" },
    { name: t("contact"), path: "/contact" },
  ];
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Yusuke<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, idx) => {
            return (
              <Link
                href={link.path}
                key={idx}
                className={`${
                  link.path === pathname &&
                  "text-accent text-shadow border-b-2 border-accent"
                }  text-xl capitalize hover:text-accent hover:text-shadow transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

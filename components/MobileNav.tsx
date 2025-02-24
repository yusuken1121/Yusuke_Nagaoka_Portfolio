"use client";

import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Header");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  // Toggle the open state
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  // Determine the opposite locale
  const otherLocale = locale === "ja" ? "en" : "ja";

  // Remove the current locale prefix from the pathname
  const pathWithoutLocale =
    pathname.replace(new RegExp(`^/${locale}`), "") || "/";

  // Switch language by updating the locale in the path
  const switchLocale = (newLocale: string) => {
    router.push(`/${newLocale}${pathWithoutLocale}`);
    toggleOpen();
  };

  const links = [
    { name: t("home"), path: `/${locale}` },
    { name: t("resume"), path: `/${locale}/resume` },
    { name: t("work"), path: `/${locale}/work` },
    { name: t("contact"), path: `/${locale}/contact` },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={toggleOpen}>
            <h1 className="text-4xl font-semibold">
              Yusuke<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              onClick={toggleOpen}
              className={`${
                link.path === pathname &&
                "text-accent text-shadow border-b-2 border-accent"
              } text-xl capitalize hover:text-accent hover:text-shadow transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <p
            onClick={() => switchLocale(otherLocale)}
            className="text-xl hover:text-accent hover:text-shadow transition-all cursor-pointer"
          >
            {locale === "ja" ? "English🇨🇦" : "日本語🇯🇵"}
          </p>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

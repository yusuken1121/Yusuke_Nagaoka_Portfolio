"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Nav = () => {
  const pathName = usePathname();
  const t = useTranslations("Header");

  const locale = useLocale();
  const path = locale === "ja" ? "ja" : locale === "en" ? "en" : "/";

  const links = [
    { name: t("home"), path: `/${path}` },
    // { name: t("services"), path: `/${path}/services` },
    { name: t("resume"), path: `/${path}/resume` },
    { name: t("work"), path: `/${path}/work` },
    { name: t("contact"), path: `/${path}/contact` },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => {
        return (
          <Link
            href={link.path}
            key={idx}
            className={`${
              link.path === pathName &&
              "text-accent text-shadow border-b-2 border-accent"
            } capitalize font-medium hover:text-accent hover:text-shadow transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

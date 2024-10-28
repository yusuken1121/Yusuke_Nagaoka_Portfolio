"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Nav = () => {
  const pathName = usePathname();
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();

  // Determine the opposite locale
  const otherLocale = locale === "ja" ? "en" : "ja";

  // Remove the current locale prefix from the pathname
  const pathNameWithoutLocale =
    pathName.replace(new RegExp(`^/${locale}`), "") || "/";

  // Function to switch locales
  const switchLocale = (newLocale: string) => {
    const newPath = `/${newLocale}${pathNameWithoutLocale}`;
    router.push(newPath); // 修正: オプションではなくパスにロケールを含める
  };

  const links = [
    { name: t("home"), path: `/${locale}` },
    // { name: t("services"), path: `/${locale}/services` },
    { name: t("resume"), path: `/${locale}/resume` },
    { name: t("work"), path: `/${locale}/work` },
    { name: t("contact"), path: `/${locale}/contact` },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link, idx) => (
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
      ))}
      <p
        onClick={() => switchLocale(otherLocale)}
        className="capitalize font-medium hover:text-accent hover:text-shadow transition-all cursor-pointer"
      >
        {locale === "ja" ? "English🇨🇦" : "日本語🇯🇵"}
      </p>
    </nav>
  );
};

export default Nav;

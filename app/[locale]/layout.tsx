import type { Metadata } from "next";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/sonner";
import { getTranslations } from "next-intl/server";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: ["en", "ja"] };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    icons: "../../public/pianoChihuahua_black.jpg",
    verification: {
      google: (
        <meta
          name="google-site-verification"
          content="WX3Ll78xBp8NUIfzF8QgzeBq8mQO381pNOJH_ALt078"
        />
      ),
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={jetbrainsMono.className}>
        <NextIntlClientProvider messages={messages}>
          <Toaster
            toastOptions={{
              duration: 5000,
              classNames: {
                error:
                  "border-l-4 border-red-500 bg-secondDark text-white border-0",
                success:
                  "border-l-4 border-accent text-shadow bg-secondDark text-white border-0",
                warning:
                  "border-l-4 border-yellow-500 bg-secondDark text-white border-0",
                info: "border-l-4 border-blue-500 bg-secondDark text-white border-0",
              },
            }}
          />
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

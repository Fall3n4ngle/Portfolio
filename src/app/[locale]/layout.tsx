import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers";
import { Header } from "@/sections/Header";
import { ScrollToTop } from "@/ui";
import { ReactElement } from "react";
import { getScopedI18n, getStaticParams } from "@/lib/i18n/server";
import { setStaticParamsLocale } from "next-international/server";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  setStaticParamsLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers locale={locale}>
          <div className="relative flex min-h-screen flex-col overflow-hidden ">
            <Header />
            <main className="grow">{children}</main>
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const t = await getScopedI18n("metadata");

  return {
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    title: t("title"),
    description: t("description"),
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: "/",
      languages: {
        uk: `https://${process.env.VERCEL_URL}/uk`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      authors: {
        name: "Oleksandr Oliiar",
      },
    },
    authors: {
      name: "Oleksandr Oliiar",
    },
  } as Metadata;
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#ea580c" },
  ],
  colorScheme: "dark light",
};

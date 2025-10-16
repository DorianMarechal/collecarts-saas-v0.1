import type { Metadata } from "next";
import { Exo_2, Rubik } from "next/font/google";
import "../globals.css";
import { getCurrentLocale } from "../../locales/server";
import { ThemeProvider } from "@/components/theme-provider";
import SubLayout from "./client/layout";

const Exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

const RubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CollecArts",
  description: "The ultimate platform to manage and showcase your art collection.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getCurrentLocale();

  return (
    <html lang={locale || "en"} suppressHydrationWarning>
      <body
        className={`${Exo2.variable} ${RubikFont.variable} antialiased`}
      >
        <SubLayout params={Promise.resolve({ locale: locale || "en" })}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SubLayout>
      </body>
    </html>
  );
}

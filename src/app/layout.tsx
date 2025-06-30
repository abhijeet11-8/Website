import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Gitfolio by Alex Doe",
  description: "A personal portfolio, blog, and update feed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${roboto.variable} ${lora.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Toaster />
      </body>
    </html>
  );
}

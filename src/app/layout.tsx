import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
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
      <body className="font-sans antialiased">
        <Header />
        <main className="container mx-auto max-w-4xl p-4 md:p-8 animate-fade-in">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}

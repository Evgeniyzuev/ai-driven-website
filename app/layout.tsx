import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuButton from "./components/MenuButton";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "WeAi - Business of the Future",
  description: "Innovative AI-driven business model for solving global social problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Определяем язык на основе текущего URL
  const isEnglish = typeof window !== 'undefined' && window.location.pathname.startsWith('/en');
  
  return (
    <html lang={isEnglish ? 'en' : 'ru'}>
      <body className={`${inter.className} font-sans`}>
        <MenuButton />
        {children}
      </body>
    </html>
  );
}

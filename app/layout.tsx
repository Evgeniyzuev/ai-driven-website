// 'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
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
  return (
    <html>
      <body className={`${inter.className} font-sans`}>
        <LanguageProvider>
          <MenuButton />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

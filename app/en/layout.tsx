import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuButton from "../components/MenuButton";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ProfitShareAI - Бизнес будущего",
  description: "Инновационная бизнес-модель под управлением искусственного интеллекта для решения глобальных проблем общества",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} font-sans`}>
        <MenuButton />
        {children}
      </body>
    </html>
  );
}

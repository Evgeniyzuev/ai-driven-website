'use client';

import HomePage from "./components/HomePage";
import { useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  return <HomePage language={language} setLanguage={setLanguage} />;
}

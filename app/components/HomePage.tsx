'use client';

import { useState } from "react";
import Image from "next/image";
import CardSection from "./CardSection";
import { texts } from "../constants/texts";

interface HomePageProps {
  language: 'en' | 'ru';
  setLanguage: (lang: 'en' | 'ru') => void;
}

interface Card {
  type: string;
  image: string;
  alt: string;
  description: string | React.ReactNode;
}

export default function HomePage({ language, setLanguage }: HomePageProps) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const t = texts[language];

  return (
    <main className="min-h-screen">
      {/* blessDisaster section */}
      <CardSection
        title={t.blessDisaster.title}
        subtitle={t.blessDisaster.subtitle}
        cards={t.blessDisaster.cards}
        onCardClick={setSelectedCard}
        showTooltipOnMiddleCard={true}
      />

      {/* upgrade life section */}
      <CardSection
        title={t.upgradeLife.title}
        subtitle={t.upgradeLife.subtitle}
        cards={t.upgradeLife.cards}
        onCardClick={setSelectedCard}
      />

      {/* Opportunities section */}
      <CardSection
        title={t.opportunities.title}
        subtitle={t.opportunities.subtitle}
        cards={t.opportunities.cards}
        onCardClick={setSelectedCard}
      />

      {/* Problems section */}
      <CardSection
        title={t.problems.title}
        subtitle={t.problems.subtitle}
        cards={t.problems.cards}
        onCardClick={setSelectedCard}
      />

      {/* Modal */}
      {selectedCard && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-0 md:p-4 z-50"
          onClick={() => setSelectedCard(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg p-0 max-w-2xl w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 z-10 bg-white dark:bg-gray-700 rounded-full p-1 shadow-md"
              onClick={() => setSelectedCard(null)}
              aria-label={language === 'ru' ? 'Закрыть' : 'Close'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 id="modal-title" className="text-2xl font-bold mb-0 p-4 pt-3">{selectedCard.alt}</h3>
            <div className="relative aspect-video px-2 md:px-4 w-full">
              <div className="absolute inset-2">
                <Image
                  src={`/${selectedCard.image}`}
                  alt={selectedCard.alt}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                {selectedCard.description}
              </p>
              
              <div className="flex justify-center mt-6">
                <a
                  href="https://t.me/WeAiBot_bot/WeAi?startapp=6251757715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-animated animate-gradient text-white rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  aria-label={language === 'ru' ? 'Начать использовать' : 'Start using'}
                >
                  {language === 'ru' ? 'Начать' : 'Start'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 
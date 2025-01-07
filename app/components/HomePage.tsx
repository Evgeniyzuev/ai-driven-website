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
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 p-4 md:p-0">{selectedCard.alt}</h3>
            <div className="relative aspect-video w-full">
              <Image
                src={`/${selectedCard.image}`}
                alt={selectedCard.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 p-4 md:p-0 mt-4 whitespace-pre-wrap">
              {selectedCard.description}
            </p>
          </div>
        </div>
      )}
    </main>
  );
} 
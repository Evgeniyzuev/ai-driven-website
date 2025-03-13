'use client';

import React from 'react';
import Image from 'next/image';

interface Card {
  type: string;
  image: string;
  alt: string;
  description: string | React.ReactNode;
}

interface CardSectionProps {
  title: string;
  subtitle: string | string[];
  cards: Card[];
  onCardClick: (card: Card) => void;
}

export default function CardSection({
  title,
  subtitle,
  cards,
  onCardClick,
}: CardSectionProps) {
  return (
    <section className="card-section py-8 md:py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
          {Array.isArray(subtitle) 
            ? subtitle.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>) 
            : subtitle
          }
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.alt}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => onCardClick(card)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onCardClick(card);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Открыть карточку: ${card.alt}`}
            >
              <div className="aspect-video relative">
                <Image
                  src={`/${card.image}`}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-4">
                  <h3 className="font-semibold text-lg text-white mb-2">{card.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
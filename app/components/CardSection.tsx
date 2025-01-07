'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Tooltip from "./Tooltip";

interface Card {
  type: string;
  image: string;
  alt: string;
  description: string;
}

interface CardSectionProps {
  title: string;
  subtitle: string[];
  cards: Card[];
  onCardClick: (card: Card) => void;
}

export default function CardSection({ title, subtitle, cards, onCardClick }: CardSectionProps) {
  const [hasClicked, setHasClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Показываем подсказку через 2 секунды после загрузки
    const tooltipTimer = setTimeout(() => {
      if (!hasClicked) {
        setShowTooltip(true);
      }
    }, 2000);

    return () => clearTimeout(tooltipTimer);
  }, [hasClicked]);

  const handleCardClick = (card: Card) => {
    setHasClicked(true);
    setShowTooltip(false);
    onCardClick(card);
  };

  return (
    <section className="py-6 px-2">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-0">{title}</h2>
      <p className="text-lg md:text-2xl text-center mb-4 max-w-2xl mx-auto">
        {subtitle.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <div className="grid grid-cols-3 gap-[1px] bg-gray-200 dark:bg-gray-700">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="aspect-square bg-white dark:bg-gray-800 cursor-pointer relative"
            onClick={() => handleCardClick(card)}
          >
            {index === 1 && <Tooltip isVisible={showTooltip} />}
            <div className="relative w-full h-full">
              <Image
                src={`/${card.image}`}
                alt={card.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-2">
                <h3 className="text-sm md:text-2xl font-bold text-white text-center w-full">{card.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
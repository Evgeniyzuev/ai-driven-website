'use client';
import { useState } from "react";
import Image from "next/image";
import CardSection from "./components/CardSection";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<(typeof problems[0] | typeof opportunities[0]) | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="min-h-1/4 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-background to-blue-50 dark:to-blue-950">
        <h1 className="text-4xl md:text-6xl font-bold mb-0">
        Ai меняет жизнь
        </h1>
        <p className="text-xl md:text-2xl mb-2 max-w-2xl">
          Благо или катастрофа?
        </p>
        <p className="text-sm md:text-lg mb-0 max-w-2xl">
        Основной доход для большинства людей - зарплата.<br></br> 
        Ai автоматизирует бизнес и сокращает рабочие места.<br></br>
        Бизнес перекачивает деньги от покупателей к владельцам.<br></br> 
        Без работы люди не могут покупать также как раньше.<br></br>
        Они меньше участвуют в экономике, а бизнес теряет покупателей. <br></br>

        </p>
      </section>

      {/* Opportunities section */}
      <CardSection
        title="Новые возможности"
        subtitle={[
          "Используй их сейчас!"
        ]}
        cards={opportunities}
        onCardClick={setSelectedCard}
      />

      {/* Problems section */}
      <CardSection
        title="Глобальные проблемы"
        subtitle={[
          "Ai может их решить... или сделать хуже",
        ]}
        cards={problems}
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
            <p className="text-gray-600 dark:text-gray-300 p-4 md:p-0 mt-4">
              {selectedCard.description}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

const problems = [
  {
    type: "image",
    image: "replace-human.jpg",
    alt: "Безработица",
    description: "Искусственный интеллект может автоматизировать многие рабочие места, что может привести к временной безработице. Однако он также создает новые возможности и профессии."
  },
  {
    type: "image",
    image: "pollution.jpg",
    alt: "Загрязнение",
    description: "Искусственный интеллект может помочь в решении проблемы загрязнения, но также может создать новые проблемы."
  },
  {
    type: "image",
    image: "poverty.webp",
    alt: "Бедность",
    description: "Искусственный интеллект может помочь в решении проблемы бедности, но также может создать новые проблемы."
  },
  // Добавьте остальные проблемы
];

const opportunities = [
  {
    type: "image",
    image: "goals.jpg",
    alt: "Цели",
    description: "Новые возможности для достижения целей"
  },
  {
    type: "image",
    image: "income.jpg",
    alt: "Доход",
    description: "Новые возможности для заработка"
  },
  {
    type: "image",
    image: "shopping.jpg",
    alt: "Покупки",
    description: "Новые возможности для покупок"
  },
  {
    type: "image",
    image: "investments.jpg",
    alt: "Инвестиции",
    description: "Новые возможности для инвестиций"
  },
  {
    type: "image",
    image: "business.jpg",
    alt: "Бизнес",
    description: "Новые возможности для бизнеса"
  },
  {
    type: "image",
    image: "self-realization.jpg",
    alt: "Самореализация",
    description: "Новые возможности для самореализации"
  },
];
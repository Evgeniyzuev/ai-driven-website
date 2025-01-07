'use client';
import { useState } from "react";
import Image from "next/image";
import CardSection from "./components/CardSection";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<(typeof problems[0] | typeof opportunities[0]) | null>(null);

  return (
    <main className="min-h-screen">


      {/* Problems section */}
      <CardSection
        title="Ai меняет жизнь"
        subtitle={[
          "Благо или катастрофа?",
        ]}
        cards={blessDisaster}
        onCardClick={setSelectedCard}
      />

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

const blessDisaster = [
  {
    type: "image",
    image: "bless.jpg",
    alt: "Благословение",
    description: "Искусственный интеллект может автоматизировать многие рабочие места, что может привести к временной безработице. Однако он также создает новые возможности и профессии."
  },
  {
    type: "image",
    image: "choice.jpg",
    alt: "Выбирай👆",
    description: "Искусственный интеллект может автоматизировать многие рабочие места, что может привести к временной безработице. Однако он также создает новые возможности и профессии."
  },
  {
    type: "image",
    image: "disaster.jpg",
    alt: "Катастрофа",
    description: "Основной доход для большинства людей - зарплата. Искусственный интеллект автоматизирует бизнес и сокращает рабочие места. Бизнес перекачивает деньги от покупателей к владельцам. Без работы люди не могут покупать также как раньше. Они меньше участвуют в экономике, а бизнес теряет покупателей. Но бизнес растет и развивается за счет расходов покупателей. Люди могут выбирать где покупать и какой бизнес поддерживать. В интересах покупателя, чтобы рост бизнеса, который происходит за счет расходов этого покупателя, принадлежал ему самому, а не присваивался другими владельцами."
  },

]

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
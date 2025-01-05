'use client';
import { useState } from "react";
import Image from "next/image";
import CardSection from "../components/CardSection";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<(typeof problems[0] | typeof opportunities[0]) | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="min-h-1/4 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-background to-blue-50 dark:to-blue-950">
        <h1 className="text-4xl md:text-6xl font-bold mb-0">
          AI is changing life
        </h1>
        <p className="text-xl md:text-2xl mb-2 max-w-2xl">
          Blessing or disaster?
        </p>
        <p className="text-sm md:text-lg mb-0 max-w-2xl">
          The main income for most people is salary.<br></br>
          AI automates business and reduces jobs.<br></br>
          Business transfers money from customers to owners.<br></br>
          Without work, people can't buy as they used to.<br></br>
          They participate less in the economy, and business loses customers.<br></br>
        </p>
      </section>

      {/* Opportunities section */}
      <CardSection
        title="New Opportunities"
        subtitle={[
          "Use them now!"
        ]}
        cards={opportunities}
        onCardClick={setSelectedCard}
      />

      {/* Problems section */}
      <CardSection
        title="Global Problems"
        subtitle={[
          "AI can solve them... or make them worse"
        ]}
        cards={problems}
        onCardClick={setSelectedCard}
      />

      {/* Modal */}
      {selectedCard && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedCard.alt}</h3>
            <div className="relative aspect-video mb-4">
              <Image
                src={`/${selectedCard.image}`}
                alt={selectedCard.alt}
                fill
                className="object-cover rounded"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300">
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
    alt: "Unemployment",
    description: "Artificial Intelligence can automate many jobs, which may lead to temporary unemployment. However, it also creates new opportunities and professions."
  },
  {
    type: "image",
    image: "pollution.jpg",
    alt: "Pollution",
    description: "Artificial Intelligence can help solve pollution problems, but it may also create new ones."
  },
  {
    type: "image",
    image: "poverty.webp",
    alt: "Poverty",
    description: "Artificial Intelligence can help solve poverty issues, but it may also create new challenges."
  },
];

const opportunities = [
  {
    type: "image",
    image: "goals.jpg",
    alt: "Goals",
    description: "New opportunities for achieving goals"
  },
  {
    type: "image",
    image: "income.jpg",
    alt: "Income",
    description: "New opportunities for earning"
  },
  {
    type: "image",
    image: "shopping.jpg",
    alt: "Shopping",
    description: "New opportunities for shopping"
  },
  {
    type: "image",
    image: "investments.jpg",
    alt: "Investments",
    description: "New opportunities for investments"
  },
  {
    type: "image",
    image: "business.jpg",
    alt: "Business",
    description: "New opportunities for business"
  },
  {
    type: "image",
    image: "self-realization.jpg",
    alt: "Self-realization",
    description: "New opportunities for self-realization"
  },
]; 
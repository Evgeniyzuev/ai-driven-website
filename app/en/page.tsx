'use client';
import { useState } from "react";
import Image from "next/image";
import CardSection from "../components/CardSection";

interface Card {
  type: string;
  image: string;
  alt: string;
  description: string | React.ReactNode;
}

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <main className="min-h-screen">

      {/* blessDisaster section */}
      <CardSection
        title="AI is changing life"
        subtitle={[
          "Blessing or disaster?",
        ]}
        cards={blessDisaster}
        onCardClick={setSelectedCard}
        showTooltipOnMiddleCard={true}
      />

      {/* upgrade life section */}
      <CardSection
        title="Make your life better!"
        subtitle={[
          "Question: can AI make my life better?",
        ]}
        cards={upgradeLife}
        onCardClick={setSelectedCard}
      />

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
            <p className="text-gray-600 dark:text-gray-300 p-4 md:p-0 mt-4 whitespace-pre-wrap">
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
    alt: "Blessing",
    description: "The main income for most people is salary. Artificial Intelligence automates business and reduces jobs. Business transfers money from customers to owners. Without work, people can't buy as they used to. They participate less in the economy, and business loses customers. But business grows and develops through customer spending. People can choose where to buy and which business to support. It is in the customer's interest that the business growth, which occurs at the expense of this customer's expenses, belongs to them and is not appropriated by other owners."
  },
  {
    type: "image",
    image: "choice.jpg",
    alt: "Choose",
    description: "AI is rapidly changing our world, creating both opportunities and challenges for society."
  },
  {
    type: "image",
    image: "disaster.jpg",
    alt: "Disaster",
    description: "The main income for most people is salary. AI automates business and reduces jobs. Business transfers money from customers to owners. Without work, people can't buy as they used to. They participate less in the economy, and business loses customers."
  }
];

const upgradeLife = [
  {
    type: "image",
    image: "rightNow.jpg",
    alt: "How?",
    description: <>
      I ask myself: can AI make my life better?<br /><br />
      Yes, it can!<br /><br />
      But it won't help me. It's owned by someone else. It works in their interests. I can use their services on their terms. This doesn't guarantee benefits for me, only for the owners of this business.<br /><br />
      Instead, it's better to become the owner of an AI business!
    </>
  },
  {
    type: "image",
    image: "rightNow.jpg",
    alt: "Wish",
    description: "Technology opens new possibilities for personal growth and development"
  },
  {
    type: "image",
    image: "rightNow.jpg",
    alt: "Now",
    description: "The future holds endless possibilities for those who embrace change"
  }
];

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
  }
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
  }
]; 
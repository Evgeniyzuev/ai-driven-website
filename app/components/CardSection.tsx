import Image from "next/image";

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
            className="aspect-square bg-white dark:bg-gray-800 cursor-pointer"
            onClick={() => onCardClick(card)}
          >
            <div className="relative w-full h-full">
              <Image
                src={`/${card.image}`}
                alt={card.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                <h3 className="text-sm md:text-2xl font-bold text-white pb-2">{card.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
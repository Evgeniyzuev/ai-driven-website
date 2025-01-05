'use client'; 
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedProblem, setSelectedProblem] = useState<typeof problems[0] | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="min-h-1/4 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-background to-blue-50 dark:to-blue-950">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AiShare
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Ai меняет бизнес, экономику, мир.<br/>
          Используй преимущество сейчас!
        </p>
      </section>

      {/* Problems section */}
      <section className="py-6 px-2">
        <h2 className="text-3xl font-bold text-center mb-4">Глобальные проблемы</h2>
        <p className="text-sm md:text-sm text-center mb-4 max-w-2xl">
          Ai может их усугубить или Ai может их решить.
          <br/>Выбор за тобой!
        </p>
        <div className="grid grid-cols-3 gap-[1px] bg-gray-200 dark:bg-gray-700">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="aspect-square bg-white dark:bg-gray-800 cursor-pointer"
              onClick={() => setSelectedProblem(problem)}
            >
              {
                <div className="relative w-full h-full">
                  <Image
                    src={`/${problem.image}`}
                    alt={problem.alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                    <h3 className="text-sm font-bold text-white pb-4">{problem.alt}</h3>
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProblem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProblem(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedProblem.alt}</h3>
            <div className="relative aspect-video mb-4">
              <Image
                src={`/${selectedProblem.image}`}
                alt={selectedProblem.alt}
                fill
                className="object-cover rounded"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedProblem.description || "Описание проблемы будет добавлено позже."}
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

import Image from "next/image";

export default function Home() {
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
            <div key={index} className="aspect-square p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const problems = [
  {
    title: "Технологическая безработица",
    description: "Создаем новые рабочие места и возможности в эпоху автоматизации"
  },
  {
    title: "Монополизация рынка",
    description: "Децентрализованная модель управления против корпоративной монополии"
  },
  {
    title: "Социальное неравенство",
    description: "Справедливое распределение прибыли и ресурсов между участниками"
  },
  // Добавьте остальные проблемы
];

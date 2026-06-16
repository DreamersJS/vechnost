import CTA from "@/components/sections/CTA";
import { FAQSchema, FAQSection } from "@/lib/faq";
import Link from "next/link";

export const metadata = {
  title: "Погребални услуги София",
  description:
    "Пълна организация на погребения в София и Орландовци. Денонощни траурни услуги, дежурен съдебен лекар и цени от 750 EUR.",
  alternates: {
    canonical: "/pogrebalni-uslugi-sofia",
  },
}

const faqs = [
  {
    question: "Работите ли денонощно?",
    answer:
      "Да, реагираме 24/7 при спешни случаи в София и региона. Отзоваваме се до 45 мин.",
  },
  {
    question: "Извършвате ли транспорт в чужбина?",
    answer: "Да, предлагаме международен транспорт на покойници.",
  },
  {
    question: "Колко струва погребение?",
    answer: "Цените започват от 750 €, според услугите и организацията.",
  },
  {
    question: "Осигурявате ли дежурен съдебен лекар?",
    answer: "Да, съдействаме с дежурен съдебен лекар при необходимост.",
  },
  {
    question: "Разполагате ли с хладилна камера?",
    answer:
      "Да, осигуряваме съхранение в минусова хладилна камера при необходимост.",
  },
  {
    question: "Изготвяте ли некролози?",
    answer:
      "Да, предлагаме изготвяне на некролози и съдействие при организация на траурни ритуали.",
  },
  {
    question: "Помагате ли с документи?",
    answer: "Да, съдействаме за всички необходими документи.",
  },
  {
    question: "Помагате ли с смъртен акт?",
    answer: "Да, съдействаме за всички необходими документи.",
  },
  {
    question: "Извършвате ли погребение на животни?",
    answer: "Да, предлагаме и погребение на домашни любимци.",
  },
];

export default function PogrebalniUslugiSofiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Погребални услуги София",
    provider: {
      "@type": "FuneralHome",
      name: "Траурна агенция Вечност",
    },
    areaServed: "Sofia, Bulgaria",
  };
  return (
    <main className="bg-white">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO / H1 */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
        <h1 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
          Погребални услуги в София
        </h1>

        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Организираме пълни погребения в София с денонощна организация и съдействие.
        </p>

        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Разполагаме с дежурен екип и съдебен лекар при необходимост.
        </p>
      </section>

      {/* ORGANIZATION */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Организация на погребение
          </h2>

          <div className="mt-6 space-y-3 text-sm text-gray-700">

            <div className="rounded-lg border bg-white p-4">
              Приемаме обаждания 24/7 и реагираме незабавно в София.
            </div>

            <div className="rounded-lg border bg-white p-4">
              Организираме цялостния процес по погребение – транспорт, документи и координация.
            </div>

            <div className="rounded-lg border bg-white p-4">
              Осигуряваме съхранение в минусова хладилна камера при необходимост.
            </div>

            <div className="rounded-lg border bg-white p-4">
              Изготвяне на некролози и съдействие при организация на траурни ритуали.
            </div>

            <div className="rounded-lg border bg-white p-4">
              Осигуряваме съдействие с гробни места, ритуали и цялата логистика.
            </div>

          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Дежурен съдебен лекар
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            При необходимост осигуряваме съдебен лекар за оформяне на всички документи, свързани със смъртния случай.
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Съдействаме при издаване на необходимите удостоверения и административни процедури.
          </p>

        </div>
      </section>

      {/* PET SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Погребение на домашни любимци
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Предлагаме и погребение на домашни любимци.
          </p>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Как протича организацията
          </h2>

          <ol className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="rounded-lg border bg-white p-4">
              1. Приемаме обаждане 24/7
            </li>
            <li className="rounded-lg border bg-white p-4">
              2. Изпращаме екип на място
            </li>
            <li className="rounded-lg border bg-white p-4">
              3. Съдействие със съдебен лекар и документи
            </li>
            <li className="rounded-lg border bg-white p-4">
              4. Организация на погребението
            </li>
            <li className="rounded-lg border bg-white p-4">
              5. Изпълнение на ритуала
            </li>
          </ol>

        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* FAQ */}
      <FAQSchema faqs={faqs} />
      <FAQSection faqs={faqs} />

      {/* INTERNAL LINKS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-lg font-semibold text-gray-900">
            Други услуги
          </h2>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">

            <Link href="/" className="hover:text-black">
              ← Начало
            </Link>

            <Link href="/kremacii-sofia" className="hover:text-black">
              Кремации
            </Link>

            <Link href="/transport-pokoinici" className="hover:text-black">
              Транспорт на покойник
            </Link>

            <Link href="/traurni-artikuli" className="hover:text-black">
              Траурни артикули
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
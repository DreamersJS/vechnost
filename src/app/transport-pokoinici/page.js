import { FAQSchema, FAQSection } from "@/lib/faq";
import Link from "next/link";

export const metadata = {
  title: "Транспорт на покойници | България и чужбина",
  description:
    "Международен и вътрешен транспорт на покойници. Специализиран транспорт и документи.",
  alternates: {
    canonical: "/transport-pokoinici",
  },
}

const faqs = [
  {
    question: "Извършвате ли международен транспорт?",
    answer:
      "Да, осигуряваме транспорт на покойници до и от чужбина.",
  },
  {
    question: "Работите ли 24/7?",
    answer: "Да, дежурен екип е на разположение денонощно.",
  },
  {
    question: "Помагате ли с документи?",
    answer: "Да, съдействаме за всички необходими документи за транспорт.",
  },
  {
    question: "Колко бързо реагирате?",
    answer:
      "Реагираме незабавно след обаждане 24/7.",
  },
];

export default function TransportPokoiniciPage() {
  return (
    <main className="bg-white">

      {/* HERO / H1 */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
        <h1 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
          Транспорт на покойник в България и чужбина
        </h1>

        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Осигуряваме денонощен транспорт на покойници в София, страната и международни дестинации.
        </p>

        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Реагираме 24/7 с напълно оборудвани специализирани превозни средства.
        </p>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Какво включва транспортът
          </h2>

          <div className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">

            <div className="rounded-lg border bg-white p-4">
              Транспорт в София и цяла България
            </div>

            <div className="rounded-lg border bg-white p-4">
              Международен транспорт на покойници
            </div>

            <div className="rounded-lg border bg-white p-4">
              Специализирани превозни средства
            </div>

            <div className="rounded-lg border bg-white p-4">
              Денонощна организация 24/7
            </div>

            <div className="rounded-lg border bg-white p-4">
              Съдействие с документи за транспорт
            </div>

            <div className="rounded-lg border bg-white p-4">
              Координация с болници и институции
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Процес на транспорт
          </h2>

          <ol className="mt-6 space-y-3 text-sm text-gray-700">

            <li className="rounded-lg border bg-white p-4">
              1. Приемаме обаждане 24/7
            </li>

            <li className="rounded-lg border bg-white p-4">
              2. Изпращаме специализиран екип на място
            </li>

            <li className="rounded-lg border bg-white p-4">
              3. Подготвяме необходимите документи
            </li>

            <li className="rounded-lg border bg-white p-4">
              4. Извършваме транспорт до избраната локация
            </li>

            <li className="rounded-lg border bg-white p-4">
              5. Координация с роднини и институции
            </li>

          </ol>
        </div>
      </section>

      {/* PRICE */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Цена на транспорт
          </h2>

          <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">

            <p className="text-sm text-gray-500">
              Транспорт на покойник
            </p>

            <p className="mt-2 text-2xl font-semibold text-gray-900">
              Цена по договаряне
            </p>

            <p className="mt-2 text-xs text-gray-500">
              Зависи от разстояние, държава и организация
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSchema faqs={faqs} />
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">

          <h2 className="text-xl font-semibold text-gray-900">
            Свържете се с нас 24/7
          </h2>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <a
              href="tel:+359884395622"
              className="rounded-lg bg-black px-6 py-3 text-sm text-white"
            >
              📞 0884 395 622
            </a>

            <a
              href="tel:+359885413678"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm text-gray-700"
            >
              📞 0885 413 678
            </a>

            <a
              href="viber://chat?number=+359885413678"
              className="rounded-lg bg-purple-600 px-6 py-3 text-sm text-white"
            >
              💬 Viber
            </a>

          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-lg font-semibold text-gray-900">
            Други услуги
          </h2>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">

            <Link href="/" className="hover:text-black">
              ← Начало
            </Link>

            <Link href="/pogrebalni-uslugi-sofia" className="hover:text-black">
              Погребални услуги
            </Link>

            <Link href="/kremacii-sofia" className="hover:text-black">
              Кремации
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
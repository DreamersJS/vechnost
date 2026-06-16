import CTA from "@/components/sections/CTA";
import InternalLinks from "@/components/sections/InternalLinks";
import { FAQSchema, FAQSection } from "@/lib/faq";

export const metadata = {
  title: "Кремации София | Денонощна организация на кремации",
  description:
    "Организация на кремации в София. Денонощно съдействие, транспорт на покойници, подготовка на документи и координация с крематориум. Кремация на хора и домашни любимци.",
  alternates: {
    canonical: "/kremacii-sofia",
  },
}

const faqs = [
  {
    question: "Колко струва кремация в София?",
    answer: "Цените започват от 850 €, според избраните услуги.",
  },
  {
    question: "Работите ли 24/7?",
    answer: "Да, имаме дежурен екип денонощно.",
  },
  {
    question: "Съдействате ли с документи?",
    answer: "Да, поемаме цялата административна част.",
  },
  {
    question: "Извършвате ли транспорт?",
    answer: "Да, в България и чужбина.",
  },
  {
    question: "Предлагате ли кремации на домашни любимци?",
    answer: "Да, извършваме кремации на домашни любимци.",
  },
];

const links = [
  {
    link: "/",
    name: "← Начало"
  },
  {
    link: "/pogrebalni-uslugi-sofia",
    name: "Погребални услуги"
  },
  {
    link: "/transport-pokoinici",
    name: "Транспорт на покойник"
  },
  {
    link: "/traurni-artikuli",
    name: "Траурни артикули"
  },
]

export default function KremaciiSofiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Кремации София",
    provider: {
      "@type": "FuneralHome",
      name: "Траурна агенция Вечност",
    },
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
          Кремации в София
        </h1>

        {/* INTRO */}
        <p>
          Траурна агенция Вечност организира кремации в София за семейства,
          които предпочитат този начин на изпращане. Поемаме цялата организация,
          включително транспорт на покойника, подготовка на документи,
          координация с крематориум и съдействие при административните процедури.
        </p>

        <p>
          Нашият екип работи денонощно и оказва съдействие още от първото
          обаждане. Осигуряваме бърза реакция, професионално отношение
          и пълна дискретност.
        </p>
      </section>

      {/* PET SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Кремации на домашни любимци
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Предлагаме и кремации на домашни любимци с уважение и достойно изпращане.
          </p>

        </div>
      </section>

      {/* WHAT INCLUDED */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Услугата включва
          </h2>

          <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
            <li className="rounded-lg border bg-white p-4">Организация на кремация</li>
            <li className="rounded-lg border bg-white p-4">Съдействие с документи</li>
            <li className="rounded-lg border bg-white p-4">Транспорт на покойник</li>
            <li className="rounded-lg border bg-white p-4">Координация с крематориум</li>
          </ul>
        </div>
      </section>

      {/* PRICE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Цена
          </h2>

          <div className="mt-6 rounded-lg border border-gray-200 p-6">
            <p className="text-sm text-gray-500">Кремация</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              от 850 €
            </p>

            <p className="mt-2 text-xs text-gray-500">
              *Цената зависи от услугите и организацията
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Процес
          </h2>

          <ol className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="rounded-lg border bg-white p-4">
              1. Приемаме обаждане 24/7
            </li>
            <li className="rounded-lg border bg-white p-4">
              2. Организираме транспорт и документи
            </li>
            <li className="rounded-lg border bg-white p-4">
              3. Координация с крематориум
            </li>
            <li className="rounded-lg border bg-white p-4">
              4. Извършване на кремация
            </li>
            <li className="rounded-lg border bg-white p-4">
              5. Предаване на урна и документи
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-xl font-semibold">
            Кремации в София и региона
          </h2>

          <p className="mt-4">
            Траурна агенция Вечност организира кремации за семейства от София,
            Орландовци, Надежда, Люлин, Младост,
            Дружба, Красна поляна, Овча купел и останалите райони на столицата.
          </p>

          <p className="mt-4">
            Осигуряваме транспорт на покойника, подготовка на необходимите
            документи и съдействие през целия процес. Работим денонощно
            и реагираме бързо при необходимост от организация на кремация.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSchema faqs={faqs} />
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTA />

      {/* INTERNAL LINKS */}
      <InternalLinks links={links} />

    </main>
  );
}

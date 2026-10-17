import CTA from "@/components/sections/CTA";
import InternalLinks from "@/components/sections/InternalLinks";
import { FAQSchema, FAQSection } from "@/lib/faq";

export const metadata = {
  title: "Траурни венци и цветя София",
  description:
    "Траурни венци, цветя, урни, жито и погача и артикули за погребения и панахиди.",
  alternates: {
    canonical: "/traurni-artikuli",
  },
}

const faqs = [
  {
    question: "Мога ли да комбинирам с погребение?",
    answer: "Да, траурните артикули могат да бъдат включени в пълна организация на погребение.",
  },
  {
    question: "Работите ли 24/7?",
    answer: "Да, дежурен екип е на разположение денонощно.",
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
    link: "/kremacii-sofia",
    name: "Кремации"
  },
  {
    link: "/transport-pokoinici",
    name: "Транспорт на покойник"
  },
]

/**
 * 
колко големи се венците
 */

export default function TraurniArtikuliPage() {
  return (
    <main className="bg-white">

      {/* HERO / H1 */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-16">

        <h1 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
          Траурни артикули в София
        </h1>

        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Предлагаме пълен избор от траурни артикули – венци, цветя, ковчези и аксесоари за погребения в София и страната.
        </p>

        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Денонощна доставка и съдействие при организация на погребение.
        </p>

      </section>

      {/* PRODUCTS / CATEGORIES */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Траурни продукти
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">

            <div className="rounded-lg border bg-white p-5">
              <h3 className="font-medium text-gray-900">Венци</h3>
              <p className="mt-2 text-gray-600">
                Погребални венци.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-5">
              <h3 className="font-medium text-gray-900">Цветя</h3>
              <p className="mt-2 text-gray-600">
                Букети за траурни церемонии.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-5">
              <h3 className="font-medium text-gray-900">Жито</h3>
              <p className="mt-2 text-gray-600">
                Жито и погача и кетъринг.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-5">
              <h3 className="font-medium text-gray-900">Ковчези</h3>
              <p className="mt-2 text-gray-600">
                Богат избор от дървени и стандартни модели.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-5">
              <h3 className="font-medium text-gray-900">Аксесоари</h3>
              <p className="mt-2 text-gray-600">
                Урни и свещи.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICE INFO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Организация
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Осигуряваме доставка на траурни артикули в София и съдействие при организация на погребението.
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Можем да комбинираме избраните артикули с пълна организация на ритуала.
          </p>

        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* FAQ */}
      <FAQSchema faqs={faqs} />
      <FAQSection faqs={faqs} />

      {/* INTERNAL LINKS */}
      <InternalLinks links={links} />

    </main>
  );
}
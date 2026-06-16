import { FAQSchema, FAQSection } from "@/lib/faq";
import Link from "next/link";

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

          </div>

        </div>
      </section>

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

            <Link href="/pogrebalni-uslugi-sofia" className="hover:text-black">
              Погребални услуги
            </Link>

            <Link href="/kremacii-sofia" className="hover:text-black">
              Кремации
            </Link>

            <Link href="/transport-pokoinici" className="hover:text-black">
              Транспорт на покойник
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export const metadata = {
  title: "Кремации София | Денонощна организация на кремации",
  description:
    "Организация на кремации в София. Денонощни услуги. Кремация на хора и домашни любимци. Цена от 850 EUR.",
}

import Link from "next/link";

export default function KremaciiSofiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Кремации София",
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

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Често задавани въпроси
          </h2>

          <div className="mt-6 space-y-3">

            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Колко струва кремация в София?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Цените започват от 850 €, според избраните услуги.
              </p>
            </details>

            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Работите ли 24/7?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Да, имаме дежурен екип денонощно.
              </p>
            </details>

            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Съдействате ли с документи?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Да, поемаме цялата административна част.
              </p>
            </details>

            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Извършвате ли транспорт?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Да, в България и чужбина.
              </p>
            </details>

            <details className="rounded-lg border p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Предлагате ли кремации на домашни любимци?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Да, извършваме кремации на домашни любимци.
              </p>
            </details>

          </div>
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
              href="viber://chat?number=+359885413678"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm text-gray-700"
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

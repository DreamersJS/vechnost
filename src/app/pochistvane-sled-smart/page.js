export const metadata = {
  title: "Почистване след смърт София",
  description:
    "Професионално почистване след смърт, мазета и тавани и специализирани строителни услуги в София.",
  alternates: {
    canonical: "/pochistvane-sled-smart",
  },
}

import Link from "next/link";

export default function PochistvaneSledSmartPage() {
  return (
    <main className="bg-white">

      {/* HERO / H1 */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-16">

        <h1 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
          Почистване след смърт в София
        </h1>

        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Извършваме професионално почистване и дезинфекция след смърт в жилища, мазета и тавани в София и региона.
        </p>

        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Денонощен екип 24/7 с дискретност, бърза реакция и специализирана техника.
        </p>

      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Какво включва услугата
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">

            <div className="rounded-lg border bg-white p-5">
              Дълбоко почистване на помещения
            </div>

            <div className="rounded-lg border bg-white p-5">
              Дезинфекция и обезмирисяване
            </div>

            <div className="rounded-lg border bg-white p-5">
              Почистване на кръв и биологични следи
            </div>

            <div className="rounded-lg border bg-white p-5">
              Премахване на замърсени мебели и предмети
            </div>

            <div className="rounded-lg border bg-white p-5">
              Обработка на мазета и тавани
            </div>

            <div className="rounded-lg border bg-white p-5">
              Специализирани дезинфекциращи препарати
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Процес на работа
          </h2>

          <ol className="mt-6 space-y-3 text-sm text-gray-700">

            <li className="rounded-lg border bg-white p-4">
              1. Приемаме обаждане 24/7
            </li>

            <li className="rounded-lg border bg-white p-4">
              2. Изпращаме екип на място незабавно
            </li>

            <li className="rounded-lg border bg-white p-4">
              3. Оценка на ситуацията и безопасност
            </li>

            <li className="rounded-lg border bg-white p-4">
              4. Почистване и дезинфекция
            </li>

            <li className="rounded-lg border bg-white p-4">
              5. Предаване на напълно почистен обект
            </li>

          </ol>

        </div>
      </section>

      {/* TRUST / SAFETY */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Дискретност и безопасност
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Работим с пълна дискретност и спазване на всички санитарни и безопасни изисквания.
            Екипът е обучен за работа при тежки и чувствителни ситуации.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">

          <h2 className="text-xl font-semibold text-gray-900">
            Спешна нужда? Обадете се 24/7
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
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Често задавани въпроси
          </h2>

          <div className="mt-6 space-y-3">

            <details className="rounded-lg border bg-white p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Работите ли денонощно?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Да, реагираме 24/7 при спешни случаи в София и региона.
              </p>
            </details>

            <details className="rounded-lg border bg-white p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Извършвате ли дезинфекция?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Да, използваме специализирани препарати за пълна дезинфекция.
              </p>
            </details>

            <details className="rounded-lg border bg-white p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Колко време отнема почистването?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Зависи от ситуацията, но обикновено се извършва в рамките на ден.
              </p>
            </details>

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

            <Link href="/kremacii-sofia" className="hover:text-black">
              Кремации
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
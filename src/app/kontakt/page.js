import Contact from "@/components/sections/Contact";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Контакти",
  description:
    "Свържете се с траурна агенция Вечност в София. Денонощни погребални услуги, кремации и транспорт.",
  alternates: {
    canonical: "/kontakt",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-16 text-center">

        <h1 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
          Контакти – Траурна агенция Вечност
        </h1>

        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Денонощна помощ 24/7. Обадете се по всяко време – реагираме незабавно в София и страната.
        </p>

        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Услугите се предоставят от ВЕЧНОСТ 2024 ЕООД, ЕИК 208065265.
          Дружеството е регистрирано в Република България на 19.11.2024 г.
        </p>

      </section>

      {/* CONTACT */}
      <Contact />

      {/* PRIMARY CTA (MOST IMPORTANT BLOCK) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center">

          <h2 className="text-xl font-semibold text-gray-900">
            📞 Обадете се веднага
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Най-бързият начин за реакция е телефонно обаждане
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <a
              href="tel:+359884395622"
              className="rounded-lg bg-black px-6 py-4 text-sm text-white font-medium"
            >
              📞 0884 395 622 (Денонощно)
            </a>

            <a
              href="tel:+359885413678"
              className="rounded-lg border border-gray-300 px-6 py-4 text-sm text-gray-700 font-medium"
            >
              📞 0885 413 678
            </a>

          </div>

        </div>
      </section>

      {/* VIBER / SECONDARY CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center">

          <h2 className="text-lg font-semibold text-gray-900">
            💬 Алтернативен контакт
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Пишете ни във Viber
          </p>

          <div className="mt-6">
            <a
              href="viber://chat?number=+359885413678"
              className="inline-block rounded-lg bg-purple-600 px-6 py-3 text-sm text-white font-medium"
            >
              Отвори Viber чат
            </a>
          </div>

        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">

          <h2 className="text-xl font-semibold text-gray-900 text-center">
            Защо да се свържете с нас
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">

            <div className="rounded-lg border bg-white p-5">
              ⚡ Денонощна реакция 24/7
            </div>

            <div className="rounded-lg border bg-white p-5">
              🚗 Бърз изезд на екип при спешни случаи
            </div>

            <div className="rounded-lg border bg-white p-5">
              📄 Пълно съдействие с документи
            </div>

            <div className="rounded-lg border bg-white p-5">
              🤝 Дискретност и уважение във всеки случай
            </div>

          </div>

        </div>
      </section>

      {/* OPTIONAL INFO */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center">

          <h2 className="text-lg font-semibold text-gray-900">
            Работно време
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            24 часа в денонощието, 7 дни в седмицата
          </p>

        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">

          <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
            Траурна агенция Вечност
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="relative h-72 overflow-hidden rounded-lg">
              <Image
                src="/images/store1.webp"
                alt="Траурна агенция Вечност София"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-72 overflow-hidden rounded-lg">
              <Image
                src="/images/store2.webp"
                alt="Офис на траурна агенция Вечност"
                fill
                className="object-fill"
              />
            </div>

            <div className="relative h-72 overflow-hidden rounded-lg">
              <Image
                src="/images/store3.webp"
                alt="Погребални услуги София"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* INTERNAL LINKS (SOFT SEO SUPPORT) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-10">

          <h2 className="text-lg font-semibold text-gray-900 text-center">
            Нашите услуги
          </h2>

          <div className="mt-6 flex flex-col gap-2 text-sm text-gray-600 text-center">

            <Link href="/pogrebalni-uslugi-sofia" className="hover:text-black">
              Погребални услуги
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

            <Link href="/kamenodelski-uslugi" className="hover:text-black">
              Каменоделски услуги
            </Link>

            <Link href="/za-nas" className="hover:text-black">
              За нас
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
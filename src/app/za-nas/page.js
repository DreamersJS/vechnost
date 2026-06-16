import Link from "next/link";

export const metadata = {
  title: "За нас – Погребални услуги в София",
  description:
    "Траурна агенция Вечност – денонощни погребални услуги, кремации и транспорт в София. Професионална и дискретна помощ 24/7.",
  alternates: {
    canonical: "/za-nas",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-4 py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
          Траурна агенция Вечност – София
        </h1>

        <p className="mt-4 text-base text-gray-600">
          Денонощна траурна агенция, предоставяща професионални погребални услуги, кремации и транспорт на покойници в София и цяла България.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Работим 24/7 с уважение и пълно съдействие във всеки етап.
        </p>
      </section>

      {/* TRUST / E-E-A-T */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-12">

          <h2 className="text-2xl font-semibold text-gray-900">
            Кои сме ние
          </h2>

          <p className="mt-4 text-sm text-gray-700">
            Траурна агенция Вечност е специализирана в организиране на погребения и кремации в София.
            Нашият екип предоставя цялостна организация – от първия телефонен разговор до финалното изпращане.
          </p>

          <p className="mt-4 text-sm text-gray-700">
            Разбираме, че това е труден момент за всяко семейство, затова работим с максимална
            дискретност, уважение и бърза реакция.
          </p>

        </div>
      </section>

      <section className="bg-white border-t">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Фирмена информация
          </h2>

          <p>
            Траурна агенция Вечност е търговска марка на ВЕЧНОСТ 2024 ЕООД.
          </p>
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p><strong>Фирма:</strong> ВЕЧНОСТ 2024 ЕООД</p>
            <p><strong>ЕИК:</strong> 208065265</p>
            <p><strong>Седалище:</strong> гр. София, р-н Сердика, ул. Староселска 33</p>
            <p><strong>Офис за обслужване на клиенти:</strong>
              бул. Първа българска Армия 127, София 1225</p>
            <p><strong>Дата на регистрация:</strong> 19.11.2024 г.</p>
          </div>
        </div>
      </section>

      {/* SERVICES SEO SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">

          <h2 className="text-2xl font-semibold text-gray-900">
            Погребални услуги в София
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Предлагаме пълен спектър от траурни услуги, включително:
          </p>

          <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
            <li>Организация на погребения в София</li>
            <li>Кремации на хора и домашни любимци</li>
            <li>Транспорт на покойници в България и чужбина</li>
            <li>Административно съдействие и документи</li>
            <li>Траурни церемонии и организация</li>
            <li>Денонощна реакция 24/7</li>
          </ul>

        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-12">

          <h2 className="text-2xl font-semibold text-gray-900">
            Траурни услуги в София и региона
          </h2>

          <p className="mt-4 text-sm text-gray-700">
            Работим в цяла София, включително Орландовци, Център, Люлин, Надежда, Хаджи Димитър и всички квартали.
            Осигуряваме бърз изезд на екип при нужда, независимо от часа.
          </p>

          <p className="mt-4 text-sm text-gray-700">
            Освен София, извършваме транспорт и услуги в цялата страна и чужбина.
          </p>

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">

          <h2 className="text-2xl font-semibold text-gray-900">
            Защо да изберете нас
          </h2>

          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">

            <div className="rounded-lg border p-4">
              ⚡ Денонощна реакция 24/7 без почивен ден
            </div>

            <div className="rounded-lg border p-4">
              🤝 Дискретност и уважение към всяко семейство
            </div>

            <div className="rounded-lg border p-4">
              📄 Пълно съдействие с документи и администрации
            </div>

            <div className="rounded-lg border p-4">
              🚗 Бърз транспорт в София и страната
            </div>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-12">

          <h2 className="text-2xl font-semibold text-gray-900">
            Как работим
          </h2>

          <ol className="mt-6 space-y-3 text-sm text-gray-700">
            <li>1. Приемаме обаждане 24/7</li>
            <li>2. Даваме консултация и организираме всичко необходимо</li>
            <li>3. Подготвяме документи и логистика</li>
            <li>4. Извършваме погребение или кремация</li>
            <li>5. Подаваме пълно съдействие до края</li>
          </ol>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">

          <h2 className="text-2xl font-semibold text-gray-900">
            Свържете се с нас 24/7
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Незабавна реакция при спешни случаи в София и страната
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <a
              href="tel:+359884395622"
              className="rounded-lg bg-black px-6 py-3 text-sm text-white"
            >
              📞 0884 395 622
            </a>

            <a
              href="/kontakt"
              className="rounded-lg border px-6 py-3 text-sm text-gray-700"
            >
              Контакт форма
            </a>

          </div>

        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center">

          <h2 className="text-lg font-semibold text-gray-900">
            Нашите услуги
          </h2>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">

            <Link href="/pogrebalni-uslugi-sofia">Погребални услуги София</Link>
            <Link href="/kremacii-sofia">Кремации София</Link>
            <Link href="/transport-pokoinici">Транспорт на покойници</Link>

          </div>

        </div>
      </section>

    </main>
  );
}
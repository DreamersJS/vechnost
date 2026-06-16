import ServicesSection from "@/components/sections/ServicesSection";
import { FAQSchema, FAQSection } from "@/lib/faq";
import Image from "next/image";

export const metadata = {
  title: "Денонощни погребални услуги София",
  description:
    "Денонощна траурна агенция Вечност в София. Организация на погребения, кремации, транспорт и траурни услуги 24/7 на достъпни цени.",
  alternates: {
    canonical: "/",
  },
}

const faqs = [
  {
    question: "Работите ли денонощно?",
    answer:
      "Да, разполагаме с дежурен екип 24/7 в София, отзоваваме се до 45 мин.",
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
];

/**
Какво да направите при настъпила смърт
Как протича организацията на погребение
Какви документи са необходими
Кремация или погребение
Обслужвани райони в София
/izdavane-na-smarten-akt
/nekrolozi-sofia
 */
export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">

          <h1 className="text-2xl font-semibold leading-snug text-gray-900 sm:text-4xl">
            Денонощни погребални услуги в София – Траурна агенция „Вечност“
          </h1>

          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            Погребения • Кремации • Транспорт • Траурни услуги в София
          </p>

          <p className="mt-2 text-sm text-gray-500">
            24/7 дежурен екип | Достойно изпращане на близки
          </p>

          <section className="mt-4 bg-white">
            <p>При настъпила смърт се обадете на:
              0884 395 622</p>

            <p>Наш екип ще съдейства за всички необходими действия и документи.</p>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12">

              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Погребални услуги в София</h2>

              <p>
                Траурна агенция Вечност предлага денонощни погребални услуги в София и региона.
                Осигуряваме цялостна организация на погребения, кремации, транспорт на покойници,
                изготвяне на документи и съдействие във всеки етап от процеса.
              </p>

              <p>
                Нашият екип работи 24 часа в денонощието и реагира до 45 минути при спешни случаи.
                Предлагаме професионално отношение, дискретност и уважение към всяко семейство.
              </p>

              <p>
                Извършваме транспорт на покойници в България и чужбина, организираме траурни
                церемонии и предоставяме пълен набор от погребални услуги според нуждите на близките.
              </p>

            </div>
          </section>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+359884395622"
              className="rounded-lg bg-black px-5 py-3 text-center text-sm text-white"
            >
              📞 0884 395 622
            </a>

            <a
              href="tel:+359885413678"
              className="rounded-lg border border-gray-300 px-5 py-3 text-center text-sm text-gray-700"
            >
              📞 0885 413 678
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* PRICING */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Достойно изпращане на достъпни цени
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div className="rounded-lg border border-gray-200 p-6">
              <p className="text-sm text-gray-500">Погребение</p>
              <p className="mt-2 text-2xl font-semibold">750 €</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <p className="text-sm text-gray-500">Кремация</p>
              <p className="mt-2 text-2xl font-semibold">850 €</p>
            </div>

          </div>

          <p className="mt-4 text-xs text-gray-500">
            *Цените варират според избраните услуги и локация
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSchema faqs={faqs} />
      <FAQSection faqs={faqs} />

      {/* CONTACT */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Контакт
          </h2>

          <div className="mt-6 text-sm text-gray-600 space-y-2">
            <p>📍 София, Орландовци, бул. Първа българска Армия 127</p>
            <p>📞 0884 395 622</p>
            <p>📞 0885 413 678 (Viber)</p>
          </div>
        </div>
      </section>

      {/* IMG */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
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
                src="/images/store4.webp"
                alt="Офис на траурна агенция Вечност"
                fill
                className="object-cover"
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

      {/* MAP */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">

          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Локация
          </h2>

          <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
            <iframe
              title="Google Maps - София Орландовци"
              src="https://www.google.com/maps?q=Orlandovtsi+Sofia&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </main>
  );
}
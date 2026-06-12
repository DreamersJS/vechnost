
export const metadata = {
    title: "Каменоделски услуги София",
    description:
        "Изработка, монтаж и поддръжка на надгробни паметници. Облицовка, почистване и озеленяване на гробни места в София.",
    alternates: {
        canonical: "/kamenodelski-uslugi",
    },
}

import Image from "next/image";
import Link from "next/link";

export default function KamendelskiUslugiPage() {
    return (
        <main className="bg-white">

            {/* HERO / H1 */}
            <section className="mx-auto max-w-6xl px-4 py-10 sm:py-16">

                <h1 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
                    Каменоделски услуги в София
                </h1>

                <p className="mt-4 text-sm text-gray-600 sm:text-base">
                    Нашите каменоделски услуги включват изработка, монтаж и поддръжка на надгробни паметници с високо качество и внимание към детайла.
                </p>

                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    Предлагаме облицовка, почистване и озеленяване на гробни места в София и региона.
                </p>

            </section>

            {/* SERVICES */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-6xl px-4 py-10">

                    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Какво предлагаме
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">

                        <div className="rounded-lg border bg-white p-5">
                            <h3 className="font-medium text-gray-900">Надгробни паметници</h3>
                            <p className="mt-2 text-gray-600">
                                Изработка по индивидуален проект с различни видове камък.
                            </p>
                        </div>

                        <div className="rounded-lg border bg-white p-5">
                            <h3 className="font-medium text-gray-900">Монтаж</h3>
                            <p className="mt-2 text-gray-600">
                                Професионален монтаж и стабилна конструкция.
                            </p>
                        </div>

                        <div className="rounded-lg border bg-white p-5">
                            <h3 className="font-medium text-gray-900">Облицовка</h3>
                            <p className="mt-2 text-gray-600">
                                Каменна облицовка на гробни места и рамки.
                            </p>
                        </div>

                        <div className="rounded-lg border bg-white p-5">
                            <h3 className="font-medium text-gray-900">Почистване</h3>
                            <p className="mt-2 text-gray-600">
                                Професионално почистване и възстановяване.
                            </p>
                        </div>

                        <div className="rounded-lg border bg-white p-5">
                            <h3 className="font-medium text-gray-900">Озеленяване</h3>
                            <p className="mt-2 text-gray-600">
                                Поддръжка и оформление на гробни места.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* RENOVATION / VALUE SECTION */}
            <section className="bg-white">
                <div className="mx-auto max-w-6xl px-4 py-10">

                    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Реставрация и поддръжка
                    </h2>

                    <p className="mt-4 text-sm text-gray-600">
                        Извършваме възстановяване на стари и повредени надгробни паметници, включително почистване, ремонт и обновяване на надписи.
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                        Работим с висококачествени материали, устойчиви на атмосферни условия.
                    </p>

                </div>
            </section>

            {/* PROCESS */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-6xl px-4 py-10">

                    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Процес на работа
                    </h2>

                    <ol className="mt-6 space-y-3 text-sm text-gray-700">

                        <li className="rounded-lg border bg-white p-4">
                            1. Консултация и избор на услуга
                        </li>

                        <li className="rounded-lg border bg-white p-4">
                            2. Оглед и уточняване на проект
                        </li>

                        <li className="rounded-lg border bg-white p-4">
                            3. Изработка и подготовка
                        </li>

                        <li className="rounded-lg border bg-white p-4">
                            4. Монтаж на място
                        </li>

                        <li className="rounded-lg border bg-white p-4">
                            5. Поддръжка при нужда
                        </li>

                    </ol>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-white">
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

            {/* pictures */}
            <section className="bg-white">
                <div className="mx-auto max-w-6xl px-4 py-12">

                    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Траурна агенция Вечност
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

                        <div className="relative h-72 overflow-hidden rounded-lg">
                            <Image
                                src="/images/kamen1.webp"
                                alt="Траурна агенция Вечност София"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="relative h-72 overflow-hidden rounded-lg">
                            <Image
                                src="/images/kamen2.webp"
                                alt="Офис на траурна агенция Вечност"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="relative h-72 overflow-hidden rounded-lg">
                            <Image
                                src="/images/kamen3.webp"
                                alt="Погребални услуги София"
                                fill
                                className="object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

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
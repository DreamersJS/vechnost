
const CTA = () => {
    return (
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
                        className="rounded-lg bg-black px-6 py-3 text-sm text-white"
                    >
                        📞 0885 413 678
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
    )
}
export default CTA;
export function FAQSchema({ faqs }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    );
}

export function FAQSection({ faqs }) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Често задавани въпроси
                </h2>

                <div className="mt-6 space-y-3">
                    {faqs.map((faq, index) => (
                        <details key={index} className="rounded-lg border p-4">
                            <summary className="cursor-pointer text-sm font-medium">
                                {faq.question}
                            </summary>
                            <p className="mt-2 text-sm text-gray-600">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default function StructuredData() {
    const data = {
        "@context": "https://schema.org",
        "@type": "FuneralHome",

        name: "Траурна агенция Вечност",
        telephone: "+359884395622",
        url: "https://vechnost-2024.vercel.app",
        image: "https://vechnost-2024.vercel.app/images/logo.png",

        priceRange: "750-850 EUR",
        openingHours: "Mo-Su 00:00-23:59",
        areaServed: "Sofia, Bulgaria",

        address: {
            "@type": "PostalAddress",
            streetAddress: "бул. Първа българска Армия 127",
            addressLocality: "София, Орландовци",
            postalCode: "1225",
            addressCountry: "BG",
        },

        geo: {
            "@type": "GeoCoordinates",
            latitude: "42.717604",
            longitude: "23.339096",
        },

        description:
            "Денонощна траурна агенция в София. Погребални услуги, кремации, транспорт на покойници и услуги за домашни любимци.",


        // sameAs: [
        //     "https://facebook.com/yourpage",
        //     "https://instagram.com/yourpage",
        // ],

        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Траурни услуги",
            itemListElement: [
                {
                    "@type": "OfferCatalog",
                    name: "Погребални услуги",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Организация на погребения",
                            },
                        },
                    ],
                },

                {
                    "@type": "OfferCatalog",
                    name: "Кремации",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Кремации в София",
                            },
                        },
                    ],
                },

                {
                    "@type": "OfferCatalog",
                    name: "Транспорт",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Транспорт на покойник в България и чужбина",
                            },
                        },
                    ],
                },

                {
                    "@type": "OfferCatalog",
                    name: "Специални услуги",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Кремации на домашни любимци",
                            },
                        },
                    ],
                },
            ],
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    )
}
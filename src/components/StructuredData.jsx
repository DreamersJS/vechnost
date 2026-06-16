export default function StructuredData() {
    const data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://vechnost-2024.vercel.app/#organization",

                name: "ВЕЧНОСТ 2024 ЕООД",
                legalName: "ВЕЧНОСТ 2024 ЕООД",
                taxID: "208065265",

                url: "https://vechnost-2024.vercel.app",
                logo: "https://vechnost-2024.vercel.app/images/logo.png",

                telephone: "+359884395622",

                founder: {
                    "@type": "Person",
                    name: "ЙОСИФ ТРЕНЧЕВ АЛЕКСИЕВ",
                },

                sameAs: [
                    "https://www.facebook.com/profile.php?id=61590728188060",
                ],
            },

            {
                "@type": ["FuneralHome", "LocalBusiness"],
                "@id": "https://vechnost-2024.vercel.app/#funeralhome",

                parentOrganization: {
                    "@id": "https://vechnost-2024.vercel.app/#organization",
                },

                name: "Траурна агенция Вечност",

                legalName: "ВЕЧНОСТ 2024 ЕООД",
                taxID: "208065265",

                url: "https://vechnost-2024.vercel.app",

                image:
                    "https://vechnost-2024.vercel.app/images/logo2.png",

                logo:
                    "https://vechnost-2024.vercel.app/images/logo.png",

                telephone: "+359884395622",

                contactPoint: [
                    {
                        "@type": "ContactPoint",
                        telephone: "+359884395622",
                        contactType: "customer service",
                    },
                    {
                        "@type": "ContactPoint",
                        telephone: "+359885413678",
                        contactType: "customer service",
                    },
                ],

                foundingDate: "2024-11-19",

                priceRange: "€750 - €850",
                currenciesAccepted: "EUR",
                paymentAccepted: "Cash",

                openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                    ],
                    opens: "00:00",
                    closes: "23:59",
                },

                address: {
                    "@type": "PostalAddress",
                    streetAddress: "бул. Първа българска Армия 127",
                    addressLocality: "София",
                    addressRegion: "София-град",
                    postalCode: "1225",
                    addressCountry: "BG",
                },

                geo: {
                    "@type": "GeoCoordinates",
                    latitude: 42.717604,
                    longitude: 23.339096,
                },

                serviceArea: [
                    {
                        "@type": "City",
                        name: "София",
                    },
                    {
                        "@type": "Country",
                        name: "България",
                    },
                ],

                areaServed: [
                    { "@type": "Place", name: "Надежда" },
                    { "@type": "Place", name: "Орландовци" },
                    { "@type": "Place", name: "Хаджи Димитър" },
                    { "@type": "Place", name: "Център" },
                ],

                employee: {
                    "@type": "Person",
                    name: "ЙОСИФ ТРЕНЧЕВ АЛЕКСИЕВ",
                    jobTitle: "Управител",
                },

                description:
                    "Денонощна траурна агенция в София. Погребални услуги, кремации, транспорт на покойници в България и чужбина, както и кремация на домашни любимци.",

                sameAs: [
                    "https://www.facebook.com/profile.php?id=61590728188060",
                ],

                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Траурни услуги",

                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Организация на погребения",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Кремации в София",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Транспорт на покойници",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Кремация на домашни любимци",
                            },
                        },
                    ],
                },
            },
        ],
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
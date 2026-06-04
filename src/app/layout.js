import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";

export const metadata = {
  metadataBase: new URL("https://vechnost-2024.vercel.app"),

  title: {
    default: "Траурна агенция Вечност",
    template: "%s | Траурна агенция Вечност",
  },

  description:
    "Денонощна траурна агенция Вечност предлага погребални услуги, кремации и транспорт на покойници в София и Орландовци.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://vechnost-2024.vercel.app",
    siteName: "Траурна агенция Вечност",
    title: "Траурна агенция Вечност",
    description:
      "Денонощни погребални услуги, кремации и транспорт в София.",
    images: [
      {
        url: "/images/logo2.png",
        width: 1200,
        height: 630,
        alt: "Траурна агенция Вечност",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Траурна агенция Вечност",
    description:
      "Денонощни погребални услуги, кремации и транспорт в София.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="bg">
      <body>
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}

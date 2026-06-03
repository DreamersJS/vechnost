import "./globals.css";
// import ClientLayout from "@/components/ClientLayout";
import StructuredData from "@/components/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";

export const metadata = {
  title: "Денонощна траурна агенция Вечност | Погребални услуги София и Орландовци",
  description: "Денонощна траурна агенция Вечност предлага погребални услуги в София и Орландовци."
};

export default function RootLayout({ children }) {

  return (
    <html lang="bg">
      <body>
        <StructuredData />
        <Header />
        {/* <ClientLayout> */}
        {children}
        {/* </ClientLayout> */}
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}

import Footer from "./Footer";
import Header from "./Header";

export default function ClientLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

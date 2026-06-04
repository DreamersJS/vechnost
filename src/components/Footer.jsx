import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <nav className="flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <Link
            href="/pogrebalni-uslugi-sofia"
            className="hover:text-gray-900 transition-colors"
          >
            Погребения
          </Link>

          <Link
            href="/kremacii-sofia"
            className="hover:text-gray-900 transition-colors"
          >
            Кремации
          </Link>
          <Link
            href="/transport-pokoinici"
            className="hover:text-gray-900 transition-colors"
          >
            Транспорт
          </Link>
          <Link
            href="/kamenodelski-uslugi"
            className="hover:text-gray-900 transition-colors"
          >
            Каменоделски услуги
          </Link>
          <Link
            href="/pochistvane-sled-smart"
            className="hover:text-gray-900 transition-colors"
          >
            Почистване
          </Link>
          <Link
            href="/traurni-artikuli"
            className="hover:text-gray-900 transition-colors"
          >
            Траурни артикули
          </Link>
          <Link
            href="/kontakt"
            className="hover:text-gray-900 transition-colors"
          >
            Контакт
          </Link>
          <Link
            href="/za-nas"
            className="hover:text-gray-900 transition-colors"
          >
            За нас
          </Link>
        </nav>

        <p className="mt-4 text-center text-xs text-gray-400">
          Траурна агенция Вечност
        </p>
      </div>
    </footer>
  );
};

export default Footer;
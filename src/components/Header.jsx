"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

                {/* Desktop nav */}
                <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/logo.png"
                            alt="Траурна агенция Вечност"
                            width={60}
                            height={60}
                            priority
                        />
                    </Link>
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
                </nav>

                {/* Hamburger button (mobile only) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1"
                    aria-label="Toggle menu"
                >
                    <span className="h-0.5 w-6 bg-black" />
                    <span className="h-0.5 w-6 bg-black" />
                    <span className="h-0.5 w-6 bg-black" />
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <nav className="flex flex-col px-4 py-3 text-sm text-gray-600">
                        <Link
                            href="/"
                            className="py-2 hover:text-gray-900"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/pogrebalni-uslugi-sofia"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-900 transition-colors"
                        >
                            Погребения
                        </Link>

                        <Link
                            href="/kremacii-sofia"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-900 transition-colors"
                        >
                            Кремации
                        </Link>
                        <Link
                            href="/transport-pokoinici"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-900 transition-colors"
                        >
                            Транспорт
                        </Link>
                        <Link
                            href="/kamenodelski-uslugi"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-900 transition-colors"
                        >
                            Каменоделски услуги
                        </Link>
                        <Link
                            href="/pochistvane-sled-smart"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-900 transition-colors"
                        >
                            Почистване
                        </Link>
                        <Link
                            href="/traurni-artikuli"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-900 transition-colors"
                        >
                            Траурни артикули
                        </Link>
                        <Link
                            href="/kontakt"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-900 transition-colors"
                        >
                            Контакт
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12">

        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Траурни услуги
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Пълна организация на погребения и кремации в София и страната
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-lg border border-gray-200 bg-white p-5 transition hover:border-gray-400 hover:shadow-sm"
            >
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-black">
                {service.title}
              </h3>

              <p className="mt-2 text-xs text-gray-600">
                {service.desc}
              </p>

              <span className="mt-3 inline-block text-xs text-gray-400 group-hover:text-gray-600">
                Виж повече →
              </span>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
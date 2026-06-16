import Link from "next/link";

const InternalLinks = ({links}) => {
    return (
        <section className="bg-white" aria-label="Internal links">
            <div className="mx-auto max-w-6xl px-4 py-10">

                <h2 className="text-lg font-semibold text-gray-900">
                    Други услуги
                </h2>

                <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
                    {links.map(l => (

                        <Link key={l.link} href={l.link} className="hover:text-black">
                            {l.name}
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
export default InternalLinks;


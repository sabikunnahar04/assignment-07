import Link from "next/link";

interface Navs {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {

    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories"
    );

    const data: Navs[] = await res.json();

    return (
        <nav className="border-y border-gray-200">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-center gap-7 py-2 overflow-x-auto">

                    {data.map((n) => (

                        <Link
                            key={n.id}
                            href={`/category/${n.slug}`}
                            className="whitespace-nowrap text-[11px] text-gray-700 hover:text-red-700"
                        >
                            <span className="mr-1">
                                {n.icon}
                            </span>

                            {n.nameBn}
                        </Link>

                    ))}

                </div>

            </div>

        </nav>
    );
};

export default NavLinks;
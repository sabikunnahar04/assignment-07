
type Props = {
    params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
    const { id } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        return <p className="p-6">পণ্যের তথ্য পাওয়া যায়নি।</p>;
    }

    const product = await res.json();
    console.log(JSON.stringify(product, null, 2));

    return (
        <main className="min-h-screen bg-[#f0f5f0] p-5 sm:p-8">
            <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm">
                <p className="mb-5 text-sm text-gray-500">
                    বাজার দর / {product.nameBn}
                </p>

                <div className="flex items-center gap-4">
                    <div className="text-5xl">{product.image}</div>
                    <div>
                        <h1 className="text-2xl font-bold">
                            {product.nameBn}
                        </h1>
                        <p className="text-gray-500">
                            {product.categoryNameBn}
                        </p>
                    </div>
                </div>

                <div className="my-6 rounded-xl bg-green-50 p-5">
                    <p className="text-sm text-gray-500">আজকের দাম</p>
                    <h2 className="text-3xl font-bold text-green-700">
                        ৳ {product.today}
                    </h2>
                </div>

                <h2 className="mb-4 text-lg font-bold">
                    বাজারদরের তুলনা
                </h2>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                        ["গতকাল", product.yesterday],
                        ["গত সপ্তাহ", product.lastWeek],
                        ["গত মাস", product.lastMonth],
                        ["দামের পরিবর্তন", `${product.change?.pct ?? 0}%`],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                        >
                            <p className="text-sm text-gray-500">{label}</p>
                            <p className="mt-2 font-bold text-gray-800">
                                {value !== undefined ? (
                                    label === "দামের পরিবর্তন" ? value : `৳ ${value}`
                                ) : "—"}
                            </p>
                        </div>
                    ))}
                </div>

             <h2 className="mb-4 mt-8 text-lg font-bold">
  বাজারভিত্তিক বিস্তারিত দাম
</h2>

<div className="overflow-x-auto">
  <table className="w-full text-left text-sm">
    <thead className="bg-gray-50 text-gray-500">
      <tr>
        <th className="p-3">বাজার</th>
        <th className="p-3">বিভাগ</th>
        <th className="p-3">সর্বনিম্ন</th>
        <th className="p-3">সর্বোচ্চ</th>
        <th className="p-3">গড়</th>
      </tr>
    </thead>

    <tbody>
      {product.markets?.map((market: {
        market: string;
        division: string;
        min: number;
        max: number;
      }, i: number) => (
        <tr key={i} className="border-b border-gray-100 hover:bg-green-50">
          <td className="p-3 font-medium">{market.market}</td>
          <td className="p-3 text-gray-500">{market.division}</td>
          <td className="p-3">৳ {market.min}</td>
          <td className="p-3">৳ {market.max}</td>
          <td className="p-3 font-semibold text-green-700">
            ৳ {Math.round((market.min + market.max) / 2)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
            </div>
        </main>
    );
}

type Market = {
    market: string;
    division: string;
    min: number;
    max: number;
};

type ProductChange = {
    pct?: number;
};

type Product = {
    nameBn: string;
    categoryNameBn: string;
    image: string;
    today: number;
    yesterday?: number;
    lastWeek?: number;
    lastMonth?: number;
    change?: ProductChange;
    markets?: Market[];
};

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
        return <p className="p-6">পণ্যের তথ্য পাওয়া যায়নি।</p>;
    }

    const product: Product = await res.json();

    
    const minPrices = product.markets?.map((m) => m.min) || [];
    const maxPrices = product.markets?.map((m) => m.max) || [];
    
    const overallMin = minPrices.length ? Math.min(...minPrices) : product.today;
    const overallMax = maxPrices.length ? Math.max(...maxPrices) : product.today;

    const sumAverage = product.markets?.reduce(
        (acc: number, m: Market) => acc + (m.min + m.max) / 2,
        0
    ) ?? 0;
    
    const overallAvg = product.markets?.length
        ? Math.round(sumAverage / product.markets.length)
        : product.today;

    const priceDiff = product.today - (product.yesterday ?? product.today);
    const isPriceUp = priceDiff >= 0;

    return (
        <main className="min-h-screen bg-[#f0f5f0] p-5 sm:p-8">
            <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm">
                
                
                <p className="mb-5 text-sm text-gray-500">
                    বাজার দর / {product.nameBn}
                </p>

               
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="text-5xl">{product.image}</div>
                        <div>
                            <h1 className="text-2xl font-bold">
                                {product.nameBn}
                            </h1>
                            <p className="text-gray-500">
                                প্রতি কেজি - {product.categoryNameBn}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                গতকালের তুলনায় আজ দাম{" "}
                                <span className={isPriceUp ? "font-semibold text-red-600" : "font-semibold text-green-600"}>
                                    {isPriceUp ? `বেড়েছে - ${Math.abs(priceDiff)} টাকা` : `কমেছে - ${Math.abs(priceDiff)} টাকা`}
                                </span>
                            </p>
                        </div>
                    </div>

                  
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center sm:min-w-[160px]">
                        <p className="text-sm text-gray-500">আজকের দাম</p>
                        <h2 className="text-3xl font-bold text-green-700">
                            ৳ {product.today}
                        </h2>
                        <p className="text-xs text-gray-400">টাকা / কেজি</p>
                        <p className="mt-1 text-xs font-semibold text-red-600">
                            ▲ {product.change?.pct ?? 0}%
                        </p>
                    </div>
                </div>

           
                <div className="mt-8">
                    <h2 className="mb-4 text-lg font-bold">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {/* সর্বনিম্ন দাম */}
                        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                            <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
                            <h3 className="mt-2 text-2xl font-bold text-emerald-600">
                                ৳ {overallMin}
                            </h3>
                            <p className="mt-2 text-xs text-gray-400">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>

                       
                        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                            <p className="text-sm text-gray-500">সর্বাধিক দাম</p>
                            <h3 className="mt-2 text-2xl font-bold text-red-600">
                                ৳ {overallMax}
                            </h3>
                            <p className="mt-2 text-xs text-gray-400">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>

                        
                        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                            <p className="text-sm text-gray-500">গড় দাম</p>
                            <h3 className="mt-2 text-2xl font-bold text-green-700">
                                ৳ {overallAvg}
                            </h3>
                            <p className="mt-2 text-xs text-gray-400">
                                প্রতি কেজি-এর হিসাবে
                            </p>
                        </div>
                    </div>
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
                                <th className="p-3">গড়</th>
                            </tr>
                        </thead>

                        <tbody>
                            {product.markets?.map((market, i) => (
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

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`
  );

  const product = await res.json();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="rounded-xl border p-6">
        <div className="text-6xl mb-4">
          {product.image}
        </div>

        <h1 className="text-3xl font-bold mb-2">
          {product.nameBn}
        </h1>

        <p className="text-gray-500 mb-4">
          {product.categoryNameBn}
        </p>

        <p className="text-xl font-bold">
          আজকের দাম: ৳ {product.today}
        </p>

        <p className="mt-2">
          দাম পরিবর্তন: {product.change?.pct}%
        </p>
      </div>
    </div>
  );
}


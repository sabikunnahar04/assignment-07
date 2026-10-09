
import AllProducts from "@/component/AllProduct";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

 
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${category}`
  );

  const data = await res.json();

  
  const categoriesRes = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  const categories = await categoriesRes.json();

  const currentCategory = categories.find(
    (n: { slug: string; nameBn: string }) => n.slug === category
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">
        {currentCategory?.nameBn || category}
      </h2>

      <AllProducts products={data} />
    </div>
  );
}



import Link from "next/link";
type Product = {
  id: string | number;
  image: string;
  nameBn: string;
  categoryNameBn: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
};

export default function IncreasedProducts({
  products,
}: {
  products: Product[];
}) {
  const increasedProducts = products
    .filter((product) => product.change?.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="products-section">
      <h2 className="section-title">
        <span style={{ color: "red" }}>▲</span> আজ দাম বেড়েছে
      </h2>

      <div className="product-grid">
        {increasedProducts.map((product) => (
          <Link
  href={`/product/${product.id}`}
  className="product-card block"
  key={product.id}
>
            <div className="product-info">
              <div className="product-image">
                {product.image}
              </div>

              <div>
                <h3>{product.nameBn}</h3>
                <p className="category">
                  {product.categoryNameBn}
                </p>
              </div>
            </div>

            <div className="price-row">
              <div>
                <p className="price-label">আজকের দাম</p>
                <h3 className="price">৳ {product.today}</h3>
              </div>

              <span className="price-up">
                ↑ {product.change.pct}%
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


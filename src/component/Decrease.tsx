
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

export default function DecreasedProducts({
  products,
}: {
  products: Product[];
}) {
  const decreasedProducts = products
    .filter((product) => product.change?.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <section className="products-section">
      <h2 className="section-title">
        <span style={{ color: "green" }}>▼</span> আজ দাম কমেছে
      </h2>

      <div className="product-grid">
        {decreasedProducts.map((product) => (
          <div className="product-card" key={product.id}>
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

              <span className="price-down">
                ↓ {product.change.pct}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


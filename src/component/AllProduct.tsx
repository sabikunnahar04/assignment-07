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

export default function AllProducts({
    products,
}: {
    products: Product[];
}) {
    return (
        <section className="products-section">
            <h2 className="section-title">🛒 সব পণ্য</h2>

            <div className="product-grid">
                {products.map((product) => (
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

                            {product.change.dir === "up" ? (
                                <span className="price-up">
                                    ↑ {product.change.pct}%
                                </span>
                            ) : product.change.dir === "down" ? (
                                <span className="price-down">
                                    ↓ {product.change.pct}%
                                </span>
                            ) : (
                                <span className="price-stable">
                                    0.00%
                                </span>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}


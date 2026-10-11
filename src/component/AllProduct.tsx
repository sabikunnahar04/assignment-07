
"use client";

import { useState } from "react";
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

    const [sortBy, setSortBy] = useState("default");

    const sortedProducts = [...products];

    if (sortBy === "low") {
        sortedProducts.sort((a, b) => a.today - b.today);
    } else if (sortBy === "high") {
        sortedProducts.sort((a, b) => b.today - a.today);
    } else if (sortBy === "name") {
        sortedProducts.sort((a, b) =>
            a.nameBn.localeCompare(b.nameBn, "bn")
        );
    }

    return (
        <section className="products-section">
            <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="section-title">🛒 সব পণ্য</h2>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="max-width-[190px] rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-green-600"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low">দাম: কম থেকে বেশি</option>
                    <option value="high">দাম: বেশি থেকে কম</option>
                    <option value="name">নাম অনুযায়ী</option>
                </select>
            </div>

            <div className="product-grid">
                {sortedProducts.map((product) => (
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


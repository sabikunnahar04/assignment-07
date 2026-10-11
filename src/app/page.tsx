

import Hero from "@/component/Hero";
import IncreasedProducts from "@/component/Increase";

import DecreasedProducts from "@/component/Decrease";
import AllProducts from "@/component/AllProduct";

export default async function Home() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  const data = await res.json();

  return (
    <div>
      
      <Hero />

      <IncreasedProducts products={data} />
      <DecreasedProducts products={data}/>
      <AllProducts products={data}/>
    </div>
  );
}
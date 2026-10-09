

// import Hero from "@/component/Hero";
// import IncreasedProducts from "@/component/Increase";
import Marquee from "@/component/Marquee";

export default async function Home() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  const data = await res.json();

  return (
    <div>
      <Marquee />
      {/* <Hero /> */}

      {/* <IncreasedProducts products={data} /> */}
    </div>
  );
}
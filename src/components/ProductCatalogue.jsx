import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductCatalogue() {
  return (
    <section id="products" className="relative py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] tracking-[0.3em] text-falcon-green/80">
            CATALOGUE
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
            Every Product, One Discord Away
          </h2>
          <p className="font-body text-gray-400 mt-3 max-w-lg mx-auto">
            {products.length} titles supported. Pick a card, join the Discord,
            and a teammate will get you set up.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export default function ProductCard({ product }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="corner-brackets group relative w-72 h-29 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-falcon-green/70 hover:glow-green-strong"
    >
      <span className="corner-bracket tl opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="corner-bracket tr opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="corner-bracket bl opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="corner-bracket br opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* gradient placeholder — always present, shows through until/unless an image loads */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${product.from}, ${product.to} 70%)`,
        }}
      >
        <div className="absolute inset-0 hud-grid opacity-40" />
        <span
          className="absolute -right-2 -bottom-3 font-display text-white/6 text-4xl select-none"
          aria-hidden="true"
        >
          {product.code}
        </span>
      </div>

      {/* real artwork — drop a file in public/products to replace the placeholder */}
      {product.image && !imageFailed && (
        <img
          src={product.image}
          alt=""
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

      {/* Discord badge overlay on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
        <span className="font-mono text-[10px] tracking-[0.15em] bg-falcon-purple text-white px-2.5 py-1.5 rounded-md glow-purple">
          GET VIA DISCORD
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-2.5">
        <span className="underline-slide inline-block font-heading font-semibold text-sm text-white leading-snug">
          {product.name}
        </span>
        <div className="font-mono text-[9px] tracking-[0.15em] text-gray-400 mt-0.5">
          {product.tag.toUpperCase()}
        </div>
      </div>
    </a>
  );
}

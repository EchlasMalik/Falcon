import ContactForm from "./ContactForm";
import DiscordIcon from "./DiscordIcon";
import CountUp from "./CountUp";

const DISCORD_URL = "https://discord.com/invite/VNx4RqV5A6";
const STORE_URL = "https://falconaiming.mysellauth.com/";

const stats = [
  { value: 4.97, decimals: 2, suffix: "", label: "Feedback Rating" },
  { value: 3000, decimals: 0, suffix: "+", label: "Products Sold" },
  { value: 200, decimals: 0, suffix: "+", label: "Total Customers" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(57,255,20,0.08), transparent 45%), radial-gradient(circle at 85% 15%, rgba(88,101,242,0.10), transparent 40%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-falcon-green/25 bg-falcon-green/5 px-3.5 py-1.5 mb-8">
            <span className="led-dot" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-falcon-green/90">
              STATUS: ONLINE — ALL SYSTEMS OPERATIONAL
            </span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="radar-ring w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center shrink-0">
              <img
                src="/FALCON-3.png"
                alt="Falcon Aiming"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain relative z-10"
              />
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-falcon-green/80 mb-1">
                // FALCON_AIMING.SYS
              </div>
              <div className="font-heading font-bold text-xl text-white">
                FALCON AIMING
              </div>
            </div>
          </div>

          <h1 className="font-heading font-bold text-[13vw] leading-[0.95] sm:text-6xl lg:text-7xl text-white mb-6">
            DOMINATE
            <br />
            <span className="text-falcon-green text-glow">EVERY</span>
            <br />
            MATCH.
          </h1>

          <p className="font-body text-gray-400 text-base sm:text-lg max-w-md mb-9 leading-relaxed">
            Precision-tuned performance software. Safety-tested builds,
            real-time updates, and stream-safe design — engineered for
            serious players.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-6 py-3.5 rounded-md bg-falcon-purple text-white hover:brightness-110 transition glow-purple"
            >
              <DiscordIcon className="w-4 h-4" />
              JOIN DISCORD
            </a>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-6 py-3.5 rounded-md border border-falcon-green/40 text-falcon-green hover:bg-falcon-green/10 transition"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
                <path d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20" strokeLinecap="round" />
              </svg>
              View Store
            </a>
          </div>

          <div className="flex flex-wrap items-stretch gap-x-8 gap-y-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col ${i > 0 ? "pl-8 border-l border-white/10" : ""}`}
              >
                <span className="font-display text-2xl sm:text-3xl text-falcon-green text-glow">
                  <CountUp end={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </span>
                <span className="font-mono text-[11px] tracking-[0.15em] text-gray-400 mt-1">
                  {stat.label.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import CornerBrackets from "./CornerBrackets";
import CountUp from "./CountUp";
import DiscordIcon from "./DiscordIcon";

const DISCORD_URL = "https://discord.com/invite/VNx4RqV5A6";

const stats = [
  { label: "Support Response", value: 15, suffix: " min avg" },
  { label: "Active Users", value: 12480, suffix: "+" },
];

const features = [
  {
    title: "24/7 Support",
    description: "A team on hand around the clock in our Discord for setup and issues.",
    icon: <path d="M12 8v4l3 2M12 21a9 9 0 100-18 9 9 0 000 18z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Safety & Quality",
    description: "Every build goes through safety testing before it ever ships.",
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Always Up to Date",
    description: "Builds are refreshed as soon as a game patches, so you're never left behind.",
    icon: <path d="M4 4v6h6M20 20v-6h-6M4.5 15a8 8 0 0014.9 3.3M19.5 9A8 8 0 004.6 5.7" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Secure & Private",
    description: "Your data and purchase history stay private, always.",
    icon: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Regular Updates",
    description: "Ongoing improvements ship as we tune every product over time.",
    icon: <path d="M12 4v16m8-8H4" strokeLinecap="round" />,
  },
  {
    title: "Stream Safe",
    description: "Overlays built to stay off-camera so you can stream with confidence.",
    icon: <path d="M15 10l5-3v10l-5-3M4 6h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

export default function WhyFalcon() {
  return (
    <section id="why-falcon" className="relative py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] tracking-[0.3em] text-falcon-green/80">
            WHY FALCON
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
            Built for Players Who Take It Seriously
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-16 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="corner-brackets glass rounded-xl p-8 text-center relative"
            >
              <CornerBrackets />
              <div className="font-display text-3xl sm:text-4xl text-falcon-green text-glow mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs tracking-[0.2em] text-gray-400">
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="corner-brackets glass rounded-xl p-6 relative hover:border-falcon-green/40 transition-colors"
            >
              <CornerBrackets />
              <div className="w-10 h-10 rounded-md border border-falcon-green/25 flex items-center justify-center text-falcon-green mb-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {f.icon}
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-base text-white mb-2">
                {f.title}
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-heading text-white text-xl">
            Ready to get set up?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              href="#products"
              className="font-heading font-semibold text-sm px-6 py-3.5 rounded-md border border-falcon-green/40 text-falcon-green hover:bg-falcon-green/10 transition"
            >
              VIEW PRODUCTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

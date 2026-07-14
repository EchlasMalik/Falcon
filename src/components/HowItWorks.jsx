import CornerBrackets from "./CornerBrackets";

const steps = [
  {
    number: "01",
    title: "Browse the Catalogue",
    description: "Check out the full product lineup and find the build for your game.",
    icon: (
      <path d="M4 5h16M4 12h16M4 19h10" strokeLinecap="round" />
    ),
  },
  {
    number: "02",
    title: "Join Our Discord",
    description: "Required to purchase — this is where every order is handled.",
    icon: (
      <path d="M8 12a4 4 0 108 0 4 4 0 00-8 0zM3 20c1.5-3.5 5-5 9-5s7.5 1.5 9 5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    number: "03",
    title: "Open a Ticket",
    description: "Head to the #purchase channel and open a ticket for your product.",
    icon: (
      <path d="M4 4h16v12H8l-4 4V4z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    number: "04",
    title: "Get Your Product",
    description: "Your team delivers everything you need right in the ticket.",
    icon: (
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] tracking-[0.3em] text-falcon-green/80">
            PROCESS
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3">
            How It Works
          </h2>
          <p className="font-body text-gray-400 mt-3 max-w-lg mx-auto">
            Four steps between you and your next build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="corner-brackets glass rounded-xl p-6 flex flex-col gap-4 relative hover:border-falcon-green/40 transition-colors"
            >
              <CornerBrackets />
              <div className="flex items-center justify-between">
                <span className="font-display text-falcon-green/70 text-xl">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-md border border-falcon-green/25 flex items-center justify-center text-falcon-green">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {step.icon}
                  </svg>
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-white">
                {step.title}
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

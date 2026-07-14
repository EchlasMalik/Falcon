import { useEffect, useState } from "react";
import DiscordIcon from "./DiscordIcon";

const DISCORD_URL = "https://discord.com/invite/VNx4RqV5A6";
const STORE_URL = "https://falconaiming.mysellauth.com/";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Falcon", href: "#why-falcon" },
];

const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export default function Footer() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink((v) => !v), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative border-t border-falcon-green/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center mb-4">
              <img
                src="/FALCON-3.png"
                alt="Falcon Aiming"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="font-body text-sm text-gray-400 max-w-xs leading-relaxed">
              Precision tools for serious players. Safety tested, stream safe,
              always current — delivered through Discord.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.2em] text-gray-500 mb-4">
              NAVIGATE
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-falcon-green transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.2em] text-gray-500 mb-4">
              GET STARTED
            </h4>
            <div className="flex flex-col gap-3 items-start">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-4 py-2.5 rounded-md bg-falcon-purple text-white hover:brightness-110 transition glow-purple"
              >
                <DiscordIcon className="w-4 h-4" />
                JOIN DISCORD
              </a>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-[0.15em] text-gray-400 hover:text-white transition-colors"
              >
                STORE →
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-1 font-mono text-xs text-gray-500">
            <span>© {new Date().getFullYear()} Falcon Aiming. All rights reserved.</span>
            <span className={`text-falcon-green ${blink ? "opacity-100" : "opacity-0"}`}>
              _
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

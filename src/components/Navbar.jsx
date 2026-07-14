import { useEffect, useState } from "react";
import DiscordIcon from "./DiscordIcon";

const DISCORD_URL = "https://discord.com/invite/VNx4RqV5A6";
const STORE_URL = "https://falconaiming.mysellauth.com/";

const links = [
  { label: "PRODUCTS", href: "#products" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "WHY FALCON", href: "#why-falcon" },
  { label: "LOADERS", href: "https://t.me/+aWRQAUDRUw9lZjk0" },

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-falcon-bg/85 backdrop-blur-md border-b border-falcon-green/15" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-28">
        <a href="#top" className="flex items-center shrink-0">
          <img
            src="/FALCON-3.png"
            alt="Falcon Aiming"
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-[0.2em] text-gray-300 hover:text-falcon-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.2em] text-gray-300 hover:text-white border border-white/15 hover:border-white/30 rounded-md px-4 py-2.5 transition-colors"
          >
            STORE
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-5 py-2.5 rounded-md bg-falcon-purple text-white hover:brightness-110 transition glow-purple"
          >
            <DiscordIcon className="w-4 h-4" />
            JOIN DISCORD
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden text-gray-200 p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden glass border-t border-falcon-green/15 px-5 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-[0.2em] text-gray-300 hover:text-falcon-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.2em] text-gray-300 hover:text-white text-center py-2"
            >
              STORE
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-heading font-semibold text-sm px-5 py-3 rounded-md bg-falcon-purple text-white glow-purple"
            >
              <DiscordIcon className="w-4 h-4" />
              JOIN DISCORD
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

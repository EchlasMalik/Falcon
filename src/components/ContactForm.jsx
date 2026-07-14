import { useState } from "react";
import CornerBrackets from "./CornerBrackets";
import DiscordIcon from "./DiscordIcon";

const initialForm = { name: "", email: "", discord: "", message: "" };

const fieldClass =
  "bg-transparent border-0 border-b border-white/15 focus:border-falcon-green/70 rounded-none px-0 pb-2.5 text-sm text-white placeholder:text-gray-600 outline-none transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="corner-brackets glass rounded-2xl p-6 sm:p-8 relative">
      <CornerBrackets corners={["tl", "br"]} />

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-falcon-green/80 mb-2">
            // SUPPORT REQUEST
          </div>
          <h3 className="font-heading font-bold text-xl text-white">Contact Support</h3>
        </div>
        <div className="sm:text-right shrink-0">
          <div className="font-mono text-[10px] tracking-[0.15em] text-gray-500">
            TICKET_ID: SUP-001
          </div>
          <div className="flex items-center sm:justify-end gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-falcon-green" />
            <span className="font-mono text-[10px] tracking-[0.15em] text-falcon-green/80">
              SECURE
            </span>
          </div>
        </div>
      </div>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
          <div className="w-14 h-14 rounded-full border border-falcon-green/40 flex items-center justify-center glow-green">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-falcon-green" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-heading text-white text-lg">Message received.</p>
          <p className="font-mono text-xs text-gray-400 max-w-xs">
            We'll reply by email, but for a faster response join our Discord
            and open a support ticket — our team is on around the clock.
          </p>
          <a
            href="https://discord.com/invite/VNx4RqV5A6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-5 py-2.5 rounded-md bg-falcon-purple text-white hover:brightness-110 transition glow-purple"
          >
            <DiscordIcon className="w-4 h-4" />
            JOIN DISCORD & OPEN A TICKET
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] tracking-[0.2em] text-gray-400">
              YOUR NAME<span className="text-falcon-green">*</span>
            </label>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] tracking-[0.2em] text-gray-400">
              EMAIL ADDRESS<span className="text-falcon-green">*</span>
            </label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] tracking-[0.2em] text-gray-400">
              DISCORD TAG<span className="text-falcon-green">*</span>
            </label>
            <input
              required
              type="text"
              name="discord"
              value={form.discord}
              onChange={handleChange}
              placeholder="username#0000"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] tracking-[0.2em] text-gray-400">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={2}
              placeholder="Describe your issue or question"
              className={`${fieldClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 font-heading font-semibold text-sm px-5 py-3 rounded-md bg-falcon-green text-black hover:brightness-110 transition glow-green disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                SENDING...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 3L11 13M21 3l-7 18-4-8-8-4 19-6z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                SEND MESSAGE
              </>
            )}
          </button>

          {status === "error" && (
            <div className="flex flex-col items-center gap-2 -mt-1">
              <p className="font-mono text-[11px] text-red-400 text-center">
                Something went wrong sending your message. Please try again,
                or reach us directly on Discord.
              </p>
              <a
                href="https://discord.com/invite/VNx4RqV5A6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-falcon-purple hover:text-white transition-colors"
              >
                <DiscordIcon className="w-3.5 h-3.5" />
                Open Discord instead
              </a>
            </div>
          )}

          <p className="font-mono text-[9px] tracking-widest text-gray-600 text-center">
            ENCRYPTED TRANSMISSION // NO DATA SHARED WITH THIRD PARTIES
          </p>
        </form>
      )}
    </div>
  );
}

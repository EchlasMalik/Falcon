// Vercel serverless function. Keeps the Discord webhook URL server-side —
// it must never be exposed to the browser, or anyone could post to the channel.
// Set DISCORD_WEBHOOK_URL in Vercel Project Settings -> Environment Variables.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not configured");
    return res.status(500).json({ error: "Server misconfigured" });
  }

  const { name, email, discord, message } = req.body ?? {};

  if (!name || !email || !discord) {
    return res.status(400).json({ error: "Name, email, and Discord tag are required" });
  }

  const embed = {
    title: "New Support Request",
    color: 0x39ff14,
    fields: [
      { name: "Name", value: String(name).slice(0, 256), inline: true },
      { name: "Email", value: String(email).slice(0, 256), inline: true },
      { name: "Discord Tag", value: discord ? String(discord).slice(0, 256) : "—", inline: true },
      { name: "Message", value: message ? String(message).slice(0, 1024) : "—" },
    ],
    timestamp: new Date().toISOString(),
  };

  try {
    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!discordRes.ok) {
      const text = await discordRes.text();
      console.error("Discord webhook error:", discordRes.status, text);
      return res.status(502).json({ error: "Failed to deliver message" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to reach Discord webhook:", err);
    return res.status(502).json({ error: "Failed to deliver message" });
  }
}

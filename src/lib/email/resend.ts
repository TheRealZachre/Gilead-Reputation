export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
}

function getFromAddress(): string | null {
  const from = process.env.AUTH_EMAIL_FROM?.trim();
  if (!from) return null;

  if (
    (from.startsWith('"') && from.endsWith('"')) ||
    (from.startsWith("'") && from.endsWith("'"))
  ) {
    return from.slice(1, -1);
  }

  return from;
}

/**
 * Sends an email through the Resend REST API using fetch (no SDK dependency,
 * works on the Cloudflare Workers runtime). Returns false when the provider is
 * not configured so callers can fall back to showing the reset link on screen.
 */
export async function sendResendEmail(input: SendEmailInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = getFromAddress();

  if (!apiKey || !from) return false;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: input.to,
        subject: input.subject,
        html: input.html,
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiting map (IP -> timestamps array)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Basic HTML sanitizer to prevent injection / XSS in mail clients
function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "anonymous";
    const now = Date.now();
    const timestamps = (rateLimitMap.get(ip) || []).filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW_MS
    );

    if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Rate limit exceeded. Please wait a few minutes before dispatching another message.",
        },
        { status: 429 }
      );
    }

    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    // 2. Parse & Validate Payload
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload provided." },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name field is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email field is required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message field is required." },
        { status: 400 }
      );
    }

    // Length boundary checks
    if (name.length > 120) {
      return NextResponse.json(
        { success: false, error: "Name must be under 120 characters." },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        { success: false, error: "Email must be under 254 characters." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message must be under 5000 characters." },
        { status: 400 }
      );
    }

    // Sanitize values
    const cleanName = sanitizeInput(name.trim());
    const cleanEmail = email.trim();
    const cleanMessage = sanitizeInput(message.trim());

    // 3. Resend Initialization
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "mdeepakkumar443@gmail.com";

    if (!apiKey) {
      console.error("[Contact API] RESEND_API_KEY environment variable is missing.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Mail dispatch service is currently unconfigured. Please contact directly via email.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // 4. Dispatch Email
    const emailSubject = `[Portfolio Contact] New message from ${cleanName}`;

    const textContent = `
NEW INQUIRY RECEIVED VIA PORTFOLIO
==================================

From: ${cleanName}
Email: ${cleanEmail}
Date: ${new Date().toUTCString()}

Message:
--------
${message.trim()}
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Portfolio Inquiry</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F7FA; color: #192434;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(25, 36, 52, 0.12); padding: 32px;">
    
    <!-- Top Bar -->
    <div style="border-bottom: 1px solid rgba(25, 36, 52, 0.08); padding-bottom: 16px; margin-bottom: 24px;">
      <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; color: #0B46A3; font-weight: 600;">
        PORTFOLIO CONTACT DISPATCH
      </span>
      <h2 style="margin: 8px 0 0 0; font-size: 20px; font-weight: 300; color: #192434;">
        New Message from ${cleanName}
      </h2>
    </div>

    <!-- Sender Details -->
    <div style="background-color: #F4F7FA; border: 1px solid rgba(25, 36, 52, 0.06); padding: 16px; margin-bottom: 24px; font-size: 13px; font-family: monospace;">
      <p style="margin: 0 0 8px 0;"><strong>Sender:</strong> ${cleanName}</p>
      <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${cleanEmail}" style="color: #0B46A3; text-decoration: none;">${cleanEmail}</a></p>
      <p style="margin: 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</p>
    </div>

    <!-- Message Content -->
    <div style="margin-bottom: 28px;">
      <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.08em; color: #64748B; display: block; margin-bottom: 8px;">
        MESSAGE BODY
      </span>
      <div style="font-size: 15px; line-height: 1.6; color: #192434; white-space: pre-wrap; background: #FAFBFD; padding: 16px; border-left: 2px solid #0B46A3;">
${cleanMessage}
      </div>
    </div>

    <!-- Action Footer -->
    <div style="border-top: 1px solid rgba(25, 36, 52, 0.08); padding-top: 16px; text-align: center;">
      <a href="mailto:${cleanEmail}" style="display: inline-block; padding: 10px 20px; background-color: #0B46A3; color: #ffffff; text-decoration: none; font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em;">
        Reply to ${cleanName} &rarr;
      </a>
      <p style="margin: 16px 0 0 0; font-size: 11px; font-family: monospace; color: #94A3B8;">
        Sent via Deepak Kumar Majhi Portfolio Contact Form
      </p>
    </div>

  </div>
</body>
</html>
    `.trim();

    let sendResult = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: cleanEmail,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    // If Resend trial account restriction is triggered (destination email differs from registered Resend account email)
    if (
      sendResult.error &&
      sendResult.error.message?.includes("You can only send testing emails to your own email address")
    ) {
      const match = sendResult.error.message.match(/\(([^)]+)\)/);
      const fallbackEmail = match ? match[1] : "deepakkumarsukhoi7@gmail.com";
      console.warn(
        `[Contact API] Resend trial mode active. Forwarding to registered account email: ${fallbackEmail}`
      );

      sendResult = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: fallbackEmail,
        replyTo: cleanEmail,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      });
    }

    if (sendResult.error) {
      console.error("[Contact API] Resend API error:", sendResult.error);
      return NextResponse.json(
        {
          success: false,
          error: sendResult.error.message || "Failed to dispatch email via provider.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message dispatched successfully.",
        id: sendResult.data?.id,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}

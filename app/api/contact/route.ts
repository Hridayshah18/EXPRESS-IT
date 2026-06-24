import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const receiverEmail = process.env.CONTACT_TO_EMAIL ?? "expressit.myra@gmail.com";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  newsletter?: unknown;
  message?: unknown;
};

function clean(value: unknown, maxLength = 1000) {
  if (typeof value !== "string") return "";

  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTransporter() {
  const smtpUser = process.env.SMTP_USER ?? process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS ?? process.env.GMAIL_APP_PASSWORD;

  if (!smtpUser || !smtpPass) {
    return null;
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);

  if (smtpHost) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid contact request." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 160);
  const phone = clean(payload.phone, 40);
  const newsletter = clean(payload.newsletter, 160);
  const message = clean(payload.message, 3000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !message) {
    return NextResponse.json(
      { message: "Please share your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const transporter = getTransporter();

  if (!transporter) {
    return NextResponse.json(
      { message: "Email delivery is not configured yet." },
      { status: 500 },
    );
  }

  const subject = `EXPRESS IT enquiry from ${name}`;
  const plainText = [
    "New EXPRESS IT website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not shared"}`,
    `Newsletter email: ${newsletter || "Not shared"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New EXPRESS IT website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not shared")}</p>
      <p><strong>Newsletter email:</strong> ${escapeHtml(newsletter || "Not shared")}</p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"EXPRESS IT Website" <${process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER ?? process.env.GMAIL_USER}>`,
      to: receiverEmail,
      replyTo: `${name} <${email}>`,
      subject,
      text: plainText,
      html,
    });

    return NextResponse.json({ message: "Message sent." });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json(
      { message: "Message could not be sent right now." },
      { status: 500 },
    );
  }
}

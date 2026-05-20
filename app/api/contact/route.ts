import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function safe(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

function buildEmailHtml(fromEmail: string, userMessage: string): string {
  const date = new Date().toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const safeEmail   = safe(fromEmail);
  const safeMessage = safe(userMessage);

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Nuevo mensaje — Portafolio Diego Aguirre</title>
</head>
<body style="margin:0;padding:0;background-color:#060a12;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background:#060a12;padding:48px 16px;">
    <tr>
      <td align="center">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
          style="max-width:580px;">

          <!-- Top bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#1d4ed8,#0284c7,#06b6d4);height:5px;border-radius:16px 16px 0 0;"></td>
          </tr>

          <!-- Card body -->
          <tr>
            <td style="background:#0d1526;border:1px solid #1e3050;border-top:none;border-radius:0 0 16px 16px;padding:40px 40px 36px;">

              <!-- Header -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:28px;">
                    <div style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#0284c7);border-radius:50%;width:64px;height:64px;text-align:center;line-height:64px;font-size:28px;margin-bottom:20px;">&#9993;</div>
                    <h1 style="margin:0;font-size:24px;font-weight:800;color:#f1f5f9;letter-spacing:-0.3px;line-height:1.3;">
                      &#161;Nuevo Mensaje desde<br>
                      <span style="color:#38bdf8;">tu Portafolio!</span>
                    </h1>
                    <p style="margin:10px 0 0;color:#475569;font-size:13px;letter-spacing:0.3px;">
                      Alguien est&#225; interesado en trabajar contigo
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="height:1px;background:linear-gradient(90deg,transparent,#1e3050 40%,#1e3a5f 50%,#1e3050 60%,transparent);"></td>
                </tr>
              </table>

              <!-- Email field -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;color:#3b82f6;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">
                      &#128231;&nbsp; Email del Cliente
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:rgba(30,58,95,0.35);border:1px solid #1e3a5f;border-left:3px solid #3b82f6;border-radius:8px;padding:14px 18px;">
                          <a href="mailto:${safeEmail}" style="color:#38bdf8;font-size:15px;font-weight:600;text-decoration:none;">${safeEmail}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message field -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;color:#06b6d4;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">
                      &#128172;&nbsp; Mensaje
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:rgba(6,182,212,0.05);border:1px solid #164e63;border-left:3px solid #06b6d4;border-radius:8px;padding:18px 20px 22px;">
                          <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.85;word-break:break-word;">${safeMessage}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="height:1px;background:linear-gradient(90deg,transparent,#1e3050 40%,#1e3a5f 50%,#1e3050 60%,transparent);"></td>
                </tr>
              </table>

              <!-- Footer -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin:0;color:#334155;font-size:12px;line-height:1.8;">
                      &#128336;&nbsp;Enviado el&nbsp;<strong style="color:#475569;">${date}</strong><br>
                      <span style="font-size:11px;">Diego Aguirre &middot; Portafolio Profesional</span>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Bottom bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#1d4ed8,#0284c7,#06b6d4);height:3px;border-radius:0 0 16px 16px;"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; message?: string };
    const { email, message } = body;

    if (!email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Los campos email y mensaje son requeridos." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portafolio Diego Aguirre" <${process.env.GMAIL_USER}>`,
      to: "diegoroman344z@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje desde tu portafolio — ${email}`,
      html: buildEmailHtml(email, message),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Error al enviar correo:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}

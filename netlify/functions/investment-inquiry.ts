import { Handler, HandlerResponse } from "@netlify/functions";

const handler: Handler = async (event, context): Promise<HandlerResponse> => {
  // Handle CORS preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { data, timestamp } = JSON.parse(event.body || "{}");
    const {
      name,
      email,
      investmentAmount,
      message,
      language,
    } = data;

    // Validate required fields
    if (!name || !email || !investmentAmount) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          error: "Missing required fields",
          required: ["name", "email", "investmentAmount"],
        }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: "Invalid email format" }),
      };
    }

    // Send email using Netlify Forms or external service
    // For now, we'll log and return success
    console.log("Investment Inquiry Received:", {
      name,
      email,
      investmentAmount,
      message,
      language: language || 'en',
      timestamp: new Date(timestamp).toISOString(),
    });

    // Prepare email content
    const emailContent = `
New Investment Inquiry from prompt.tax

INVESTOR INFORMATION:
Name: ${name}
Email: ${email}
Investment Range: ${investmentAmount}

MESSAGE:
${message || 'No message provided'}

SUBMISSION DETAILS:
Timestamp: ${new Date(timestamp).toLocaleString()}
Language: ${language || 'en'}
User Agent: ${event.headers["user-agent"] || "unknown"}
IP: ${event.headers["x-forwarded-for"] || event.headers["client-ip"] || "unknown"}

---
This message was sent from the prompt.tax investor contact form.
    `.trim();

    // Log for console collection
    console.log("=== NEW INVESTMENT INQUIRY ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Investment Range: ${investmentAmount}`);
    console.log(`Message: ${message || 'No message provided'}`);
    console.log(`Language: ${language || 'en'}`);
    console.log(`Timestamp: ${new Date(timestamp).toLocaleString()}`);
    console.log("==============================");

    // Try to send a notification email via SendGrid if API key is available
    try {
      if (process.env.SENDGRID_API_KEY) {
        const sendgridRes = await fetch(
          "https://api.sendgrid.com/v3/mail/send",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              personalizations: [
                {
                  to: [{ email: "hi@prompt.tax" }],
                  subject: `🚀 New Investment Inquiry - ${investmentAmount}`,
                },
              ],
              from: {
                email: process.env.SENDGRID_FROM_EMAIL || "hi@prompt.tax",
                name: "prompt.tax Investment Team",
              },
              content: [
                {
                  type: "text/plain",
                  value: emailContent,
                },
              ],
            }),
          },
        );

        if (!sendgridRes.ok) {
          console.error("SendGrid error:", await sendgridRes.text());
        } else {
          console.log("SendGrid notification sent successfully");
        }
      }
    } catch (err) {
      console.error("Error sending SendGrid email:", err);
    }

    // Send personalized thank you email to the investor
    try {
      if (process.env.SENDGRID_API_KEY) {
        const isSpanish = language === 'es';
        
        const thankYouContent = isSpanish ? `
Hola ${name},

¡Gracias por tu interés en invertir en prompt.tax!

Hemos recibido tu solicitud de inversión para el rango de ${investmentAmount}.

PRÓXIMOS PASOS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Nuestro equipo revisará tu solicitud dentro de las próximas 24 horas
2. Te contactaremos para programar una llamada de estrategia
3. Discutiremos los términos de inversión y responderemos tus preguntas
4. Una vez confirmado, te enviaremos los documentos legales y las instrucciones de pago

INFORMACIÓN DE PAGO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cuando estés listo para proceder, podrás realizar tu inversión a través de:

• PayPal: ${process.env.PAYMENT_LINK_PAYPAL || '[Enlace de pago disponible próximamente]'}
• Mercury: ${process.env.PAYMENT_LINK_MERCURY || '[Enlace de pago disponible próximamente]'}

• Transferencia Bancaria (ACH/Wire):
  Nombre del titular: Red Pill Software LLC
  Número de ruta Fedwire: 091311229
  Número de cuenta: 202585580931
  Tipo de cuenta: Corriente (Checking)
  Nombre del banco: CHOICE FINANCIAL GROUP

POR QUÉ PROMPT.TAX ES UNA GRAN OPORTUNIDAD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Mercado de $28B en crecimiento
✓ Tecnología de IA propietaria para preparación de impuestos
✓ Especialización en criptomonedas y activos digitales
✓ Equipo experimentado con historial comprobado
✓ Ronda Seed con valoración atractiva

Si tienes alguna pregunta antes de nuestra llamada, no dudes en responder a este correo.

¡Esperamos trabajar contigo!

Saludos cordiales,
El equipo de prompt.tax

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
prompt.tax | Impuestos Simplificados con IA
Web: https://prompt.tax
Email: hi@prompt.tax
        `.trim() : `
Hello ${name},

Thank you for your interest in investing in prompt.tax!

We've received your investment inquiry for the ${investmentAmount} range.

NEXT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Our team will review your inquiry within the next 24 hours
2. We'll reach out to schedule a strategy call
3. We'll discuss investment terms and answer your questions
4. Once confirmed, we'll send legal documents and payment instructions

PAYMENT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When you're ready to proceed, you'll be able to complete your investment through:

• PayPal: ${process.env.PAYMENT_LINK_PAYPAL || '[Payment link available soon]'}
• Mercury: ${process.env.PAYMENT_LINK_MERCURY || '[Payment link available soon]'}

• Bank Transfer (ACH/Wire):
  Account Holder: Red Pill Software LLC
  Routing Number (Fedwire): 091311229
  Account Number: 202585580931
  Account Type: Checking
  Bank Name: CHOICE FINANCIAL GROUP

WHY PROMPT.TAX IS A GREAT OPPORTUNITY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ $28B growing market opportunity
✓ Proprietary AI technology for tax preparation
✓ Specialization in crypto and digital assets
✓ Experienced team with proven track record
✓ Attractive Seed round valuation

If you have any questions before our call, feel free to reply to this email.

We look forward to working with you!

Best regards,
The prompt.tax Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
prompt.tax | AI-Powered Tax Made Simple
Web: https://prompt.tax
Email: hi@prompt.tax
        `.trim();

        const confirmationRes = await fetch(
          "https://api.sendgrid.com/v3/mail/send",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              personalizations: [
                {
                  to: [{ email: email, name: name }],
                  subject: isSpanish 
                    ? `🚀 Gracias por tu interés en prompt.tax - Próximos pasos`
                    : `🚀 Thank You for Your Interest in prompt.tax - Next Steps`,
                },
              ],
              from: {
                email: process.env.SENDGRID_FROM_EMAIL || "hi@prompt.tax",
                name: "prompt.tax Investment Team",
              },
              reply_to: {
                email: "hi@prompt.tax",
                name: "prompt.tax Team",
              },
              content: [
                {
                  type: "text/plain",
                  value: thankYouContent,
                },
              ],
            }),
          },
        );

        if (!confirmationRes.ok) {
          console.error("SendGrid confirmation email error:", await confirmationRes.text());
        } else {
          console.log("Confirmation email sent to investor successfully");
        }
      }
    } catch (err) {
      console.error("Error sending confirmation email:", err);
    }

    // Try to forward submission to Zapier webhook if configured
    try {
      if (process.env.ZAPIER_WEBHOOK_URL) {
        await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            type: "investment-inquiry", 
            timestamp, 
            data: { name, email, investmentAmount, message, language }
          }),
        });
        console.log("Forwarded investment inquiry to Zapier webhook");
      }
    } catch (err) {
      console.error("Error forwarding to Zapier webhook:", err);
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: true,
        message: language === 'es' 
          ? "Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo dentro de las próximas 24 horas."
          : "Thank you for your interest! Our team will reach out within 24 hours to discuss investment details.",
        data: {
          name,
          email,
          investmentAmount,
          timestamp: new Date(timestamp).toISOString(),
        },
      }),
    };
  } catch (error: any) {
    console.error("Error processing investment inquiry:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "Internal server error",
        message: error.message,
      }),
    };
  }
};

export { handler };

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

    // In production, you would:
    // 1. Send email to hi@prompt.tax
    // 2. Store in database/CRM
    // 3. Send confirmation email to investor
    // 4. Trigger Slack/Discord notification

    // Example: Send notification email
    const notificationEmail = {
      to: "hi@prompt.tax",
      subject: `🚀 New Investment Inquiry - ${investmentAmount}`,
      html: `
        <h2>New Investment Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Investment Range:</strong> ${investmentAmount}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        <hr>
        <p><em>Submitted: ${new Date(timestamp).toLocaleString()}</em></p>
        <p><em>Language: ${language || 'en'}</em></p>
      `,
    };

    // TODO: Integrate with email service (SendGrid, AWS SES, Resend, etc.)
    // await sendEmail(notificationEmail);

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

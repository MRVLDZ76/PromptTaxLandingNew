import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
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
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { data, timestamp } = JSON.parse(event.body || "{}");
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      firmSize,
      inquiryType,
      message,
    } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission from prompt.tax

CONTACT INFORMATION:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company}
Firm Size: ${firmSize || "Not specified"}
Inquiry Type: ${inquiryType || "General"}

MESSAGE:
${message}

SUBMISSION DETAILS:
Timestamp: ${timestamp}
User Agent: ${event.headers["user-agent"] || "unknown"}
IP: ${event.headers["x-forwarded-for"] || event.headers["client-ip"] || "unknown"}

---
This message was sent from the prompt.tax contact form.
    `.trim();

    // Log for console collection
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Phone: ${phone || "Not provided"}`);
    console.log(`Firm Size: ${firmSize || "Not specified"}`);
    console.log(`Inquiry Type: ${inquiryType || "General"}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log("===================================");

    // Simple notification for easy processing
    console.log(
      `CONTACT EMAIL: ${email} (${firstName} ${lastName}) from ${company} submitted a ${inquiryType || "general"} inquiry`,
    );

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
                  subject: `New Contact Form Submission - ${company}`,
                },
              ],
              from: {
                email: process.env.SENDGRID_FROM_EMAIL || "hi@prompt.tax",
                name: "prompt.tax",
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

    // Try to forward submission to Zapier webhook if configured
    try {
      if (process.env.ZAPIER_WEBHOOK_URL) {
        await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "contact", timestamp, data }),
        });
        console.log("Forwarded contact submission to Zapier webhook");
      }
    } catch (err) {
      console.error("Error forwarding to Zapier webhook:", err);
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({
        success: true,
        message:
          "Thank you for contacting us! We'll get back to you within 24 hours.",
      }),
    };
  } catch (error) {
    console.error("Error processing contact form:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "Internal server error",
        message: "Failed to process contact form submission",
      }),
    };
  }
};

export { handler };

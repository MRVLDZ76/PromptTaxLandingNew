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
    const { firstName, lastName, email, company, firmSize, message } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !company) {
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
New Demo Request from prompt.tax

CONTACT INFORMATION:
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Firm Size: ${firmSize || "Not specified"}

DEMO INTERESTS:
${message || "No specific requirements mentioned"}

SUBMISSION DETAILS:
Timestamp: ${timestamp}
User Agent: ${event.headers["user-agent"] || "unknown"}
IP: ${event.headers["x-forwarded-for"] || event.headers["client-ip"] || "unknown"}

---
This request was sent from the prompt.tax demo page.
    `.trim();

    // Log for console collection
    console.log("=== NEW DEMO REQUEST ===");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Firm Size: ${firmSize || "Not specified"}`);
    console.log(`Demo Interests: ${message || "None specified"}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log("========================");

    // Simple notification for easy processing
    console.log(
      `DEMO EMAIL: ${email} (${firstName} ${lastName}) from ${company} requested a demo`,
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
                  subject: `New Demo Request - ${company}`,
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

    // Forward to Zapier if URL configured
    try {
      if (process.env.ZAPIER_WEBHOOK_URL) {
        await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "demo", timestamp, data }),
        });
        console.log("Forwarded demo request to Zapier webhook");
      }
    } catch (err) {
      console.error("Error forwarding demo to Zapier webhook:", err);
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
          "Demo request received! We'll contact you within 24 hours to schedule your personalized demonstration.",
      }),
    };
  } catch (error) {
    console.error("Error processing demo request:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "Internal server error",
        message: "Failed to process demo request",
      }),
    };
  }
};

export { handler };

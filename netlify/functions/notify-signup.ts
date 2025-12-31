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

  // Only allow POST requests
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
    const data = JSON.parse(event.body || "{}");
    const { email, timestamp, source } = data;

    // Validate email
    if (!email || !email.includes("@")) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: "Valid email is required" }),
      };
    }

    // Log the email signup for manual collection
    console.log("=== NEW NOTIFICATION SIGNUP ===");
    console.log(`Email: ${email}`);
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Source: ${source || "website"}`);
    console.log(`User Agent: ${event.headers["user-agent"] || "unknown"}`);
    console.log(
      `IP: ${event.headers["x-forwarded-for"] || event.headers["client-ip"] || "unknown"}`,
    );
    console.log("================================");

    // Simple email notification that can be easily processed
    console.log(
      `NOTIFY EMAIL: ${email} signed up for prompt.tax launch notifications at ${timestamp}`,
    );

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
          "Thank you! You'll be notified when prompt.tax launches on October 7, 2025.",
      }),
    };
  } catch (error) {
    console.error("Error processing notification signup:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "Internal server error",
        message: "Failed to process notification signup",
      }),
    };
  }
};

export { handler };

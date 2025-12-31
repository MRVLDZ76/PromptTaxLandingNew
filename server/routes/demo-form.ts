import { Router } from "express";

const router = Router();

router.post("/demo-form", async (req, res) => {
  try {
    const { data, timestamp } = req.body || {};
    const { firstName, lastName, email, company, firmSize, message } =
      data || {};

    if (!firstName || !lastName || !email || !company) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const ts = timestamp || new Date().toISOString();

    const emailContent = `New Demo Request from prompt.tax\n\nCONTACT INFORMATION:\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nFirm Size: ${firmSize || "Not specified"}\n\nDEMO INTERESTS:\n${message || "No specific requirements mentioned"}\n\nSUBMISSION DETAILS:\nTimestamp: ${ts}\n`;

    console.log("=== NEW DEMO REQUEST ===");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Firm Size: ${firmSize || "Not specified"}`);
    console.log(`Demo Interests: ${message || "None specified"}`);
    console.log(`Timestamp: ${ts}`);

    // Send via SendGrid if available
    try {
      if (process.env.SENDGRID_API_KEY) {
        await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [
                  { email: process.env.CONTACT_RECIPIENT || "hi@prompt.tax" },
                ],
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
        });
        console.log("SendGrid demo notification attempted");
      }
    } catch (err) {
      console.error("Error sending SendGrid demo email:", err);
    }

    // Forward to Zapier if configured
    try {
      if (process.env.ZAPIER_WEBHOOK_URL) {
        await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "demo", timestamp: ts, data }),
        });
        console.log("Forwarded demo request to Zapier webhook");
      }
    } catch (err) {
      console.error("Error forwarding demo to Zapier webhook:", err);
    }

    res.json({
      success: true,
      message: "Demo request received! We'll contact you within 24 hours.",
    });
  } catch (err) {
    console.error("Demo-form route error:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to process demo request" });
  }
});

export default router;

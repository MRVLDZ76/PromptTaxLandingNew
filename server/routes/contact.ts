import { Router } from "express";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    // Support both wrapper { data, timestamp } and direct submission
    const payload = req.body && req.body.data ? req.body.data : req.body || {};
    const timestamp =
      (req.body && req.body.timestamp) || new Date().toISOString();

    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      firmSize,
      inquiryType,
      message,
    } = payload || {};

    if (!firstName || !lastName || !email || !company || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const emailContent = `New Contact Form Submission from prompt.tax\n\nCONTACT INFORMATION:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nCompany: ${company}\nFirm Size: ${firmSize || "Not specified"}\nInquiry Type: ${inquiryType || "General"}\n\nMESSAGE:\n${message}\n\nSUBMISSION DETAILS:\nTimestamp: ${timestamp}\n`;

    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company}`);
    console.log(`Phone: ${phone || "Not provided"}`);
    console.log(`Firm Size: ${firmSize || "Not specified"}`);
    console.log(`Inquiry Type: ${inquiryType || "General"}`);
    console.log(`Message: ${message}`);

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
        });
        console.log("SendGrid contact notification attempted");
      }
    } catch (err) {
      console.error("Error sending SendGrid contact email:", err);
    }

    // Forward to Zapier if configured
    try {
      if (process.env.ZAPIER_WEBHOOK_URL) {
        await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "contact", timestamp, data: payload }),
        });
        console.log("Forwarded contact submission to Zapier webhook");
      }
    } catch (err) {
      console.error("Error forwarding contact to Zapier webhook:", err);
    }

    // Always respond success to the client (client-side fallback exists)
    res.json({
      success: true,
      message:
        "Thank you for contacting us! We'll get back to you within 24 hours.",
    });
  } catch (err) {
    console.error("Contact route error:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to process contact form" });
  }
});

export default router;

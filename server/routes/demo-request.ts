import { Router } from "express";
import { z } from "zod";
import crypto from "crypto";
import rateLimit from "express-rate-limit";

const router = Router();

// Rate limiting to prevent CPU overload from bot attacks
const demoRequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 5 minutes
  max: process.env.NODE_ENV === "development" ? 50 : 5, // More lenient in development
  message: {
    success: false,
    message: "Too many demo requests from this IP, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const demoRequestSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  title: z.string().min(2, "Job title must be at least 2 characters"),
  clientCount: z.string().min(1, "Please select your client count"),
  urgency: z.string().min(1, "Please select your timeline"),
  message: z.string().min(10, "Please provide more details about your needs"),
  preferredTime: z.string().min(1, "Please select your preferred time"),
  interests: z
    .array(z.string())
    .min(1, "Please select at least one area of interest"),
});

// Email templates
const createAdminEmailHTML = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Demo Request - Prompt Tax</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
    .info-item { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #667eea; }
    .label { font-weight: 600; color: #495057; font-size: 14px; }
    .value { color: #212529; margin-top: 5px; }
    .urgency-high { border-left-color: #dc3545; }
    .urgency-medium { border-left-color: #ffc107; }
    .urgency-low { border-left-color: #28a745; }
    .interests { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
    .interest-tag { background: #667eea; color: white; padding: 4px 12px; border-radius: 16px; font-size: 12px; }
    .message-box { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; border: 1px solid #dee2e6; }
    .cta-button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">🎯 New Demo Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">A new prospect wants to see Prompt Tax in action!</p>
    </div>
    
    <div class="content">
      <div class="info-grid">
        <div class="info-item">
          <div class="label">Contact</div>
          <div class="value">
            <strong>${data.firstName} ${data.lastName}</strong><br>
            ${data.title}<br>
            📧 ${data.email}<br>
            📞 ${data.phone}
          </div>
        </div>
        
        <div class="info-item">
          <div class="label">Company</div>
          <div class="value">
            <strong>${data.company}</strong><br>
            👥 ${data.clientCount}<br>
            🕒 ${data.preferredTime}
          </div>
        </div>
      </div>
      
      <div class="info-item ${data.urgency === "immediate" ? "urgency-high" : data.urgency === "soon" ? "urgency-medium" : "urgency-low"}">
        <div class="label">🚨 Timeline</div>
        <div class="value"><strong>${getUrgencyLabel(data.urgency)}</strong></div>
      </div>
      
      <div class="info-item">
        <div class="label">Areas of Interest</div>
        <div class="interests">
          ${data.interests
            .map(
              (interest: string) =>
                `<span class="interest-tag">${getInterestLabel(interest)}</span>`,
            )
            .join("")}
        </div>
      </div>
      
      <div class="message-box">
        <div class="label">💬 Message</div>
        <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${data.email}?subject=Prompt Tax Demo - Let's Schedule Your Personalized Walkthrough" class="cta-button">
          📧 Reply to ${data.firstName}
        </a>
        <a href="https://calendly.com/promptax-demo" class="cta-button">
          📅 Schedule Demo
        </a>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
        <p><strong>Next Steps:</strong></p>
        <ol>
          <li>Reply within 24 hours to maintain momentum</li>
          <li>Prepare a customized demo focusing on their interests: ${data.interests.join(", ")}</li>
          <li>Research their company beforehand if possible</li>
          <li>Consider their ${data.clientCount} practice size for relevant examples</li>
        </ol>
      </div>
    </div>
  </div>
</body>
</html>
`;

const createCustomerEmailHTML = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Request Confirmed - Prompt Tax</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
    .highlight-box { background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea; margin: 20px 0; }
    .next-steps { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
    .step { margin: 15px 0; padding-left: 30px; position: relative; }
    .step-number { position: absolute; left: 0; top: 0; background: #667eea; color: white; width: 20px; height: 20px; border-radius: 50%; font-size: 12px; display: flex; align-items: center; justify-content: center; }
    .cta-button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">✅ Demo Request Received!</h1>
      <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">Thank you for your interest in Prompt Tax</p>
    </div>
    
    <div class="content">
      <p>Hi ${data.firstName},</p>
      
      <p>Thank you for requesting a demo of Prompt Tax! We're excited to show you how AI prompts can transform your tax practice and eliminate those daily workflow bottlenecks.</p>
      
      <div class="highlight-box">
        <h3 style="margin-top: 0; color: #667eea;">📋 Your Demo Request Summary</h3>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Client Volume:</strong> ${data.clientCount}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
        <p><strong>Focus Areas:</strong> ${data.interests.map(getInterestLabel).join(", ")}</p>
        <p><strong>Timeline:</strong> ${getUrgencyLabel(data.urgency)}</p>
      </div>
      
      <div class="next-steps">
        <h3 style="margin-top: 0; color: #495057;">🎯 What Happens Next</h3>
        
        <div class="step">
          <div class="step-number">1</div>
          <strong>Within 24 Hours:</strong> Our demo specialist will contact you to schedule your personalized walkthrough
        </div>
        
        <div class="step">
          <div class="step-number">2</div>
          <strong>Customized Demo:</strong> We'll prepare a demo specifically focused on your practice size and areas of interest
        </div>
        
        <div class="step">
          <div class="step-number">3</div>
          <strong>Live Q&A:</strong> Ask any questions and see exactly how Prompt Tax fits your workflow
        </div>
        
        <div class="step">
          <div class="step-number">4</div>
          <strong>Next Steps:</strong> If it's a good fit, we'll discuss implementation and onboarding
        </div>
      </div>
      
      <p>In the meantime, feel free to explore our resources:</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://promptax.com/docs" class="cta-button">📚 Documentation</a>
        <a href="https://promptax.com/demo" class="cta-button">🎬 Preview Videos</a>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
        <h4 style="color: #495057;">Questions before our demo?</h4>
        <p>Feel free to reply to this email or contact us directly:</p>
        <p>📧 <a href="mailto:demo@promptax.com">demo@promptax.com</a><br>
        📞 1-800-PROMPTAX</p>
      </div>
      
      <div style="margin-top: 30px; font-size: 12px; color: #6c757d; text-align: center;">
        <p>This is an automated confirmation. We'll follow up personally within 24 hours.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

// Helper functions
function getUrgencyLabel(urgency: string): string {
  const labels: Record<string, string> = {
    immediate: "ASAP - This week",
    soon: "Within 2 weeks",
    month: "Within this month",
    quarter: "This quarter",
    exploring: "Just exploring",
  };
  return labels[urgency] || urgency;
}

function getInterestLabel(interest: string): string {
  const labels: Record<string, string> = {
    automation: "Tax Automation",
    "client-management": "Client Management",
    workflow: "Workflow Optimization",
    integration: "System Integration",
    reporting: "Advanced Reporting",
    compliance: "Compliance Tools",
  };
  return labels[interest] || interest;
}

// Secure and fast ID generation
const generateRequestId = () =>
  "demo_" + Date.now() + "_" + crypto.randomBytes(4).toString("hex");

// Simple email sending function (replace with your preferred service)
async function sendEmail(
  to: string,
  subject: string,
  html: string,
  isAdmin = false,
) {
  // For production, integrate with your email service (SendGrid, AWS SES, etc.)
  // Reduced logging to prevent CPU bottlenecks

  if (process.env.NODE_ENV === "development") {
    console.log(`Email ${isAdmin ? "(ADMIN)" : "(CUSTOMER)"} to: ${to}`);
  }

  // In a real implementation, you would:
  // 1. Use a service like SendGrid, AWS SES, or Nodemailer
  // 2. Send actual emails
  // 3. Handle failures and retries

  return { success: true }; // Simulate success for now
}

router.post("/demo-request", demoRequestLimiter, async (req, res) => {
  const requestStart = Date.now();
  try {
    // Validate the request data
    const validatedData = demoRequestSchema.parse(req.body);

    // Minimal logging to prevent CPU bottlenecks
    if (process.env.NODE_ENV === "development") {
      console.log("Demo request:", validatedData.company, validatedData.email);
    }

    // Generate email content efficiently
    const adminHTML = createAdminEmailHTML(validatedData);
    const customerHTML = createCustomerEmailHTML(validatedData);

    // Send emails in parallel to reduce response time
    const [adminEmailResult, customerEmailResult] = await Promise.all([
      sendEmail(
        process.env.DEMO_ADMIN_EMAIL || "demo@promptax.com",
        `🎯 New Demo Request from ${validatedData.company}`,
        adminHTML,
        true,
      ),
      sendEmail(
        validatedData.email,
        "Demo Request Confirmed - Prompt Tax Team Will Contact You Soon",
        customerHTML,
      ),
    ]);

    res.status(200).json({
      success: true,
      message: "Demo request submitted successfully",
      requestId: generateRequestId(),
      emailSent: adminEmailResult.success && customerEmailResult.success,
      responseTimeMs: Date.now() - requestStart,
    });
  } catch (error) {
    // Minimal error logging to prevent CPU spikes
    if (process.env.NODE_ENV === "development") {
      console.error("Demo request error:", error);
    }

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to process demo request",
      error: process.env.NODE_ENV === "development" ? String(error) : undefined,
    });
  }
});

export default router;

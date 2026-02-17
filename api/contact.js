// api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Create transporter using Gmail SMTP
  // Note: These ENV variables must be set in Vercel
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_TO || process.env.GMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    text: `You have a new message from your portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #10b981;">New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return res.status(500).json({ error: "Failed to send email. Please check server logs." });
  }
}

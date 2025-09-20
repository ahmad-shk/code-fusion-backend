const transporter = require("../configs/emailConfig.js");

const sendTestEmail = async (to) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Test Email via Brevo SMTP",
      text: "Hello Ahmad! 🚀 Your Brevo SMTP setup is working fine.",
    });

    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Error sending email:", err);
    throw err;
  }
};

module.exports = { sendTestEmail };
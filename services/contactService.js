const transporter = require("../configs/emailConfig.js");

const sendContactEmail = async (formData) => {
  const { name, email, phone, company, projectType, budget, timeline, message } = formData;

  const emailContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Project Type:</strong> ${projectType}</p>
    <p><strong>Budget:</strong> ${budget}</p>
    <p><strong>Timeline:</strong> ${timeline}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `;

  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,        // aapka Gmail
    to: "ahmadsaleem19950@gmail.com",  // aapka receive email
    subject: `New Project Inquiry from ${name}`,
    html: emailContent,
  });

  console.log("✅ Contact email sent:", info.messageId);
  return info;
};

module.exports = { sendContactEmail };

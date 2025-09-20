const express = require("express");
const { sendContactEmail } = require("../services/contactService.js");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const info = await sendContactEmail(req.body);
    res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error("❌ Error sending contact email:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;

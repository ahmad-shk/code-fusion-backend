const express = require("express");
const { sendTestEmail } = require("../services/emailService.js");

const router = express.Router();

router.get("/send-email", async (req, res) => {
  try {
    const info = await sendTestEmail("testreceiver@gmail.com");
    res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
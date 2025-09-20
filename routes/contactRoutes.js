const express = require("express");
const { sendContactEmail } = require("../services/contactService.js");

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const info = await sendContactEmail(req.body);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;

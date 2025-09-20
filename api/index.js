const express = require("express");
const dotenv = require("dotenv");
const contactRoutes = require("../routes/contactRoutes.js");

dotenv.config();
const app = express();

app.use(express.json()); // 👈 POST body parse karne ke liye
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

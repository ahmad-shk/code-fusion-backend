const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("../routes/emailRoutes.js");

dotenv.config();
const app = express();

app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
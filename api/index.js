const express = require("express");
const cors = require("cors");
const contactRoutes = require("../routes/contactRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/api/test", (req, res) => res.send("Server is working!"));

// Contact route
app.use("/api/contact", contactRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

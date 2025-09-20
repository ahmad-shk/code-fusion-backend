// import express from "express";
const express = require("express");
const cors = require("cors");
const contactRoutes = require("../routes/contactRoutes.js");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/contact", contactRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

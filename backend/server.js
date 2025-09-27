import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes (API)
app.post("/api/contact", async (req, res) => {
  try {
    // Save contact form data to DB (use your schema here)
    res.json({ msg: "Message received successfully!" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// --- Serve frontend (HTML, CSS, JS) ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/index.html"));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

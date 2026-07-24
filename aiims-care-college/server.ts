import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

/* ================== MONGODB CONNECT ================== */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Mongo Error:", err));

/* ================== MONGODB MODEL ================== */
const admissionSchema = new mongoose.Schema({
  id: String,
  fullName: String,
  email: String,
  phone: String,
  course: String,
  neetScore: Number,
  pcbPercentage: Number,
  category: String,
  hostelRequired: Boolean,
  status: String,
  submittedAt: String,
});

const Admission = mongoose.model("Admission", admissionSchema);

/* ================== GEMINI AI ================== */
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

/* ================== HEALTH ================== */
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

/* ================== AI ROUTE ================== */
app.post("/api/ai-guidance", async (req, res) => {
  const { neetScore, pcbPercentage } = req.body || {};

  try {
    const ai = getGeminiClient();

    if (ai) {
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Suggest best medical course for NEET score ${neetScore}`,
      });

      return res.json({ success: true, data: response.text });
    }
  } catch (err) {
    console.log(err);
  }

  return res.json({ success: true, data: "Fallback response" });
});

/* ================== ADMISSION SAVE ================== */
app.post("/api/admission", async (req, res) => {
  try {
    const { fullName, email, phone, course, neetScore, pcbPercentage, category, hostelRequired } = req.body || {};

    if (!fullName || !email || !phone || !course) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const appId = `AIIMS-2026-${randomNum}`;

    const newRecord = {
      id: appId,
      fullName,
      email,
      phone,
      course,
      neetScore: Number(neetScore) || 0,
      pcbPercentage: Number(pcbPercentage) || 0,
      category: category || "General",
      hostelRequired: Boolean(hostelRequired),
      status: "Under Review",
      submittedAt: new Date().toISOString(),
    };

    // ✅ SAVE TO MONGODB
    await Admission.create(newRecord);

    res.json({
      success: true,
      message: "Application submitted successfully!",
      applicationId: appId,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* ================== GET STATUS ================== */
app.get("/api/admission/status/:id", async (req, res) => {
  try {
    const record = await Admission.findOne({ id: req.params.id });

    if (!record) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res.json({ success: true, record });

  } catch (error) {
    res.status(500).json({ success: false });
  }
});

/* ================== CONTACT ================== */
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  const ticketId = `TKT-${Math.floor(10000 + Math.random() * 90000)}`;

  res.json({
    success: true,
    ticketId,
  });
});

/* ================== VITE / STATIC ================== */
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

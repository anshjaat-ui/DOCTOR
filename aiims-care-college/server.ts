import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

/* =========================
   ✅ MONGODB CONNECTION
========================= */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

/* =========================
   ✅ SCHEMA
========================= */
const admissionSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  course: String,
  neetScore: Number,
  pcbPercentage: Number,
  category: String,
  hostelRequired: Boolean,
  status: { type: String, default: "Under Review" },
  submittedAt: { type: Date, default: Date.now },
});

const Admission = mongoose.model("Admission", admissionSchema);

/* =========================
   HEALTH CHECK
========================= */
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

/* =========================
   ✅ ADMISSION SAVE (FIXED)
========================= */
app.post("/api/admission", async (req, res) => {
  try {
    const { fullName, email, phone, course, neetScore, pcbPercentage, category, hostelRequired } = req.body;

    if (!fullName || !email || !phone || !course) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    const newAdmission = await Admission.create({
      fullName,
      email,
      phone,
      course,
      neetScore,
      pcbPercentage,
      category,
      hostelRequired,
    });

    return res.json({
      success: true,
      message: "Saved in MongoDB ✅",
      data: newAdmission,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/* =========================
   ✅ STATUS CHECK FROM DB
========================= */
app.get("/api/admission/status/:id", async (req, res) => {
  try {
    const record = await Admission.findById(req.params.id);

    if (!record) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }

    res.json({ success: true, record });

  } catch (err) {
    res.status(500).json({ success: false, message: "Error" });
  }
});

/* =========================
   CONTACT
========================= */
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  res.json({ success: true });
});

/* =========================
   VITE / BUILD
========================= */
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

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

startServer();

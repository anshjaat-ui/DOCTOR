import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini AI Client lazily/safely
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// In-memory store for admissions and contact tickets
interface AdmissionRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  course: string;
  neetScore: number;
  pcbPercentage: number;
  category: string;
  hostelRequired: boolean;
  status: "Submitted" | "Under Review" | "Shortlisted" | "Approved";
  submittedAt: string;
}

const admissionsDb: Record<string, AdmissionRecord> = {};

// Health check route
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", college: "AIIMS Care College API" });
});

// AI Career Guidance Route powered by Gemini
app.post("/api/ai-guidance", async (req, res) => {
  const { neetScore, pcbPercentage, interests, preferredStyle, careerGoal } = req.body || {};

  const score = Number(neetScore) || 0;
  const pcb = Number(pcbPercentage) || 0;

  try {
    const ai = getGeminiClient();

    if (ai) {
      const prompt = `You are a senior medical education career counselor at AIIMS Care College (a top-tier medical institute).
      Analyze the student profile below and provide structured career guidance in medical & healthcare education:

      Student Profile:
      - NEET Score: ${score > 0 ? score + " / 720" : "Not appeared / N/A"}
      - 10+2 PCB Percentage: ${pcb}%
      - Core Interests: ${interests || "General Healthcare"}
      - Preferred Learning/Clinical Style: ${preferredStyle || "Clinical Practice"}
      - Ultimate Career Goal: ${careerGoal || "Become a Healthcare Professional"}

      Provide a JSON response with:
      1. "recommendedCourse": Primary course title (e.g., MBBS, BDS, B.Sc Nursing, B.Pharm, Pharm.D, or Allied Health).
      2. "matchConfidence": Percentage number (e.g. 92)
      3. "reasoning": 2-3 concise sentences explaining why this fits their profile best.
      4. "alternativeCourses": Array of 2 alternative courses with brief rationale.
      5. "careerOutlook": Expected career pathways, average starting salary range in INR, higher study/specialization opportunities (e.g., MD/MS, USMLE, Clinical Research).
      6. "neetCutoffAdvice": Practical, actionable score boost advice or alternative entry paths.
      7. "recommendedNextSteps": Array of 3 key actionable preparation steps at AIIMS Care College.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              recommendedCourse: { type: Type.STRING },
              matchConfidence: { type: Type.NUMBER },
              reasoning: { type: Type.STRING },
              alternativeCourses: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    course: { type: Type.STRING },
                    reason: { type: Type.STRING },
                  },
                  required: ["course", "reason"],
                },
              },
              careerOutlook: { type: Type.STRING },
              neetCutoffAdvice: { type: Type.STRING },
              recommendedNextSteps: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
            required: [
              "recommendedCourse",
              "matchConfidence",
              "reasoning",
              "alternativeCourses",
              "careerOutlook",
              "neetCutoffAdvice",
              "recommendedNextSteps",
            ],
          },
        },
      });

      if (response.text) {
        const parsedData = JSON.parse(response.text.trim());
        return res.json({ success: true, aiGenerated: true, guidance: parsedData });
      }
    }
  } catch (err) {
    console.warn("Gemini API call failed or missing key, switching to deterministic algorithm:", err);
  }

  // Deterministic Fallback Logic matching requirement:
  // High marks/score -> MBBS, Medium -> BDS / Nursing, Else -> Pharmacy / Allied
  let recommended = "B.Pharm (Bachelor of Pharmacy)";
  let confidence = 82;
  let reasoningText = "Based on your academic profile, Pharmacy and Pharmaceutical R&D offer a direct entry pathway with vast opportunities in drug design and healthcare.";
  let altList = [
    { course: "B.Sc Nursing (Honours)", reason: "High demand in hospital critical care and global healthcare settings." },
    { course: "B.Sc Medical Lab Technology", reason: "Excellent entry into diagnostic pathology and hospital labs." },
  ];

  if (score >= 580 || pcb >= 85) {
    recommended = "MBBS (Bachelor of Medicine & Bachelor of Surgery)";
    confidence = 96;
    reasoningText = "Your high NEET score / academic percentage strongly aligns with top-tier eligibility for MBBS at AIIMS Care College, offering hands-on surgical and clinical residency.";
    altList = [
      { course: "BDS (Bachelor of Dental Surgery)", reason: "Exceptional alternative for clinical practice and specialized oral healthcare." },
      { course: "Pharm.D (Doctor of Pharmacy)", reason: "Ideal for clinical pharmacology and research fellowships." },
    ];
  } else if (score >= 420 || pcb >= 70) {
    recommended = pcb >= 78 ? "BDS (Bachelor of Dental Surgery)" : "B.Sc Nursing (Honours)";
    confidence = 89;
    reasoningText = "Your solid academic foundation qualifies you for key clinical programs like BDS or B.Sc Nursing with extensive hospital rotations at AIIMS Care multi-specialty hospital.";
    altList = [
      { course: "B.Pharm (Bachelor of Pharmacy)", reason: "Strong option for pharmaceutical manufacturing, clinical trials, and drug formulation." },
      { course: "B.Sc Radiology & Imaging Tech", reason: "Focus on modern medical diagnostics, MRI, CT scanning, and nuclear medicine." },
    ];
  }

  return res.json({
    success: true,
    aiGenerated: false,
    guidance: {
      recommendedCourse: recommended,
      matchConfidence: confidence,
      reasoning: reasoningText,
      alternativeCourses: altList,
      careerOutlook: "Strong industry demand with 98%+ placement rates across AIIMS Care Network Hospitals, clinical research organizations, and higher post-graduate specializations.",
      neetCutoffAdvice: score > 0 
        ? "Maintain focus on high-yield Biology and Chemistry revision for upcoming counselling rounds."
        : "You can apply via AIIMS Care Institutional Direct Merit seats or state counselling quotas.",
      recommendedNextSteps: [
        "Schedule a 1-on-1 counselor call with AIIMS Care Admissions Team.",
        "Review detailed syllabus and hospital residency rotation structure on our Courses page.",
        "Submit your pre-admission application form online to secure merit priority.",
      ],
    },
  });
});

// Admission Form Submission Endpoint
app.post("/api/admission", (req, res) => {
  const { fullName, email, phone, course, neetScore, pcbPercentage, category, hostelRequired } = req.body || {};

  if (!fullName || !email || !phone || !course) {
    return res.status(400).json({ success: false, message: "Required fields missing" });
  }

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const appId = `AIIMS-2026-${randomNum}`;

  const newRecord: AdmissionRecord = {
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

  admissionsDb[appId] = newRecord;

  return res.json({
    success: true,
    message: "Application submitted successfully!",
    applicationId: appId,
    record: newRecord,
  });
});

// Application Status Endpoint
app.get("/api/admission/status/:id", (req, res) => {
  const appId = req.params.id;
  const record = admissionsDb[appId];

  if (!record) {
    return res.status(404).json({ success: false, message: "Application ID not found. Please verify your reference number." });
  }

  return res.json({ success: true, record });
});

// Contact Endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Please fill in all required fields." });
  }

  const ticketId = `TKT-${Math.floor(10000 + Math.random() * 90000)}`;

  return res.json({
    success: true,
    ticketId,
    message: "Your inquiry has been received. Our counselor will get back to you within 24 hours.",
  });
});

// Start Vite Development or Static Production Mode
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
    console.log(`AIIMS Care College Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

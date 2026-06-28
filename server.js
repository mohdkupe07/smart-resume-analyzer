require("dotenv").config();
const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// multer setup
const upload = multer({ storage: multer.memoryStorage() });

/* ---------------- HOME ROUTE (fix Cannot GET /) ---------------- */
app.get("/", (req, res) => {
  res.send("AI Resume Analyzer Backend is running 🚀");
});

/* ---------------- ANALYZE ROUTE ---------------- */
app.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ success: false, error: "No file uploaded" });
    }

    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text;

    console.log("PDF extracted, sending to Groq...");

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: `
Analyze this resume and return ONLY valid JSON:

{
  "skills_found": [],
  "missing_skills": [],
  "ats_score": 0,
  "job_roles": [],
  "feedback": ""
}

Rules:
- missing_skills must include 3–5 important industry skills not found in resume
- no markdown, no explanation, ONLY JSON

Resume:
${resumeText}
              `,
            },
          ],
          max_tokens: 1000,
        }),
      }
    );

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return res.json({ success: false, error: "Invalid Groq response" });
    }

    const text = data.choices[0].message.content.trim();

    let result;
    try {
      result = JSON.parse(text);
    } catch (err) {
      return res.json({
        success: false,
        error: "Failed to parse AI response",
        raw: text,
      });
    }

    res.json({ success: true, result });
  } catch (error) {
    console.error("Error:", error.message);
    res.json({ success: false, error: error.message });
  }
});

/* ---------------- START SERVER ---------------- */
app.listen(3001, () => {
  console.log("Server running on port 3001 🚀");
});
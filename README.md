🤖 AI Resume Analyzer
Overview

AI Resume Analyzer is a full-stack web application that uses Artificial Intelligence to analyze resumes. It extracts skills, calculates ATS score, and recommends job roles from uploaded PDF resumes.

Features
Upload PDF resume
AI-based skill extraction
ATS score calculation
Job role recommendations
Missing skills detection
Tech Stack

Frontend: HTML, JavaScript, Vite
Backend: Node.js, Express.js, Multer, pdf-parse
AI Model: Groq LLaMA 3.3 70B

Project Structure

AI-RESUME-ANALYSER
├── resume-backend
│ ├── server.js
│ ├── package.json
├── index.html
├── vite.config.js
├── README.md

How to Run
Backend Setup

cd resume-backend
npm install
node server.js

Backend runs at:
http://localhost:3001

Frontend Setup

npm install
npm run dev

Frontend runs at:
http://localhost:5173

API Endpoint

POST /analyze

Form-data:
key: resume (PDF file)

Response:
{
"success": true,
"result": {
"skills_found": [],
"missing_skills": [],
"ats_score": 85,
"job_roles": [],
"feedback": "string"
}
}

🖼️ Screenshots



Home Page
<img width="1895" height="846" alt="image" src="https://github.com/user-attachments/assets/7a6f3673-573c-44fd-8056-e6ff86275dc0" />
<img width="1897" height="696" alt="image" src="https://github.com/user-attachments/assets/303e2933-0253-4a00-bd23-a3ffd46133fa" />



Upload Resume Page
<img width="1897" height="912" alt="image" src="https://github.com/user-attachments/assets/6d1ecff3-aa8b-4db8-8e12-219c8cc00c9a" />


Result Page
<img width="1077" height="857" alt="image" src="https://github.com/user-attachments/assets/a0cc8b87-3e64-49ed-96c9-8d177ddfb407" />


Environment Variables

Create .env file inside resume-backend:

GROQ_API_KEY=your_api_key_here
PORT=3001

Future Improvements
User authentication system
Save resume history
Better UI design
Deploy to cloud
Advanced ATS scoring system
Developer

Mohammed Kupe

Note

If you like this project, please give it a star ⭐ on GitHub.

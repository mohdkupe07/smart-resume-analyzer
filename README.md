# 🤖 AI Resume Analyzer

## Overview
AI Resume Analyzer is a full-stack AI-powered web application that analyzes uploaded PDF resumes. It extracts skills, evaluates ATS score, and recommends relevant job roles using advanced AI (Groq LLaMA 3.3 70B).

## Key Features
- Upload and process PDF resumes  
- AI-powered skill extraction  
- ATS (Applicant Tracking System) score generation  
- Job role recommendations based on resume content  
- Detection of missing industry-relevant skills  
- Fast and lightweight REST API  

## Tech Stack
Frontend: HTML, JavaScript, Vite  
Backend: Node.js, Express.js  
Libraries: multer, pdf-parse, cors  
AI Model: Groq LLaMA 3.3 70B  

## Project Structure
AI-RESUME-ANALYSER  
├── resume-backend  
│   ├── server.js  
│   ├── package.json  
│   ├── package-lock.json  
│  
├── index.html  
├── vite.config.js  
├── README.md  

## How to Run Project

### Backend Setup
cd resume-backend  
npm install  
node server.js  

Backend runs at: http://localhost:3001  

### Frontend Setup
npm install  
npm run dev  

Frontend runs at: http://localhost:5173  

## API Reference

Endpoint: POST /analyze  

Request Type: multipart/form-data  
Key: resume (PDF file)

Response Example:
{
  "success": true,
  "result": {
    "skills_found": [],
    "missing_skills": [],
    "ats_score": 85,
    "job_roles": [],
    "feedback": "Resume is well structured and suitable for tech roles."
  }
}

## Screenshots
Add your project screenshots here:

- Home Page  
- Resume Upload Page  
- AI Analysis Result Page  

## Environment Variables
Create a .env file inside resume-backend:

GROQ_API_KEY=your_api_key_here  
PORT=3001  

## Future Enhancements
- User authentication system  
- Resume history dashboard  
- Downloadable AI report (PDF)  
- Improved UI/UX design  
- Cloud deployment  

## Developer
Mohammed Kupe  

## License
This project is open-source and free to use.

## Note
If you like this project, please give it a ⭐ on GitHub.

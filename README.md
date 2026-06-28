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

## Screenshots
Add your project screenshots here:

- Home Page
  <img width="1904" height="753" alt="image" src="https://github.com/user-attachments/assets/eca940db-6448-43ca-a9bc-a2e9e7319a9f" />
  <img width="1899" height="689" alt="image" src="https://github.com/user-attachments/assets/783c8210-42a8-4fed-87fd-e129356f775f" />


- Resume Upload Page
  <img width="1903" height="873" alt="image" src="https://github.com/user-attachments/assets/4e3e7ea2-7aed-4904-ae6b-a270cdb074f8" />

- AI Analysis Result Page
  <img width="929" height="916" alt="image" src="https://github.com/user-attachments/assets/5c2d3b5c-21ed-462b-bde6-c7c6eee68070" />


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

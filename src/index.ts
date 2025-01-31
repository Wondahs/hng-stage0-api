// src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Interface for our response
interface InfoResponse {
  email: string;
  current_datetime: string;
  github_url: string;
}

// Main route
app.get('/', (req: Request, res: Response) => {
  const response: InfoResponse = {
    email: "wondersprince1@gmail.com", // Replace with your email
    current_datetime: new Date().toISOString(),
    github_url: "https://https://github.com/Wondahs/hng-stage0-api.git" // Replace with your repo URL
  };
  
  res.status(200).json(response);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
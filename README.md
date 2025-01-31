# HNG Stage 0 Backend Task

A simple REST API built with Express and TypeScript that provides basic information including an email address, current datetime, and GitHub repository URL.

## Features

- Returns basic information in JSON format
- Handles CORS
- Returns current datetime in ISO 8601 format
- Fast response time (< 500ms)

## Technologies Used

- Express.js
- TypeScript
- Node.js
- [Learn more about our NodeJS developers](https://hng.tech/hire/nodejs-developers)

## API Documentation

### Endpoint

```
GET https://your-deployed-url
```

### Response Format

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/Wondahs/hng-stage0-api.git
```

2. Install dependencies:
```bash
npm install
```

3. Update the email and GitHub URL in `src/index.ts`

4. Run the development server:
```bash
npm run dev
```

5. The API will be available at `http://localhost:3000`

## Deployment

This API can be deployed to platforms like:
- Render
- Railway
- Heroku
- DigitalOcean

## Building for Production

```bash
npm run build
npm start
```
# GDG EventHub

## About
GDG EventHub is a campus-event platform designed around discovering and registering for technical community events. It provides a simple, accessible way for students to explore tech communities and sign up for workshops, seminars, and networking sessions.

## Features
* Event discovery
* Search
* Category filtering
* Event details
* Registration
* Backend API
* Health endpoint
* Testing

## Tech Stack
* React
* Vite
* Node.js
* Express
* JavaScript
* Jest/Supertest
* Vitest/React Testing Library

## Architecture
```
React/Vite
      ↓
Express API
      ↓
Local JSON data
```

## Project Structure
* `frontend/`: The React Single Page Application (SPA) built with Vite.
* `backend/`: The Node.js/Express API server that serves event data.

## Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/Aryasurya12/GDG-OSS-48H-CHALLENGE.git
cd GDG-OSS-48H-CHALLENGE
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### 4. Start backend
In the `backend` directory, run:
```bash
npm start
```
The backend API will run on `http://localhost:5000`.

### 5. Start frontend
Open a new terminal, navigate to the `frontend` directory, and run:
```bash
npm run dev
```
The frontend application will run on `http://localhost:5173`.

### 6. Run tests
To run frontend tests:
```bash
cd frontend
npm test
```

To run backend tests:
```bash
cd backend
npm test
```

## API Documentation

* `GET /health` - Check API health status.
  * Response: `{ "status": "ok" }`
* `GET /api/events` - Retrieve all events.
  * Response: Array of event objects.
* `GET /api/events/:id` - Retrieve a specific event by ID.
  * Response: Single event object.
* `POST /api/register` - Register a user for an event.
  * Request Body: `{ "name": "John Doe", "email": "john@example.com", "college": "GDG Campus", "eventId": "event-001" }`
  * Response: `{ "message": "Registration successful" }`

## Environment Variables
The repository includes a `.env.example` file. Copy `.env.example` to `.env` in the root (or in the respective folders if required) to configure local variables like the PORT.

## Contribution
We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started, our workflow, and pull request guidelines.

## Security
For information on reporting vulnerabilities and our security practices, please read our [SECURITY.md](SECURITY.md) policy.

# GDG EventHub
GDG EventHub is a modern campus-event platform built for discovering and registering for technical community events.
This repository contains the GDG EventHub application used for the **GDG on Campus Open Source Core Team selection process**. 
Candidates who have completed the OSS Core interview are provided this repository as the starting point for a time-bound practical challenge. The purpose of the challenge is to evaluate how effectively a candidate can understand an existing codebase, learn unfamiliar technologies, improve software, work with Git/GitHub, implement engineering workflows, deploy an application, and communicate their work.
> **Important:** This repository is provided only to candidates participating in the GDG on Campus OSS Core Team selection process. 
---
## About the Application
The GDG EventHub application is designed for campus technical events. Its main functionalities include:
* Event discovery
* Real-time search and category filtering
* Event details & seat availability tracking
* Event registration with duplicate prevention
* Backend REST API with PostgreSQL persistence
* Rate limiting and security headers
* Health check endpoint
### Features
* Browse a curated list of upcoming technical events with animated card reveal transitions.
* Search and filter events dynamically by title, category, or speaker with responsive empty states.
* View detailed event information including real-time capacity and remaining seats.
* Functional event registration flow with floating-label inputs, ARIA accessibility, and duplicate registration protection.
* Secure REST API backed by Supabase PostgreSQL database persistence.
* Production security hardening with Helmet HTTP headers and IP rate limiting.
### Tech Stack
**Frontend:**
* React
* Vite
* React Router DOM
* Axios
* Lucide React Icons
**Backend:**
* Node.js
* Express.js
* Supabase PostgreSQL Database (`@supabase/supabase-js`)
* Helmet (Security Headers)
* Express Rate Limit (API Throttling)
**Testing:**
* Vitest
* React Testing Library
* Jest
* Supertest
---
## Architecture
```text
React / Vite Frontend
       │
       │ HTTP API (REST / JSON)
       ▼
Express Backend
       │
       │ Database Client
       ▼
Supabase PostgreSQL Database
```
The application consists of a React Single Page Application (SPA) communicating with an Express.js REST API backend, which persists all event and registration records into a Supabase PostgreSQL database.

---

## Local Setup

### 1. Clone
Clone the repository to your local machine:
```bash
git clone https://github.com/Aryasurya12/GDG-OSS-48H-CHALLENGE.git
cd GDG-OSS-48H-CHALLENGE
```

### 2. Environment setup
Copy the example environment variables file to set up your local configuration:
```bash
cp .env.example .env
```
Ensure .env contains your Supabase credentials and backend port:
```
PORT=5000
VITE_API_URL=http://localhost:5000
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Backend installation and start
Open a terminal and start the Express server:
```bash
cd backend
npm install
npm start
```
The backend API will run on `http://localhost:5000`. Leave this terminal running.

### 4. Frontend installation and start
Open a new terminal, navigate to the frontend directory, and start the Vite dev server:
```bash
cd frontend
npm install
npm run dev
```
The frontend application will run on `http://localhost:5173`.

### 5. Tests
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

---

## API Documentation

### `GET /health`
Check API health status.
* **Response `200 OK`:** `{ "status": "ok" }`

### `GET /api/events`
Retrieve all upcoming events.
* **Response `200 OK`:** `[
  {
    "id": "event-001",
    "title": "Introduction to Open Source",
    "description": "Learn the basics of open source contribution, Git, and GitHub in this beginner-friendly workshop.",
    "date": "2026-09-15",
    "time": "14:00",
    "venue": "Computer Science Building, Room 101",
    "category": "Open Source",
    "speaker": "Jane Doe",
    "capacity": 50,
    "registeredCount": 20
  },
  {
    "id": "event-002",
    "title": "Building React Applications",
    "description": "A deep dive into modern React development including hooks, state management, and routing.",
    "date": "2026-09-18",
    "time": "10:00",
    "venue": "Virtual",
    "category": "Web Development",
    "speaker": "John Smith",
    "capacity": 100,
    "registeredCount": 85
  }
]`

* **Response `500 Internal Server Error`:** `{ "error": "Internal Server Error" }`

### `GET /api/events/:id`
Retrieve a specific event by ID.
* **Path Parameters:
id (string, required) — Unique event identifier (e.g. event-001).
* **Response `200 OK`:** `{
  "id": "event-001",
  "title": "Introduction to Open Source",
  "description": "Learn the basics of open source contribution, Git, and GitHub in this beginner-friendly workshop.",
  "date": "2026-09-15",
  "time": "14:00",
  "venue": "Computer Science Building, Room 101",
  "category": "Open Source",
  "speaker": "Jane Doe",
  "capacity": 50,
  "registeredCount": 20
}`

* **Response `404 Not Found`:** `{ "error": "Event not found" }`


### `POST /api/register`
Register an attendee for a specific event. Automatically validates input data, checks capacity, prevents duplicate registrations, and increments the event's registeredCount.
Rate Limit: 10 registrations per 15 minutes per IP
Headers: Content-Type: application/json

* **Request Body:** `{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "college": "GDG Campus",
  "eventId": "event-001"
}`
* **Response `201 Created`:** `{
  "message": "Registration successful",
  "registration": {
    "id": "reg-1788025863011",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "college": "GDG Campus",
    "eventId": "event-001",
    "registeredAt": "2026-08-30T04:15:00.000Z"
  }
} `
* **Response `400 Bad Request`:** `{ "error": "error": "Missing required fields: name, email, college, eventId" }`
* **Response `400 Bad Request`:** `{ "Invalid email format" }
* **Response `400 Bad Request`:** `{ "Event is already fully booked" }

* **Response `404 Not Request`:** `{ "error": "Event not found" }`

* **Response `409  Conflict`:** `{ "error": "You are already registered for this event" }`

* **Response `429  Too many Requests`:** `{ "error":"Too many registration requests from this IP, please try again after 15 minutes"}`

---

## Security

*No Committed Secrets: Environment variables (.env) are strictly excluded from version control via .gitignore.

*Security Headers: Express application is protected with helmet HTTP security headers against common web vulnerabilities.

*Rate Limiting: Public API routes are throttled using express-rate-limit to prevent brute force and denial of service.

*Data Integrity: Database queries and constraints prevent SQL injection and duplicate record creation. 

For full security guidelines for this challenge, see: [SECURITY.md](SECURITY.md)

---

## Challenge

For the complete task instructions and evaluation requirements, see:
[CHALLENGE.md](CHALLENGE.md)

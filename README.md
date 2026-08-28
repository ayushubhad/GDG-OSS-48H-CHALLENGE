# GDG EventHub

GDG EventHub is a modern campus-event platform built for discovering and registering for technical community events.

This repository contains the GDG EventHub application used for the **GDG on Campus Open Source Core Team selection process**. 

Candidates who have completed the OSS Core interview are provided this repository as the starting point for a time-bound practical challenge. The purpose of the challenge is to evaluate how effectively a candidate can understand an existing codebase, learn unfamiliar technologies, improve software, work with Git/GitHub, implement engineering workflows, deploy an application, and communicate their work.

> **Important:** This repository is provided only to candidates participating in the GDG on Campus OSS Core Team selection process. 

---

## About the Application

The GDG EventHub application is designed for campus technical events. Its main functionalities include:
* Event discovery
* Search
* Filtering
* Event details
* Registration
* Backend API
* Health endpoint

### Features
* Browse a curated list of upcoming technical events.
* Search and filter events by title, category, or speaker.
* View detailed event information.
* Functional event registration flow.
* Full REST API providing event data.

### Tech Stack
**Frontend:**
* React
* Vite
* React Router
* Axios

**Backend:**
* Node.js
* Express.js
* Local JSON data

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
       │ HTTP API
       ▼
Express Backend
       │
       ▼
Local JSON Data
```
The application consists of a React Single Page Application (SPA) that communicates with a Node.js/Express API backend, which serves mock data from a local JSON file.

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
* **Response `200 OK`:** Array of event objects.

### `GET /api/events/:id`
Retrieve a specific event by ID.
* **Response `200 OK`:** Single event object.
* **Response `404 Not Found`:** `{ "error": "Event not found" }`

### `POST /api/register`
Register a user for an event.
* **Request Body:** `{ "name": "John Doe", "email": "john@example.com", "college": "GDG Campus", "eventId": "event-001" }`
* **Response `201 Created`:** `{ "message": "Registration successful", "registration": { ... } }`
* **Response `400 Bad Request`:** `{ "error": "Missing required fields..." }`

---

## Security

Do not commit secrets, credentials, API keys, passwords, cloud credentials or private keys. 

For full security guidelines for this challenge, see: [SECURITY.md](SECURITY.md)

---

## Challenge

For the complete task instructions and evaluation requirements, see:
[CHALLENGE.md](CHALLENGE.md)

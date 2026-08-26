# GDG EventHub

GDG EventHub is a modern platform for discovering and registering for technical events happening on campus. It provides a simple, accessible way for students to explore tech communities and sign up for workshops, seminars, and networking sessions.

## Features
- **Event Discovery**: Browse upcoming GDG events.
- **Search & Filtering**: Quickly find events by title, category, or speaker.
- **Event Details**: View in-depth information about events, capacity, and hosts.
- **Registration**: Sign up for events easily.

## Tech Stack
- **Frontend**: React, Vite, React Router, CSS
- **Backend**: Node.js, Express.js
- **Data**: JSON (Local file storage)
- **Testing**: Vitest, React Testing Library (Frontend), Jest, Supertest (Backend)

## Architecture
```
React frontend
      ↓
Express API
      ↓
JSON data
```
The frontend application (React) makes HTTP requests to the backend (Express) which retrieves data from a local JSON file.

## Project Structure
- `frontend/`: The React application.
- `backend/`: The Node.js API server.

## Local Setup

### Backend Setup
```bash
cd backend
npm install
npm start
```
The backend API will run on `http://localhost:5000`.

### Frontend Setup
In a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The frontend application will run on `http://localhost:5173`.

## Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
```bash
cd backend
npm test
```

## API Documentation
- `GET /health` - Check API health status.
- `GET /api/events` - Retrieve all events.
- `GET /api/events/:id` - Retrieve a specific event by ID.
- `POST /api/register` - Register a user for an event. Requires `name`, `email`, `college`, and `eventId`.

## Environment Variables
Copy `.env.example` to `.env` in the root (or in the respective folders if needed) to configure local variables like the PORT.

## Future Improvements
- User Authentication
- Administrative dashboard for event management
- Persistent database storage

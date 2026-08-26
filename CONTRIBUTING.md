# Contributing to GDG EventHub

First off, thank you for considering contributing to GDG EventHub! It's people like you that make the open source community such a great place to learn, inspire, and create.

## Workflow

1. Fork the repository.
2. Clone your fork: `git clone <your-fork-url>`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Install dependencies for both frontend and backend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
5. Run the application:
   - Backend: `npm start` (in the `backend` folder)
   - Frontend: `npm run dev` (in the `frontend` folder)
6. Run tests to ensure everything is working:
   - Backend: `npm test` (in the `backend` folder)
   - Frontend: `npm test` (in the `frontend` folder)
7. Make your changes.
8. Commit your changes with meaningful messages. Examples:
   ```text
   feat: add event category filtering
   fix: handle invalid event ids
   docs: update local setup instructions
   ```
9. Push your branch to your fork: `git push origin feature/your-feature-name`
10. Open a Pull Request against the main repository.

## Getting Help

If you have questions or need help, please open an issue!

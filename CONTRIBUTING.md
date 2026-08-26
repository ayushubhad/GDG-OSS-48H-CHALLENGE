# Contributing to GDG EventHub

First off, thank you for considering contributing to GDG EventHub! It's people like you that make the open source community such a great place to learn, inspire, and create.

## Getting Started

Before you begin, ensure you have Node.js and npm installed on your machine. You will need these to run the application locally.

## Fork the Repository

1. Navigate to the main repository page on GitHub.
2. Click the "Fork" button in the top right corner.
3. This will create a copy of the repository in your own GitHub account.

## Clone Your Fork

Clone your forked repository to your local machine:
```bash
git clone <your-fork-url>
cd GDG-OSS-48H-CHALLENGE
```

## Create a Branch

Before making any changes, create a new branch. Use a descriptive name such as:
* `feature/<name>` for new features
* `fix/<name>` for bug fixes
* `docs/<name>` for documentation updates
* `refactor/<name>` for code refactoring

```bash
git checkout -b feature/your-feature-name
```

## Install Dependencies

You need to install dependencies for both the frontend and backend:
```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

## Run Locally

To see your changes in action, you need to run both servers:
1. **Backend**: Open a terminal in the `backend` folder and run `npm start`.
2. **Frontend**: Open a second terminal in the `frontend` folder and run `npm run dev`.

## Run Tests

Before submitting a pull request, ensure all tests pass:
* **Backend tests**: `cd backend && npm test`
* **Frontend tests**: `cd frontend && npm test`

## Make Your Changes

* Focus on the specific issue you are solving.
* Keep your changes concise and avoid unrelated modifications.
* Write clean, readable code with meaningful variable and function names.
* Use reusable components where applicable.
* Do not add unnecessary external dependencies.

## Commit Guidelines

Write clear and descriptive commit messages. We recommend using standard conventional commits:

* `feat: add event category filter`
* `fix: handle invalid event id`
* `docs: improve setup instructions`
* `test: add registration validation tests`

## Pull Request Guidelines

When you are ready to submit your changes:
1. Push your branch to your fork: `git push origin feature/your-feature-name`
2. Open a Pull Request (PR) against the main repository.
3. **Keep PRs focused**: Do not combine multiple unrelated changes into one PR.
4. **Explain what changed**: Clearly describe the modifications you made.
5. **Explain why**: Provide context on why this change is necessary.
6. **Mention testing**: Briefly state how you verified your changes (e.g., "Tested locally and existing tests pass").
7. **Include screenshots**: If your changes affect the UI, attach screenshots to the PR description.
8. **Respond to feedback**: Be prepared to address review comments from maintainers.

## Code Quality

We value high-quality code. Please ensure your contributions follow these principles:
* **Readable Code**: Code should be easy to understand by others.
* **Meaningful Naming**: Variables and functions should clearly indicate their purpose.
* **Reusable Components**: Don't duplicate code; modularize it.
* **No Unnecessary Dependencies**: Keep the project lean.
* **No Unrelated Changes**: Stick to the scope of the issue.

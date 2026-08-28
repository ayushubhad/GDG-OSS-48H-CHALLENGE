# Contributing to GDG EventHub

First off, thank you for considering contributing to GDG EventHub! It's people like you that make the open source community such a great place to learn, inspire, and create.

By participating in this project, you are expected to uphold our code of conduct, maintain professionalism, and follow the workflows detailed below.

---

## Step-by-Step Contribution Workflow

Follow these steps to ensure your changes are integrated smoothly.

### 1. Fork the Repository
1. Navigate to the main repository page on GitHub.
2. Click the "Fork" button in the top right corner.
3. This will create a copy of the repository in your own GitHub account.

### 2. Clone Your Fork
Clone your forked repository to your local machine and navigate into the directory:
```bash
git clone https://github.com/<your-username>/GDG-OSS-48H-CHALLENGE.git
cd GDG-OSS-48H-CHALLENGE
```

### 3. Add Upstream Remote
To keep your fork synced with the original repository, add the upstream remote:
```bash
git remote add upstream https://github.com/Aryasurya12/GDG-OSS-48H-CHALLENGE.git
```

### 4. Create a Feature Branch
**Never commit directly to the `main` branch.** Always create a new branch for your work. Use a descriptive name that follows our naming conventions:
* `feat/<name>` for new features (e.g., `feat/dark-mode`)
* `fix/<name>` for bug fixes (e.g., `fix/registration-validation`)
* `docs/<name>` for documentation updates (e.g., `docs/update-readme`)
* `refactor/<name>` for code refactoring (e.g., `refactor/button-component`)
* `ci/<name>` for continuous integration/deployment changes (e.g., `ci/github-actions`)

```bash
git checkout -b feat/your-feature-name
```

### 5. Install Dependencies and Run Locally
Ensure you have installed dependencies for both the frontend and backend. See the `README.md` for detailed commands on running the application locally.

### 6. Make Your Changes
Write your code! Adhere to the Code Style Guidelines (see below).

### 7. Run Tests
Before submitting a pull request, ensure you haven't broken any existing functionality and that all tests pass:
```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```
If you add new features, please add corresponding tests.

### 8. Commit Your Changes
Write clear and descriptive commit messages. We strongly encourage using **Conventional Commits**:

| Commit Type | Use For | Example |
| :--- | :--- | :--- |
| `feat:` | A new feature | `feat: add event category filter dropdown` |
| `fix:` | A bug fix | `fix: handle invalid event id crash on backend` |
| `docs:` | Documentation only changes | `docs: improve local setup instructions in README` |
| `style:` | Formatting, missing semi colons, etc. | `style: format frontend using prettier` |
| `refactor:`| A code change that neither fixes a bug nor adds a feature | `refactor: extract EventCard into standalone component` |
| `test:` | Adding missing tests or correcting existing tests | `test: add registration validation tests` |
| `ci:` | Changes to CI configuration files and scripts | `ci: add automated PR validation workflow` |
| `build:` | Changes that affect the build system or external dependencies | `build: add Dockerfile and docker-compose.yml` |

```bash
git add .
git commit -m "feat: add event category filter dropdown"
```

### 9. Sync with Upstream
Before pushing, ensure your branch is up to date with the latest changes from the original repository:
```bash
git fetch upstream
git rebase upstream/main
```
Resolve any merge conflicts if they occur.

### 10. Push and Open a Pull Request
1. Push your branch to your fork: `git push origin feat/your-feature-name`
2. Navigate to the original repository and open a Pull Request (PR).
3. **Use the provided PR Template** and fill it out completely.
4. Add screenshots for UI changes.
5. Disclose any AI usage if applicable.

---

## Code Style Guidelines

We value high-quality, maintainable code. Please ensure your contributions follow these principles:

### General
* **Readable Code**: Code should be self-documenting. Use meaningful variable and function names.
* **No Unnecessary Dependencies**: Keep the project lean. Do not add massive libraries for trivial tasks.
* **Single Responsibility**: Functions and components should do one thing well.

### Frontend (React)
* **Reusable Components**: Extract UI patterns (buttons, cards, inputs) into reusable components.
* **CSS Modules/Scoping**: Prevent global CSS leaks. Use proper CSS classes and avoid deep nesting.
* **Accessibility (a11y)**: Ensure inputs have labels, buttons have descriptive text, and color contrast is sufficient.
* **State Management**: Keep state as close to where it's needed as possible. 

### Backend (Express)
* **Validation**: Never trust client input. Validate all incoming API requests before processing them.
* **Error Handling**: Do not let the server crash. Use `try/catch` and central error middleware. Do not leak stack traces to the client in normal responses.
* **RESTful Principles**: Keep routes logical (e.g., `GET /events`, `POST /register`).

---

## Review Process
Once your PR is submitted, repository maintainers will review it. Be prepared to address review comments, answer questions about your implementation, and make suggested changes.

Thank you for contributing!

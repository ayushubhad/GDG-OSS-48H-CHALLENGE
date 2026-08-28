# GDG on Campus — OSS Core Team 48-Hour Challenge

You have already completed the OSS Core interview. This challenge is the practical evaluation stage. 

You are not being asked to build a project from scratch. You are being given an existing codebase. Your task is to understand it, improve it, prepare it for delivery, automate the workflow, deploy it, and submit your work through a proper GitHub Pull Request.

**Time Limit: 48 Hours**
*(The exact submission deadline will be communicated separately by the GDG OSS Lead.)*

## Starting Repository

1. **Fork** the repository.
2. **Clone** your fork locally.
3. **Create a feature branch** (e.g., `feat/challenge-submission`).
4. **Work only on that branch**.
5. **Push changes to your fork**.
6. **Create a Pull Request** to the original repository.

**Explicitly:** Do not commit directly to `main`.

---

## Task 1 — Understand the Application
Before making any changes, you must first understand the existing application:
* React frontend
* Express backend
* API flow
* local JSON data
* existing tests
* environment variables

**Requirement:** In the final PR, you must briefly explain the architecture you understood.

---

## Task 2 — UI/UX Improvement
**Requirement:** Implement at least 2 meaningful UI/UX improvements to the existing application.

Acceptable areas include:
* responsive design
* accessibility
* navigation
* search experience
* filtering experience
* event-card design
* registration flow
* form feedback
* loading states
* error states
* empty states
* visual hierarchy
* usability

*Clarification:* Changing only a color, font, or isolated visual property is not sufficient as a meaningful improvement by itself. 

You should explain:
* What problem you identified.
* What you changed.
* Why it improves the user experience.

---

## Task 3 — Backend Improvement
**Requirement:** Implement at least 1 meaningful backend improvement.

Suggested areas:
* input validation
* duplicate registration handling
* API improvements
* error handling
* security improvements
* filtering/pagination
* performance
* backend testing

*Clarification:* You may choose the backend problem you want to address. You must explain the problem, implementation and testing in the PR.

---

## Task 4 — Docker
**Requirement:** Containerize the application.

You must:
* create appropriate Docker configuration
* build the image
* run the container
* verify the application works

Optional advanced improvements may include: multi-stage builds, optimized images, health checks, or Docker Compose.

---

## Task 5 — CI
**Requirement:** Implement a GitHub Actions CI workflow.

Minimum expected workflow:
`Trigger ↓ Install dependencies ↓ Run tests ↓ Build / validate`

The workflow should fail when required validation fails.

Optional improvements: linting, dependency caching, Docker build validation, security scanning, separated frontend/backend jobs.

---

## Task 6 — CD
**Requirement:** Implement automated deployment.

The general workflow should become:
`Code ↓ CI ↓ Tests / Build ↓ Deployment ↓ Live Application`

You may choose an approved deployment platform. The challenge should not require Kubernetes. Kubernetes may be used as an advanced enhancement, but it is optional.

---

## Task 7 — Public Deployment
**Requirement:** Provide a publicly accessible deployment URL.

The evaluator should be able to open the URL and verify that:
* the frontend loads
* the application functions
* API communication works
* important functionality remains operational

The deployed URL must be included in the Pull Request.

---

## Task 8 — Security
**Security is mandatory.** 

You must not commit passwords, API keys, tokens, cloud credentials, private keys, or sensitive personal information. Deployment credentials must be handled through appropriate secret/environment mechanisms.

Accidentally exposing a credential and merely deleting the file is not sufficient. Candidates are expected to revoke/rotate exposed credentials and follow appropriate remediation practices. Refer to [SECURITY.md](SECURITY.md).

---

## Task 9 — Testing
You must preserve the existing tests. You must test your changes and add/update tests where appropriate.

**Requirement:** Existing functionality and tests should not be broken without a justified reason.

The PR should explain:
* tests run
* tests added/updated
* edge cases considered

---

## Task 10 — Documentation
You must update documentation relevant to your work.

The PR should document:
* UI improvements
* backend improvement
* Docker
* CI/CD
* deployment
* environment variables
* testing
* live deployment URL

Documentation should be concise and useful.

---

## AI Usage Policy
AI tools are allowed for this challenge. 

Examples: ChatGPT, Gemini, Claude, GitHub Copilot, other AI-assisted development tools.

AI usage itself is not penalized. But: **Candidates are responsible for understanding, testing, securing and explaining everything they submit.**

Blindly submitting AI-generated code that the candidate cannot explain may negatively affect evaluation. Require candidates to disclose meaningful AI assistance in the PR.

**Example:**
> AI Usage: Used ChatGPT to understand GitHub Actions and troubleshoot Docker configuration. Reviewed, adapted and tested the generated suggestions manually.

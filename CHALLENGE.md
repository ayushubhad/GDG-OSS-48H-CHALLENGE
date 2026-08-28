# GDG on Campus — OSS Core Team 48-Hour Challenge

## Introduction
You have already completed the OSS Core interview. This challenge is the practical evaluation stage. 

You are not being asked to build a project from scratch. You are being given an existing codebase. Your task is to understand it, improve it, prepare it for delivery, automate the workflow, deploy it, and submit your work through a proper GitHub Pull Request.

## Time Limit
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
**AI tools are allowed** and may be used for learning, research, debugging, brainstorming, code assistance and documentation. 

Examples: ChatGPT, Gemini, Claude, GitHub Copilot, other AI-assisted development tools.

AI usage itself is not penalized. But: 
* **Candidates remain responsible for the correctness, security, testing and understanding of all submitted work.**
* **Candidates may be asked to explain implementation decisions or demonstrate the functionality during evaluation.**

Blindly submitting AI-generated code that the candidate cannot explain may negatively affect evaluation. Require candidates to disclose meaningful AI assistance in the PR.

**Example:**
> AI Usage: Used ChatGPT to understand GitHub Actions and troubleshoot Docker configuration. Reviewed, adapted and tested the generated suggestions manually.

---

## Submission Requirements
The candidate's final submission must contain:
1. A Pull Request from their fork to the original repository.
2. All challenge work completed through a feature branch.
3. Working Docker setup.
4. Working CI workflow.
5. Working CD/deployment workflow.
6. Public deployment URL.
7. UI/UX improvements.
8. Backend improvement.
9. Relevant tests.
10. Updated documentation.
11. AI usage disclosure.

> **The Pull Request itself is part of the evaluation.**

The evaluator may review the repository, commit history, Pull Request, workflows, deployment and documentation.

---

## Final Submission Checklist
* [ ] Repository forked
* [ ] Feature branch used
* [ ] No direct commits to `main`
* [ ] Existing application understood
* [ ] At least 2 meaningful UI/UX improvements completed
* [ ] At least 1 meaningful backend improvement completed
* [ ] Docker setup works
* [ ] CI workflow works
* [ ] CD/deployment works
* [ ] Public deployment URL provided
* [ ] Existing tests pass
* [ ] Relevant tests added or updated
* [ ] No secrets committed
* [ ] Documentation updated
* [ ] Pull Request created using the provided template
* [ ] AI usage disclosed

---

## What Is Not Required
Candidates are NOT required to:
* Rebuild the project from scratch.
* Replace the entire frontend.
* Introduce a database.
* Use Kubernetes.
* Use Terraform.
* Use microservices.
* Use a specific cloud provider unless separately communicated.
* Use a specific Docker strategy.
* Add unnecessary infrastructure.

> The objective is to improve and productionize the existing application, not to replace its architecture without reason.

Advanced technologies may be used where justified, but additional complexity does not automatically mean a better submission.

---

## Git & Commit Expectations
Candidates are expected to use Git as part of the development process, not simply upload the final project.

* Work from a feature branch.
* Use meaningful commit messages.
* Keep commits logically organized.
* Push changes to your fork.
* Keep the Pull Request focused.
* Do not artificially create commits simply to increase the commit count.

Examples:
```text
feat: improve event search experience
fix: prevent duplicate event registration
build: add Docker configuration
ci: add automated test workflow
ci: configure deployment workflow
docs: update deployment instructions
```

---

## Evaluation Areas
The submission will broadly be evaluated on:
* Git & GitHub workflow
* Understanding of the existing codebase
* UI/UX improvement quality
* Backend improvement quality
* Docker/containerization
* CI implementation
* CD/deployment
* Security practices
* Testing
* Documentation
* Problem-solving
* Ownership and ability to explain decisions

> The quality, reasoning and reliability of the implementation matter more than the number of features added.

Candidates are not expected to already know every technology used in the challenge. The ability to learn, investigate and solve unfamiliar problems is part of the evaluation.

---

## Important Guidelines

### Preserve Existing Functionality
> Do not intentionally break existing functionality while implementing your improvements.

### Keep Changes Relevant
> Avoid unrelated rewrites or unnecessary dependencies.

### Test Before Submission
> Verify your changes locally before submitting the Pull Request.

### Security
> Never commit secrets, credentials or sensitive information.

### Explain Your Work
> Everything submitted must be understandable and explainable by you, including AI-assisted work.

---

## Final Note

> This challenge is not about knowing every tool beforehand.
>
> It is about how you approach an unfamiliar codebase, learn what you need, solve problems, improve software, work responsibly with Git/GitHub, and deliver a reliable result.
>
> **Focus on understanding your work, not just completing it.**

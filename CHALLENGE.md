# GDG OSS — 48 Hour Contributor Challenge

This challenge is designed to evaluate how candidates understand an existing codebase, learn unfamiliar tools, collaborate using Git/GitHub, improve software, automate workflows, deploy an application, handle security responsibly, and communicate their work.

## Challenge Objective

Candidates must take the existing GDG EventHub application and improve, containerize, automate, and deploy it while following a proper Open Source contribution workflow.

The objective is not to build a new application from scratch. Candidates are expected to work on the existing repository.

## Time Limit

**Time limit: 48 hours**

The exact submission deadline will be communicated separately by the GDG OSS Lead.

## Required Workflow

Candidates must follow:

Fork
↓
Clone
↓
Create Feature Branch
↓
Understand Existing Project
↓
Make Improvements
↓
Commit
↓
Push
↓
Create Pull Request
↓
Deploy
↓
Document

### Do NOT work directly on `main`.
Candidates should use a feature branch.

## Tasks

### Task 1 — Understand the Existing Project
Before making changes, candidates must inspect the repository. They should understand:
* Frontend architecture
* Backend architecture
* API flow
* Existing tests
* Environment configuration
* Existing documentation

> In the final Pull Request, include a short explanation of the existing application architecture as understood by the candidate.

### Task 2 — UI/UX Improvement
**At least 2 meaningful UI/UX improvements.**
Acceptable areas include: Responsive/mobile experience, Accessibility, Navigation, Search experience, Event filtering, Event cards, Registration experience, Form validation feedback, Loading states, Empty states, Error states, Visual hierarchy, Overall usability.

Cosmetic-only changes such as changing one color or font are not sufficient by themselves. The candidate should explain:
1. What problem they identified.
2. What they changed.
3. Why the change improves the user experience.

### Task 3 — Backend Improvement
**At least 1 meaningful backend improvement.**
Areas include: API validation, Registration handling, Duplicate registration handling, Error handling, API response improvements, Filtering/pagination, Security improvements, Performance improvements, Additional meaningful backend tests.

The candidate must document: Problem identified, Approach taken, Result, Tests added/updated.

### Task 4 — Docker
Candidates must containerize the application. Requirements:
* Create an appropriate Docker configuration.
* Build the image successfully.
* Run the application from the container.
* Verify the application works.

### Task 5 — CI Using GitHub Actions
Candidates must implement a CI workflow using GitHub Actions. At minimum, the CI workflow should:
Trigger ↓ Install dependencies ↓ Run tests ↓ Build / validate

The workflow should fail when required validation fails.

### Task 6 — CD / Deployment
Candidates must create an automated deployment workflow:
Code ↓ CI ↓ Validation / Build ↓ Deployment ↓ Live Application

### Task 7 — Public Deployment
Candidates must provide a working public URL that preserves the required functionality. The deployment URL must be included in the Pull Request or README/deployment documentation.

### Task 8 — Security
Candidates must ensure:
* No API keys, passwords, private keys, or cloud credentials are committed.
* `.env` files containing secrets are not committed.
* Deployment secrets are managed appropriately.

> If a credential is accidentally exposed, they are expected to revoke/rotate it immediately and follow appropriate remediation practices.

### Task 9 — Testing
Candidates must preserve the existing tests. Add/update tests for the functionality changed.
> Existing tests must continue to pass unless there is a justified change in expected behaviour.
Document tests executed, new tests added, and any meaningful edge cases tested.

### Task 10 — Documentation
Update documentation where necessary. The Pull Request should clearly explain UI/backend changes, Docker setup, CI/CD workflows, Environment variables, Deployment URL, and Testing performed.

## AI Usage

AI tools are **allowed**. Candidates may use tools such as ChatGPT, Gemini, Claude, GitHub Copilot, etc.

> Candidates are fully responsible for understanding, validating, testing, securing and explaining everything they submit.

Blindly submitting generated code that the candidate cannot explain may negatively affect evaluation. Candidates should disclose meaningful AI assistance in their Pull Request.

Example:
```text
AI Usage:
Used AI assistance to understand GitHub Actions configuration
and troubleshoot Docker build issues. All generated changes were
reviewed, tested and adapted manually.
```

## Pull Request Requirements
The candidate MUST create a Pull Request to the original repository. Use the existing PR template. Do not ask candidates to directly push to the original repository.

## Commit Requirements
> Use meaningful commits that represent logical units of work.

Examples:
```text
feat: improve event filtering UX
fix: validate duplicate registration
build: add Docker configuration
ci: add automated test workflow
ci: configure deployment pipeline
docs: update deployment instructions
```

## What Candidates Are NOT Required To Do
Candidates are NOT required to:
* Rebuild the application from scratch.
* Replace the entire frontend.
* Introduce a database.
* Use Kubernetes.
* Use Terraform.
* Use a specific cloud provider unless specified separately.
* Use a specific frontend framework.
* Use a specific Docker strategy.

## Submission Checklist
* [ ] Repository forked
* [ ] Feature branch used
* [ ] Existing application understood
* [ ] At least 2 meaningful UI/UX improvements completed
* [ ] At least 1 meaningful backend improvement completed
* [ ] Docker setup works
* [ ] CI workflow works
* [ ] CD/deployment works
* [ ] Public deployment URL provided
* [ ] Existing tests pass
* [ ] Relevant tests added/updated
* [ ] No secrets committed
* [ ] README/documentation updated
* [ ] Pull Request created
* [ ] PR template completed
* [ ] AI usage disclosed

## Evaluation Criteria
Candidate will be evaluated on:
Git/GitHub workflow, Understanding of existing code, UI/UX improvement, Backend improvement, Docker/containerization, CI implementation, CD/deployment, Security practices, Testing, Documentation, Problem-solving, Ability to explain decisions, Ownership and initiative.

> **You are not being evaluated on how many technologies you already know. You are being evaluated on how effectively you can understand an unfamiliar project, learn what you need, solve problems, use available tools responsibly, and contribute a working improvement.**

# Security Policy

Security is an important part of the GDG on Campus OSS Core Team selection challenge.

## Best Practices for Candidates

When working on this repository, you **must** adhere to the following security best practices. 

### 1. Never Commit Secrets
Under no circumstances should you commit files containing sensitive information. This includes, but is not limited to:
* `.env` files
* Cloud provider credentials
* API Keys 
* Private keys, tokens, or passwords

**What to do instead:** Use environment variables and appropriate deployment secret mechanisms.

### 2. Safe API Responses
When making backend improvements:
* **Never leak stack traces** or internal server errors directly to the client.
* Sanitize user input to prevent injection attacks.

### 3. Use Mock Data
Do not commit real personal, sensitive, or user information into the repository. 

---

## Reporting a Vulnerability

If you discover a security vulnerability within this project during your challenge, please report it privately to the evaluator or repository maintainers. Do not create a public issue.

## Remediation Policy

Accidentally exposing a credential and merely deleting the file is not sufficient. Candidates are expected to **revoke/rotate exposed credentials immediately** at the source provider and follow appropriate remediation practices.

# Security Policy

Security is a primary concern for the GDG EventHub platform. We take vulnerabilities and the exposure of sensitive data seriously.

## Supported Versions

Currently, we only support the `main` branch of this repository for security updates and patches. 

## Best Practices for Contributors

When contributing to this repository—especially during the 48-Hour Challenge—you **must** adhere to the following security best practices. Violating these practices (such as leaking secrets) is considered a critical failure.

### 1. Never Commit Secrets
Under no circumstances should you commit files containing sensitive information. This includes, but is not limited to:
* `.env`, `.env.local`, `.env.production` files
* Cloud provider credentials (e.g., `AWS_ACCESS_KEY_ID`, GCP JSON keys, Azure connection strings)
* Database URIs (e.g., `MONGO_URI`, PostgreSQL connection strings)
* API Keys (e.g., SendGrid, Stripe, Firebase)
* Private keys, SSH keys, or passwords.

**What to do instead:** Use environment variables and provide a `.env.example` template with dummy values so other developers know what variables are required.

### 2. Dependency Auditing
Before adding new `npm` packages, consider their security footprint. 
* Run `npm audit` locally to check for known vulnerabilities in your dependencies.
* Do not install obscure or unmaintained packages.

### 3. Safe API Responses
When making backend improvements:
* **Never leak stack traces** or internal server errors directly to the client in production.
* Sanitize user input to prevent XSS (Cross-Site Scripting) or injection attacks.
* Do not expose internal server paths in error messages.

### 4. Use Mock Data
Do not commit real personal, sensitive, or user information into the repository. The `data/events.json` file must only contain synthetic, generated, or publicly safe dummy data.

---

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please report it responsibly. 

**DO NOT create a public GitHub issue for security vulnerabilities.**

Instead:
1. Contact the repository maintainers directly via email or private channels.
2. Or use the **GitHub Security Advisory** feature (if enabled on the repository) to privately report the issue.

We will review all reports and respond as quickly as possible to coordinate a fix before public disclosure.

## Remediation Policy
If a credential (like an API key or password) is accidentally exposed in a pull request:
1. **Rotate/Revoke immediately:** The exposed key must be immediately revoked at the source provider.
2. Do not just "delete the file" in a new commit, as the secret remains in the Git history. Revocation is the only safe remediation.

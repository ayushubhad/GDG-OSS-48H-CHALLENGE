# Security Policy

## Supported Versions

Currently, we only support the main branch of this repository for security updates.

## Best Practices

When contributing to this repository, you must adhere to the following security best practices:
* **Never commit secrets:** Do not commit `.env` files.
* **Never commit API keys:** Ensure no external service keys are in the codebase.
* **Never commit passwords or private keys.**
* **Do not commit real personal/sensitive information:** Always use mock data for testing.
* **Use environment variables** where appropriate to handle configuration safely (e.g., use `.env.example` as a template).

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please report it responsibly. 
Do not create a public issue. Instead, contact the repository maintainers directly or use the GitHub security advisory feature if available to privately report the issue. We will review all reports and respond as quickly as possible.

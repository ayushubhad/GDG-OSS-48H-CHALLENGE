# Security Policy

## Supported Versions

Currently, we only support the main branch of this repository for security updates.

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please report it responsibly by contacting the maintainers directly or opening a confidential issue if the platform supports it. 

## Best Practices
- Never commit API keys, passwords, or secrets.
- Never commit `.env` files. Ensure they are listed in `.gitignore`.
- Never expose private credentials.
- Avoid committing personal or sensitive data to the repository.
- Use environment variables (`process.env` / `import.meta.env`) for sensitive configuration.

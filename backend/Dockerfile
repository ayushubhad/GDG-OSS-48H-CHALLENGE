# Lightweight Node.js Alpine base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies with production flag for optimal image size
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source code
COPY src/ ./src/

# Set production environment and default port
ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

# Run as non-root user for security best practices
USER node

# Start Express server
CMD ["node", "src/server.js"]
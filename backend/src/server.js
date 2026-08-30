const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const eventRoutes = require('./routes/events');
const registrationRoutes = require('./routes/registrations');

// Load environment variables from .env file (supports running from root, backend, or backend/src)
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
// Security: Helmet adds secure HTTP headers (XSS filter, anti-clickjacking, CSP, etc.)
app.use(helmet());
// Security: Rate limiting (bypassed during unit/integration testing)
const isTest = process.env.NODE_ENV === 'test';
// General API rate limiter (100 requests per 15 minutes per IP)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  skip: () => isTest,
});
// Stricter registration rate limiter (10 registrations per 15 minutes per IP)
const registrationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    error: 'Too many registration requests from this IP, please try again after 15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: () => isTest,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', apiLimiter);

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/events', eventRoutes);
app.use('/api/register', registrationLimiter, registrationRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

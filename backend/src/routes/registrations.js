const express = require('express');
const router = express.Router();

// Mock database for registrations
const registrations = [];

// POST /api/register
router.post('/', (req, res) => {
  const { name, email, college, eventId } = req.body;

  if (!name || !email || !college || !eventId) {
    return res.status(400).json({ error: 'Missing required fields: name, email, college, eventId' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const newRegistration = {
    id: `reg-${Date.now()}`,
    name,
    email,
    college,
    eventId,
    registeredAt: new Date().toISOString()
  };

  registrations.push(newRegistration);

  res.status(201).json({ message: 'Registration successful', registration: newRegistration });
});

module.exports = router;

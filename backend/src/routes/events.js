const express = require('express');
const router = express.Router();
const events = require('../data/events.json');

// GET /api/events
router.get('/', (req, res) => {
  res.status(200).json(events);
});

// GET /api/events/:id
router.get('/:id', (req, res) => {
  const event = events.find((e) => e.id === req.params.id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.status(200).json(event);
});

module.exports = router;

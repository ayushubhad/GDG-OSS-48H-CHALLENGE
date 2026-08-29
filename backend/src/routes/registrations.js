const express = require('express');
const router = express.Router();
const    supabase = require('../supabase');

 
// POST /api/register
router.post('/', async (req, res) => {
  const { name, email, college, eventId } = req.body;

  if (!name || !email || !college || !eventId) {
    return res
      .status(400)
      .json({ error: 'Missing required fields: name, email, college, eventId' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // 1. Check if the event exists and is not full
    const { data: event, error: eventError } = await supabase
      .from('events')
      .select('*')
      .eq('id', eventId)
      .single();

    if (eventError || !event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    if (event.registeredCount >= event.capacity) {
      return res.status(400).json({ error: 'Event is already fully booked' });
    }

    // 2. Prepare registration record
    const newRegistration = {
      id: `reg-${Date.now()}`,
      name,
      email,
      college,
      eventId,
      registeredAt: new Date().toISOString(),
    };

    // 3. Insert registration record into Supabase
    const { data, error: insertError } = await supabase
      .from('registrations')
      .insert([newRegistration])
      .select()
      .single();

    if (insertError) {
      return res.status(500).json({ error: insertError.message });
    }

    // 4. Increment the registeredCount in the events table
    await supabase
      .from('events')
      .update({ registeredCount: event.registeredCount + 1 })
      .eq('id', eventId);

    res.status(201).json({ message: 'Registration successful', registration: data });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

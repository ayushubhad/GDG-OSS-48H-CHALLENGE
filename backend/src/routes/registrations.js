const express = require('express');
const router = express.Router();
const    supabase = require('../supabase');

 
router.post('/', async (req, res) => {
  const { name, email, college, eventId } = req.body;

  if (!name || !email || !college || !eventId) {
    return res
      .status(400)
      .json({ error: 'Missing required fields: name, email, college, eventId' });
  }

   
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
    registeredAt: new Date().toISOString(),
  };

  try {
    const { data, error } = await supabase
      .from('registrations')
      .insert([newRegistration])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Registration successful', registration: data });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

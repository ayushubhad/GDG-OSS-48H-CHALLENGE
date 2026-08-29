const request = require('supertest');
const app = require('../src/server');

describe('Registrations API', () => {
  describe('POST /api/register', () => {
    it('should successfully register with valid data', async () => {
      const uniqueEmail = `test-${Date.now()}@example.com`;
      const res = await request(app).post('/api/register').send({
        name: 'Test Student',
        email: uniqueEmail,
        college: 'Test University',
        eventId: 'event-001',
      });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message', 'Registration successful');
      expect(res.body.registration).toHaveProperty('id');
      expect(res.body.registration.name).toEqual('Test Student');
    });
    it('should return 409 when registering with a duplicate email for the same event', async () => {
      const duplicateData = {
        name: 'Duplicate Student',
        email: `duplicate-${Date.now()}@example.com`,
        college: 'Test College',
        eventId: 'event-001',
      };
      
      // First registration should succeed (201)
      const firstRes = await request(app).post('/api/register').send(duplicateData);
      expect(firstRes.statusCode).toEqual(201);
      // Second registration with the same email and eventId should return 409 Conflict
      const secondRes = await request(app).post('/api/register').send(duplicateData);
      expect(secondRes.statusCode).toEqual(409);
      expect(secondRes.body).toHaveProperty('error', 'You are already registered for this event');
    });

    it('should return 400 when missing required fields', async () => {
      const res = await request(app).post('/api/register').send({
        name: 'Test Student',
        // email is missing
        college: 'Test University',
        eventId: 'event-001',
      });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error');
    });

    it('should return 400 for invalid email', async () => {
      const res = await request(app).post('/api/register').send({
        name: 'Test Student',
        email: 'not-an-email',
        college: 'Test University',
        eventId: 'event-001',
      });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error', 'Invalid email format');
    });
  });
});

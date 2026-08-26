const request = require('supertest');
const app = require('../src/server');

describe('Registrations API', () => {
  describe('POST /api/register', () => {
    it('should successfully register with valid data', async () => {
      const res = await request(app)
        .post('/api/register')
        .send({
          name: 'Test Student',
          email: 'test@example.com',
          college: 'Test University',
          eventId: 'event-001'
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('message', 'Registration successful');
      expect(res.body.registration).toHaveProperty('id');
      expect(res.body.registration.name).toEqual('Test Student');
    });

    it('should return 400 when missing required fields', async () => {
      const res = await request(app)
        .post('/api/register')
        .send({
          name: 'Test Student',
          // email is missing
          college: 'Test University',
          eventId: 'event-001'
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error');
    });

    it('should return 400 for invalid email', async () => {
      const res = await request(app)
        .post('/api/register')
        .send({
          name: 'Test Student',
          email: 'not-an-email',
          college: 'Test University',
          eventId: 'event-001'
        });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error', 'Invalid email format');
    });
  });
});

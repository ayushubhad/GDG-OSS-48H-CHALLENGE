const request = require('supertest');
const app = require('../src/server');

describe('Events API', () => {
  describe('GET /api/events', () => {
    it('should return a list of events', async () => {
      const res = await request(app).get('/api/events');
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/events/:id', () => {
    it('should return a single event for a valid id', async () => {
      const res = await request(app).get('/api/events/event-001');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('id', 'event-001');
      expect(res.body).toHaveProperty('title');
    });

    it('should return 404 for an invalid id', async () => {
      const res = await request(app).get('/api/events/invalid-id');
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('error', 'Event not found');
    });
  });
});

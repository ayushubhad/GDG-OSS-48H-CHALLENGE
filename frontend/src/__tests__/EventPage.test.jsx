import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import EventPage from '../pages/EventPage';
import * as api from '../services/api';

vi.mock('../services/api', () => ({
  getEventById: vi.fn(),
  registerForEvent: vi.fn(),
}));

const mockEvent = {
  id: 'event-1',
  title: 'React Workshop',
  description: 'Learn React description',
  category: 'Web Development',
  speaker: 'Jane Doe',
  capacity: 100,
  registeredCount: 50,
  date: '2026-10-10',
  time: '10:00',
  venue: 'Room A',
};

describe('Event Details', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderEventPage = (eventId) => {
    render(
      <MemoryRouter initialEntries={[`/events/${eventId}`]}>
        <Routes>
          <Route path="/events/:id" element={<EventPage />} />
        </Routes>
      </MemoryRouter>,
    );
  };

  it('renders event details correctly', async () => {
    api.getEventById.mockResolvedValue(mockEvent);
    renderEventPage('event-1');

    await waitFor(() => {
      expect(screen.getByText('React Workshop')).toBeInTheDocument();
      expect(screen.getByText('Learn React description')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  it('renders 404 error for invalid event', async () => {
    api.getEventById.mockRejectedValue({ response: { status: 404 } });
    renderEventPage('invalid');

    await waitFor(() => {
      expect(screen.getByText('Event not found')).toBeInTheDocument();
    });
  });
});

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import * as api from '../services/api';

// Mock the API service
vi.mock('../services/api', () => ({
  getEvents: vi.fn(),
  getEventById: vi.fn(),
  registerForEvent: vi.fn(),
}));

const mockEvents = [
  {
    id: 'event-1',
    title: 'React Workshop',
    description: 'Learn React',
    category: 'Web Development',
    speaker: 'Jane Doe',
    capacity: 100,
    registeredCount: 50,
  },
  {
    id: 'event-2',
    title: 'Python ML',
    description: 'Learn ML',
    category: 'AI / ML',
    speaker: 'John Smith',
    capacity: 50,
    registeredCount: 50,
  },
];

describe('GDG EventHub Frontend', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Home Page', () => {
    it('renders event list', async () => {
      api.getEvents.mockResolvedValue(mockEvents);
      render(<App />);

      expect(screen.getByText('Loading...')).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByText('React Workshop')).toBeInTheDocument();
        expect(screen.getByText('Python ML')).toBeInTheDocument();
      });
    });

    it('filters events by search', async () => {
      api.getEvents.mockResolvedValue(mockEvents);
      render(<App />);

      await waitFor(() => {
        expect(screen.getByText('React Workshop')).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/Search events/i);
      fireEvent.change(searchInput, { target: { value: 'Python' } });

      expect(screen.queryByText('React Workshop')).not.toBeInTheDocument();
      expect(screen.getByText('Python ML')).toBeInTheDocument();
    });

    it('filters events by category', async () => {
      api.getEvents.mockResolvedValue(mockEvents);
      render(<App />);

      await waitFor(() => {
        expect(screen.getByText('React Workshop')).toBeInTheDocument();
      });

      const categoryBtn = screen.getByRole('button', { name: 'AI / ML' });
      fireEvent.click(categoryBtn);

      expect(screen.queryByText('React Workshop')).not.toBeInTheDocument();
      expect(screen.getByText('Python ML')).toBeInTheDocument();
    });
  });
});

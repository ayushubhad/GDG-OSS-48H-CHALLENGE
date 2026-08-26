import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import * as api from '../services/api';

vi.mock('../services/api', () => ({
  registerForEvent: vi.fn(),
}));

describe('RegistrationForm', () => {
  it('validates required fields by using HTML5 validation', () => {
    render(<RegistrationForm eventId="test-event" />);

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email/i);

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
  });

  it('displays successful registration message', async () => {
    api.registerForEvent.mockResolvedValue({ message: 'Success' });

    render(<RegistrationForm eventId="test-event" />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/College/i), { target: { value: 'MIT' } });

    fireEvent.click(screen.getByRole('button', { name: /Register/i }));

    await waitFor(() => {
      expect(screen.getByText('Registration Successful!')).toBeInTheDocument();
    });
  });

  it('displays error on registration failure', async () => {
    api.registerForEvent.mockRejectedValue({
      response: { data: { error: 'Registration failed test' } },
    });

    render(<RegistrationForm eventId="test-event" />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/College/i), { target: { value: 'MIT' } });

    fireEvent.click(screen.getByRole('button', { name: /Register/i }));

    await waitFor(() => {
      expect(screen.getByText('Registration failed test')).toBeInTheDocument();
    });
  });
});

import React, { useState } from 'react';
import { registerForEvent } from '../services/api';
import './RegistrationForm.css';

const RegistrationForm = ({ eventId, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await registerForEvent({ ...formData, eventId });
      setStatus('success');
      if (onSuccess) onSuccess();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.response?.data?.error || 'Registration failed. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="registration-success" role="status" aria-live="polite">
        <h3>Registration Successful!</h3>
        <p>Thank you for registering. We look forward to seeing you there.</p>
      </div>
    );
  }

  return (
    <form
      className="registration-form"
      onSubmit={handleSubmit}
      aria-labelledby="registration-form-title"
    >
      <h3 id="registration-form-title" className="form-title">
        Register for Event
      </h3>

      {status === 'error' && (
        <div id="form-error" className="error-message" role="alert" aria-live="assertive">
          {errorMessage}
        </div>
      )}

      <div className="input-group">
        <input
          type="text"
          id="name"
          name="name"
          placeholder=" "
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          className="form-input"
          required
          aria-required="true"
          aria-invalid={status === 'error' ? 'true' : 'false'}
          aria-describedby={status === 'error' ? 'form-error' : undefined}
        />
        <label htmlFor="name" className="user-label">
          Full Name
        </label>
      </div>

      <div className="input-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          className="form-input"
          required
          aria-required="true"
          aria-invalid={status === 'error' ? 'true' : 'false'}
          aria-describedby={status === 'error' ? 'form-error' : undefined}
        />
        <label htmlFor="email" className="user-label">
          Email Address
        </label>
      </div>

      <div className="input-group">
        <input
          type="text"
          id="college"
          name="college"
          placeholder=" "
          value={formData.college}
          onChange={handleChange}
          autoComplete="organization"
          className="form-input"
          required
          aria-required="true"
          aria-invalid={status === 'error' ? 'true' : 'false'}
          aria-describedby={status === 'error' ? 'form-error' : undefined}
        />
        <label htmlFor="college" className="user-label">
          College / Organization
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary submit-btn"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? 'Registering...' : 'Register Now'}
      </button>
    </form>
  );
};

export default RegistrationForm;

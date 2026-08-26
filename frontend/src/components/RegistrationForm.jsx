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
      <div className="registration-success">
        <h3>Registration Successful!</h3>
        <p>Thank you for registering. We look forward to seeing you there.</p>
      </div>
    );
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h3>Register for Event</h3>

      {status === 'error' && <div className="error-message">{errorMessage}</div>}

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="college">College / Organization</label>
        <input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-primary submit-btn" disabled={status === 'loading'}>
        {status === 'loading' ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default RegistrationForm;

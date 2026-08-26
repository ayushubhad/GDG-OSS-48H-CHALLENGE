import React from 'react';

const ErrorState = ({ message, onRetry }) => {
  return (
    <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--danger)' }}>
      <h2>Oops! Something went wrong.</h2>
      <p>{message || 'We encountered an error while fetching data.'}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn-primary" style={{ marginTop: '1rem' }}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;

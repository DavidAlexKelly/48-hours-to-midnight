import React, { useState } from 'react';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Get existing emails from localStorage
      const existingEmails = JSON.parse(localStorage.getItem('campaignEmails') || '[]');
      
      // Check if already registered
      if (existingEmails.includes(email)) {
        setStatus('error');
        setMessage('This email is already registered!');
        return;
      }
      
      // Add new email
      existingEmails.push(email);
      localStorage.setItem('campaignEmails', JSON.stringify(existingEmails));
      
      // Success
      setStatus('success');
      setMessage('Thank you for joining the campaign!');
      setEmail('');
      
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="email-signup-card">
      <div className="email-signup-icon">✊</div>
      <h3>Join the Campaign</h3>
      <p>Get updates on our progress and learn how you can help terminate bots and protect Britain.</p>
      
      {status === 'success' ? (
        <div className="email-signup-success">
          <div className="success-icon">✓</div>
          <p>{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="email-signup-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="email-signup-input"
            aria-label="Email address"
          />
          <button type="submit" className="email-signup-button">
            Join the Fight
          </button>
          {status === 'error' && (
            <p className="email-signup-message error">{message}</p>
          )}
        </form>
      )}
      
      <p className="email-signup-privacy">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default EmailSignup;
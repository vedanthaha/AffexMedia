import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboard() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [bank, setBank] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else navigate('/dashboard');
  };

  return (
    <main style={{ padding: '2rem', maxWidth: 400, margin: 'auto' }}>
      <h2>Onboarding</h2>
      {step === 1 && (
        <form onSubmit={handleNext}>
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={e => setBusinessName(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 12, padding: 8 }}
          />
          <button type="submit" style={{ width: '100%', padding: 10 }}>
            Next
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleNext}>
          <input
            type="text"
            placeholder="Bank/Card Name"
            value={bank}
            onChange={e => setBank(e.target.value)}
            required
            style={{ width: '100%', marginBottom: 12, padding: 8 }}
          />
          <button type="submit" style={{ width: '100%', padding: 10 }}>
            Finish
          </button>
        </form>
      )}
    </main>
  );
} 
import React from 'react';

export default function Dashboard() {
  // TODO: Fetch user data from backend
  return (
    <main style={{ padding: '2rem', maxWidth: 600, margin: 'auto' }}>
      <h2>Dashboard</h2>
      <section style={{ marginBottom: 24 }}>
        <h3>Balance</h3>
        <div style={{ fontSize: 32 }}>$0.00</div>
      </section>
      <section style={{ marginBottom: 24 }}>
        <h3>Recent Transactions</h3>
        <ul>
          <li>No transactions yet.</li>
        </ul>
      </section>
      <section>
        <h3>Plan Status</h3>
        <div>Free Tier</div>
      </section>
    </main>
  );
} 
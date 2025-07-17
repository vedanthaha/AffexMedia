import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Auth route (placeholder)
app.post('/api/auth/signup', async (req, res) => {
  // Implement signup logic
  res.json({ message: 'Signup endpoint' });
});

// Onboarding route (placeholder)
app.post('/api/onboard', async (req, res) => {
  // Implement onboarding logic
  res.json({ message: 'Onboarding endpoint' });
});

// Dashboard route (placeholder)
app.get('/api/dashboard', async (req, res) => {
  // Implement dashboard logic
  res.json({ message: 'Dashboard endpoint' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
}); 
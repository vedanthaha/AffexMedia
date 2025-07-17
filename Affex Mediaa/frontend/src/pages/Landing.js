import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../index.css';
import logo from '../assets/affex-logo.png';

const headline = [
  'Put More Cash Back in Your',
  'Business Pocket.'
];

const headlineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const wordVariants = {
  hidden: { opacity: 0, y: 40, rotate: -6 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 80, damping: 12 } },
};

// Restore pillFeatures array above AnimatedFeaturePills
const pillFeatures = [
  'Automatic Adjustments',
  'Real-Time Reports',
  'Secure Transactions',
  'Dedicated Support',
  'Instant Savings',
  'Flexible Payments',
  'Smart Spending',
  'Customizable Plans',
  'Adaptive Rewards',
  'Priority Service',
  'Expense Insights',
  'Seamless Integration',
];

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', background: '#111', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <header style={{
        width: '100%',
        background: 'transparent',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 16,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#181818',
          borderRadius: 22,
          boxShadow: '0 2px 24px rgba(0,0,0,0.18)',
          border: '1.5px solid #232323',
          padding: '0.5rem 3.5rem 0.5rem 2rem',
          maxWidth: 1100,
          width: '100%',
          minHeight: 70,
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}>
          {/* Simple logo */}
          <div style={{
            fontWeight: 900,
            fontSize: 28,
            color: '#fff',
            letterSpacing: 1.5,
            fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
            display: 'flex',
            alignItems: 'center',
            marginRight: 36,
            flexShrink: 0,
            userSelect: 'none',
          }}>
            AFFEX<span style={{ fontWeight: 400, marginLeft: 6, fontSize: 26, color: '#fff', opacity: 0.7 }}>MEDIA</span>
          </div>
          {/* Nav */}
          <nav style={{
            display: 'flex',
            gap: 32,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 500,
            fontSize: 18,
          }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Product</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Reviews</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Benefits</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Pricing</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Changelog</a>
          </nav>
          {/* CTA Button */}
          <div style={{ marginLeft: 32, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <button style={{
              background: 'linear-gradient(90deg, #232323 40%, #00ffe7 100%)',
              color: '#fff',
              fontWeight: 800,
              fontSize: '1.08rem',
              fontFamily: 'Coolvetica, Arial, sans-serif',
              boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
              whiteSpace: 'nowrap',
              minWidth: 120,
              maxWidth: '100%',
              padding: '0.8rem 1.3rem',
              borderRadius: 12,
              border: '1.5px solid #232323',
              transition: 'all 0.18s',
              letterSpacing: 0.5,
              outline: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textShadow: '0 1px 6px #111, 0 0px 1px #00ffe7',
              boxSizing: 'border-box',
              marginRight: 8,
            }}>
              <span style={{marginRight: 8, fontSize: 18, display: 'inline-block', lineHeight: 1}}>&#8599;</span> Get Affex Media
            </button>
          </div>
        </div>
      </header>
      {/* HERO SECTION - open, premium, no card */}
      <main style={{
        marginTop: 90,
        marginBottom: 60,
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%',
        maxWidth: 1200,
        padding: '0 2vw',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 520,
      }}>
        {/* Wavy SVG line - top left */}
        <svg width="600" height="220" viewBox="0 0 600 220" style={{ position: 'absolute', top: -60, left: -120, zIndex: 0, opacity: 0.13, filter: 'blur(0.5px)' }}>
          <path d="M0,180 Q150,80 300,180 T600,180" stroke="#00ffe7" strokeWidth="6" fill="none" />
          <path d="M0,200 Q150,100 300,200 T600,200" stroke="#00ffe7" strokeWidth="3" fill="none" />
        </svg>
        {/* Wavy SVG line - bottom right */}
        <svg width="700" height="220" viewBox="0 0 700 220" style={{ position: 'absolute', bottom: -60, right: -180, zIndex: 0, opacity: 0.13, filter: 'blur(0.5px)' }}>
          <path d="M0,40 Q200,180 350,40 T700,40" stroke="#00ffe7" strokeWidth="6" fill="none" />
          <path d="M0,60 Q200,200 350,60 T700,60" stroke="#00ffe7" strokeWidth="3" fill="none" />
        </svg>
        {/* Subtle radial gradient background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120vw',
          height: 700,
          background: 'radial-gradient(ellipse at center, #23272f 0%, #111 70%)',
          opacity: 0.7,
          zIndex: -1,
          pointerEvents: 'none',
        }} />
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 60 }}
          style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #222 60%, #00ffe7 100%)',
            color: '#fff',
            fontWeight: 500,
            fontSize: 15,
            borderRadius: 999,
            padding: '6px 20px',
            marginBottom: 32,
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
            letterSpacing: 0.2,
          }}>
          55,000+ trusted Businesses
        </motion.div>
        {/* Headline with animation */}
        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: '4.2rem',
            fontWeight: 400,
            fontStyle: 'italic',
            margin: '0 0 1.5rem 0',
            lineHeight: 1.08,
            color: '#fff',
            letterSpacing: -1,
            textShadow: '0 2px 24px #000',
            maxWidth: 900,
            display: 'inline-block',
          }}
        >
          {headline.map((line, i) => (
            <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
              {line.split(' ').map((word, j) => (
                <motion.span
                  key={j}
                  variants={wordVariants}
                  style={{ display: 'inline-block', marginRight: 8 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 60 }}
          style={{
            color: '#c7c7c7',
            fontSize: 22,
            marginBottom: 48,
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: 600,
          }}
        >
          Maximize savings with Affex Media, the AI-powered business card that optimizes every purchase, giving you unmatched value effortlessly.
        </motion.p>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, type: 'spring', stiffness: 60 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 36 }}
        >
          <button className="secondary" style={{ minWidth: 140, fontWeight: 500, border: '2px solid #fff', background: 'transparent', color: '#fff', fontSize: 18, transition: 'all 0.18s', padding: '1rem 2.2rem' }}>More Info</button>
          <Link to="/signup"><button style={{ minWidth: 140, fontWeight: 800, background: 'linear-gradient(90deg, #fff 80%, #00ffe7 100%)', color: '#111', fontSize: '1.1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.13)', transition: 'all 0.18s', padding: '1rem 2.2rem', textShadow: '0 1px 6px #fff, 0 0px 1px #00ffe7' }}>Get Started</button></Link>
        </motion.div>
        {/* Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, type: 'spring', stiffness: 60 }}
          style={{ color: '#888', fontSize: 15, marginBottom: 8 }}
        >
          *No long-term commitment, cancel anytime.*
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, type: 'spring', stiffness: 60 }}
          style={{ color: '#888', fontSize: 15 }}
        >
          *Instant savings first, monthly updates on the 1st.*
        </motion.div>
      </main>
      {/* Trusted By Logo Bar */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
        style={{
          width: '100%',
          maxWidth: 900,
          margin: '0 auto 48px auto',
          padding: '0 2vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ color: '#bbb', fontWeight: 500, fontSize: 17, marginBottom: 18, letterSpacing: 0.2 }}>
          Trusted by teams at
        </div>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', opacity: 0.7 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" style={{ height: 32, filter: 'grayscale(1) brightness(1.5)' }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Supabase_Logo.png" alt="Supabase" style={{ height: 32, filter: 'grayscale(1) brightness(1.5)' }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Vercel-logo.svg" alt="Vercel" style={{ height: 32, filter: 'grayscale(1) brightness(1.5)' }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Netlify_logo.svg" alt="Netlify" style={{ height: 32, filter: 'grayscale(1) brightness(1.5)' }} />
          <span style={{ fontSize: 18, color: '#bbb', fontWeight: 400, letterSpacing: 0.5, textShadow: 'none', textDecoration: 'none' }}>+ more</span>
        </div>
      </motion.section>
      {/* Feature Highlights Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, type: 'tween', ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: 1200,
          margin: '120px auto 120px auto', // Increased top and bottom margin for centering
          padding: '0 2vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="tthoves-body" style={{ color: '#00ffe7', fontWeight: 700, fontSize: 16, marginBottom: 18, marginTop: 10, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8, textShadow: 'none', textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ display: 'inline-block' }}><circle cx="11" cy="11" r="11" fill="#00ffe7" opacity="0.18"/><path d="M11 5v2M11 15v2M5 11h2M15 11h2M7.8 7.8l1.4 1.4M12.8 12.8l1.4 1.4M7.8 14.2l1.4-1.4M12.8 9.2l1.4-1.4" stroke="#00ffe7" strokeWidth="1.5" strokeLinecap="round"/></svg>
          THE AFFEX ADVANTAGES
        </div>
        <h2 className="nexa-heading" style={{ fontSize: '2.6rem', fontWeight: 800, color: '#fff', margin: '0 0 2.2rem 0', letterSpacing: -1, textShadow: 'none', textDecoration: 'none' }}>Why Choose Us?</h2>
        <div style={{ color: '#bbb', fontSize: 20, fontWeight: 400, marginBottom: 56, maxWidth: 700, textAlign: 'center' }}>
          Leverage the power of AI to automatically optimize your purchases, ensuring you get the best value for your business with every transaction.
        </div>
        <div style={{
          display: 'flex',
          gap: 48,
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 1100,
        }}>
          {/* Feature Card 1 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.7, type: 'tween', ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              background: '#181818',
              borderRadius: 18,
              boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
              padding: '2.8rem 2.2rem 2.4rem 2.2rem',
              minWidth: 320,
              maxWidth: 360,
              flex: '1 1 320px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: 32,
              border: '1.5px solid #232323',
            }}
          >
            {/* Icon: Sparkle/AI */}
            <div style={{ background: '#232323', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, marginTop: 2 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#00ffe7" opacity="0.13"/><path d="M14 7v3M14 18v3M7 14h3M18 14h3M10.5 10.5l2 2M15.5 15.5l2 2M10.5 17.5l2-2M15.5 12.5l2-2" stroke="#00ffe7" strokeWidth="1.7" strokeLinecap="round"/></svg>
            </div>
            <div className="nexa-heading" style={{ fontWeight: 800, fontSize: 22, marginBottom: 18, color: '#fff', textShadow: 'none', textDecoration: 'none', marginTop: 0 }}>AI-Optimized Savings</div>
            <div className="tthoves-body" style={{ marginTop: 2 }}>
              Never miss an opportunity to save. Our AI dynamically adjusts to maximize your savings on every purchase in real-time.
            </div>
          </motion.div>
          {/* Feature Card 2 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.7, type: 'tween', ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              background: '#181818',
              borderRadius: 18,
              boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
              padding: '2.8rem 2.2rem 2.4rem 2.2rem',
              minWidth: 320,
              maxWidth: 360,
              flex: '1 1 320px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: 32,
              border: '1.5px solid #232323',
            }}
          >
            {/* Icon: Bar Chart */}
            <div style={{ background: '#232323', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, marginTop: 2 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#00ffe7" opacity="0.13"/><rect x="8" y="14" width="3" height="6" rx="1.5" fill="#00ffe7" /><rect x="13" y="10" width="3" height="10" rx="1.5" fill="#00ffe7" /><rect x="18" y="17" width="3" height="3" rx="1.5" fill="#00ffe7" /></svg>
            </div>
            <div className="nexa-heading" style={{ fontWeight: 800, fontSize: 22, marginBottom: 18, color: '#fff', textShadow: 'none', textDecoration: 'none', marginTop: 0 }}>Real-Time Insights</div>
            <div className="tthoves-body" style={{ marginTop: 2 }}>
              Stay in control with detailed analytics. Get transparent spending reports and intelligent insights to guide your financial decisions.
            </div>
          </motion.div>
          {/* Feature Card 3 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.7, type: 'tween', ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              background: '#181818',
              borderRadius: 18,
              boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
              padding: '2.8rem 2.2rem 2.4rem 2.2rem',
              minWidth: 320,
              maxWidth: 360,
              flex: '1 1 320px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: 32,
              border: '1.5px solid #232323',
            }}
          >
            {/* Icon: Refresh/Loop */}
            <div style={{ background: '#232323', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, marginTop: 2 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#00ffe7" opacity="0.13"/><path d="M19 14a5 5 0 1 1-5-5" stroke="#00ffe7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14 9 19 9 19 14" stroke="#00ffe7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="nexa-heading" style={{ fontWeight: 800, fontSize: 22, marginBottom: 18, color: '#fff', textShadow: 'none', textDecoration: 'none', marginTop: 0 }}>Flexible Plans</div>
            <div className="tthoves-body" style={{ marginTop: 2 }}>
              Adaptive plans adjust monthly, ensuring you always get the best savings, rewards, and maximum value for your business needs.
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Animated Feature Pills Section */}
      <section style={{
        width: '100%',
        maxWidth: 1400,
        margin: '0 auto 120px auto',
        padding: '0 2vw',
        overflow: 'hidden',
        position: 'relative',
        minHeight: 220,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
      }}>
        <AnimatedFeaturePills />
      </section>
      {/* Why We Shine? (Benefits) Section */}
      <section style={{
        width: '100%',
        maxWidth: 1300,
        margin: '0 auto 120px auto',
        padding: '0 2vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <div style={{ color: '#00ffe7', fontWeight: 800, fontSize: 16, marginBottom: 18, letterSpacing: 2, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif', textTransform: 'uppercase' }}>
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }}>
            <circle cx="11" cy="11" r="10" fill="#00ffe7" opacity="0.18"/>
            <path d="M11 5v2M11 15v2M5 11h2M15 11h2M7.8 7.8l1.4 1.4M12.8 12.8l1.4 1.4M7.8 14.2l1.4-1.4M12.8 9.2l1.4-1.4" stroke="#00ffe7" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          BENEFITS
        </div>
        <h2 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#fff', margin: '0 0 1.2rem 0', letterSpacing: -1, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif' }}>Why We Shine ?</h2>
        <div style={{ color: '#c7c7c7', fontSize: 22, marginBottom: 48, fontWeight: 400, lineHeight: 1.5, maxWidth: 700, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif' }}>
          Leverage the power of AI to automatically optimize your purchases, ensuring you get the best value for your business with every transaction.
        </div>
        <BenefitsGrid />
      </section>
      {/* Our Approach (Process) Section */}
      <section style={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto 120px auto',
        padding: '0 2vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <div style={{ color: '#00ffe7', fontWeight: 700, fontSize: 16, marginBottom: 18, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ display: 'inline-block' }}><circle cx="11" cy="11" r="11" fill="#00ffe7" opacity="0.18"/><path d="M11 5v2M11 15v2M5 11h2M15 11h2M7.8 7.8l1.4 1.4M12.8 12.8l1.4 1.4M7.8 14.2l1.4-1.4M12.8 9.2l1.4-1.4" stroke="#00ffe7" strokeWidth="1.5" strokeLinecap="round"/></svg>
          PROCESS
        </div>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', margin: '0 0 1.2rem 0', letterSpacing: -1, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif' }}>Our Approach</h2>
        <div style={{ color: '#c7c7c7', fontSize: 21, marginBottom: 48, fontWeight: 400, lineHeight: 1.5, maxWidth: 700, fontFamily: 'TT Hoves Pro, Helvetica Neue, Arial, sans-serif' }}>
          Our streamlined process ensures quick, efficient results, from setup to completion. Enjoy clear steps and full transparency at every stage.
        </div>
        <ProcessGrid />
      </section>
      {/* Not sure if we're a fit? Section */}
      <section style={{
        width: '100%',
        maxWidth: 700,
        margin: '0 auto 80px auto',
        padding: '48px 2vw',
        background: 'linear-gradient(120deg, #181818 60%, #111 100%)',
        borderRadius: 22,
        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
      }}>
        <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#fff', marginBottom: 18, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif', letterSpacing: -0.5 }}>Not sure if we’re a fit?</h2>
        <div style={{ color: '#c7c7c7', fontSize: 19, fontWeight: 400, marginBottom: 32, fontFamily: 'TT Hoves Pro, Helvetica Neue, Arial, sans-serif' }}>
          Let’s set up a 15 minute call to figure out if we can help you.
        </div>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#00ffe7',
            color: '#111',
            fontWeight: 700,
            fontSize: 19,
            borderRadius: 12,
            border: 'none',
            padding: '1rem 2.2rem',
            boxShadow: '0 2px 12px rgba(0,255,231,0.13)',
            cursor: 'pointer',
            transition: 'background 0.18s',
            fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif',
          }}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#25D366"/><path d="M16 6.667c-5.15 0-9.333 4.183-9.333 9.333 0 1.65.45 3.267 1.3 4.667L6 26l5.433-1.417c1.367.733 2.883 1.117 4.567 1.117 5.15 0 9.333-4.183 9.333-9.333S21.15 6.667 16 6.667zm0 16c-1.45 0-2.833-.367-4.033-1.05l-.283-.167-3.217.85.85-3.117-.183-.283C8.367 17.5 8 16.217 8 14.999c0-4.417 3.583-8 8-8s8 3.583 8 8-3.583 8-8 8zm4.367-5.367c-.233-.117-1.367-.683-1.583-.767-.217-.083-.367-.117-.517.117-.15.233-.583.767-.717.917-.133.15-.267.167-.5.05-.233-.117-.983-.362-1.872-1.153-.692-.617-1.158-1.378-1.292-1.611-.133-.233-.014-.358.1-.475.1-.1.233-.267.35-.4.117-.133.15-.233.233-.383.083-.15.042-.283-.021-.4-.062-.117-.517-1.25-.708-1.708-.187-.45-.377-.383-.517-.383-.133 0-.283-.017-.433-.017-.15 0-.4.058-.617.283-.217.225-.85.833-.85 2.033 0 1.2.867 2.358.983 2.525.117.167 1.708 2.617 4.15 3.567.583.2 1.033.317 1.383.408.583.15 1.117.125 1.542.075.467-.058 1.367-.558 1.558-1.1.192-.542.192-1.008.133-1.1-.058-.092-.208-.15-.442-.267z" fill="#fff"/></svg>
            Contact on WhatsApp
          </button>
        </a>
      </section>
      {/* Footer */}
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .affex-nav {
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}

function AnimatedFeaturePills() {
  const pillWidth = 160; // fixed min width for readability
  const speed = 2;
  // Triple the pills for seamless loop
  const pills = pillFeatures.concat(pillFeatures, pillFeatures);
  const setLength = pillFeatures.length;
  const totalWidth = setLength * (pillWidth + 18); // 18px gap

  // Top row: scroll left (negative direction), start at -totalWidth
  const [scrollXTop, setScrollXTop] = React.useState(-totalWidth);
  // Bottom row: scroll right (positive direction), start at -totalWidth
  const [scrollXBottom, setScrollXBottom] = React.useState(-totalWidth);

  React.useEffect(() => {
    let frameTop, frameBottom;
    function animateTop() {
      setScrollXTop(prev => {
        let next = prev - speed;
        // Reset when two sets have scrolled out of view
        if (next <= -2 * totalWidth) {
          return -totalWidth;
        }
        return next;
      });
      frameTop = requestAnimationFrame(animateTop);
    }
    function animateBottom() {
      setScrollXBottom(prev => {
        let next = prev + speed;
        if (next >= 0) {
          return -totalWidth;
        }
        return next;
      });
      frameBottom = requestAnimationFrame(animateBottom);
    }
    frameTop = requestAnimationFrame(animateTop);
    frameBottom = requestAnimationFrame(animateBottom);
    return () => {
      cancelAnimationFrame(frameTop);
      cancelAnimationFrame(frameBottom);
    };
  }, [totalWidth]);

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        minHeight: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}
    >
      {/* Top row (animated, infinite scroll left) */}
      <div style={{ position: 'relative', width: '100%', height: 60, overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '18px',
            alignItems: 'center',
            width: 'max-content',
            height: 60,
            margin: 0,
            willChange: 'transform',
            transition: 'none',
            transform: `translateX(${scrollXTop}px)`,
          }}
        >
          {pills.map((feature, i) => (
            <Pill key={i} text={feature} index={i} minWidth={pillWidth} />
          ))}
        </div>
      </div>
      {/* Bottom row (animated, infinite scroll right) */}
      <div style={{ position: 'relative', width: '100%', height: 60, overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '18px',
            alignItems: 'center',
            width: 'max-content',
            height: 60,
            margin: 0,
            willChange: 'transform',
            transition: 'none',
            transform: `translateX(${scrollXBottom}px)`,
          }}
        >
          {pills.map((feature, i) => (
            <Pill key={i} text={feature} index={i} minWidth={pillWidth} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Pill({ text, index, minWidth }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: index * 0.07, type: 'spring', stiffness: 60 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{
        background: '#00ffe7',
        color: '#111',
        fontWeight: 600,
        fontSize: 18,
        fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif',
        borderRadius: 26,
        padding: '0.7rem 1.6rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        margin: 0,
        minWidth: minWidth || 160,
        textAlign: 'center',
        letterSpacing: 0.1,
        border: 'none',
        outline: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        opacity: 0.97,
        backdropFilter: 'blur(1.5px)',
      }}
    >
      {text}
    </motion.div>
  );
}

const benefits = [
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="16" fill="#00ffe7" opacity="0.13"/>
        <text x="13" y="28" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="22" fill="#00ffe7">$</text>
      </svg>
    ),
    title: 'Instant Savings',
    desc: 'Get immediate savings on every purchase, powered by AI to optimize your transactions in real-time. No setup required, just seamless savings.'
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M10 28 Q19 10 28 28" stroke="currentColor" strokeWidth="3"/><circle cx="14" cy="18" r="2" fill="currentColor"/><circle cx="19" cy="14" r="2" fill="currentColor"/><circle cx="24" cy="22" r="2" fill="currentColor"/></svg>
    ),
    title: 'Real-Time Insights',
    desc: 'Access detailed spending reports and intelligent insights to make smarter financial decisions. Stay informed with transparency at every step.'
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M28 19a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="3"/><path d="M19 13v6l4 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    title: 'Flexible Plans',
    desc: 'Choose customizable plans that adapt to your business’s unique needs, offering the flexibility to adjust as your requirements evolve.'
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="10" y="14" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="3"/><circle cx="19" cy="20" r="2" fill="currentColor"/></svg>
    ),
    title: 'Secure Transactions',
    desc: 'Every transaction is protected with the latest encryption technology, ensuring your business is always secure and your data safe.'
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="15" stroke="currentColor" strokeWidth="3"/><path d="M19 10v9l6 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    title: 'Adaptive Features',
    desc: 'Enjoy automatic adjustments to your savings and plans, tailored to match your business’s spending patterns and goals.'
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><rect x="10" y="14" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="3"/><path d="M19 18v4" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><circle cx="19" cy="22" r="2" fill="currentColor"/></svg>
    ),
    title: 'Dedicated Support',
    desc: 'Access personalized assistance whenever you need it from our expert support team, helping you make the most of your benefits.'
  },
];

function BenefitsGrid() {
  // 3D tilt effect handler
  function handleMouseMove(e, setRotate) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8;
    setRotate({ x: rotateX, y: rotateY });
  }
  function handleMouseLeave(setRotate) {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '36px',
        marginTop: 8,
      }}
    >
      {benefits.map((b, i) => {
        const [rotate, setRotate] = React.useState({ x: 0, y: 0 });
        return (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.08, type: 'spring', stiffness: 60 }}
            whileHover={{ scale: 1.045, boxShadow: '0 8px 40px 0 #00ffe733' }}
            style={{
              background: '#181818',
              borderRadius: 20,
              boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
              border: '1.5px solid #232323',
              padding: '2.4rem 2.2rem 2.2rem 2.2rem',
              color: '#232323',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 260,
              position: 'relative',
              overflow: 'hidden',
              transform: `perspective(900px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: 'box-shadow 0.25s cubic-bezier(.4,1.2,.4,1), transform 0.22s cubic-bezier(.4,1.2,.4,1)',
            }}
            onMouseMove={e => handleMouseMove(e, setRotate)}
            onMouseLeave={() => handleMouseLeave(setRotate)}
          >
            <div style={{ marginBottom: 24 }}>
              {/* Icon with blue color */}
              {React.cloneElement(b.icon, { color: '#00ffe7' })}
            </div>
            <div style={{ fontWeight: 800, fontSize: 24, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif', marginBottom: 18, color: '#fff', letterSpacing: -0.5 }}>{b.title}</div>
            <div style={{ fontWeight: 400, fontSize: 18, color: '#c7c7c7', lineHeight: 1.6, fontFamily: 'TT Hoves Pro, Helvetica Neue, Arial, sans-serif' }}>{b.desc}</div>
          </motion.div>
        );
      })}
    </div>
  );
}

const processSteps = [
  {
    title: 'Simplified Onboarding',
    bullets: [
      'Quick and easy setup for immediate use.',
      'Step-by-step guidance for smooth integration.',
      'No technical expertise required to get started.'
    ]
  },
  {
    title: 'AI-Powered Efficiency',
    bullets: [
      'Automatic savings on every transaction.',
      'Real-time analytics to track spending.',
      'Seamless adjustments to maximize savings.'
    ]
  },
  {
    title: 'Transparent Communication',
    bullets: [
      'Regular updates on progress and changes.',
      'Clear terms and no hidden fees.',
      'Dedicated support available at all stages.'
    ]
  },
  {
    title: 'Flexible Solutions',
    bullets: [
      'Customizable plans based on your needs.',
      'Monthly adjustments to suit business changes.',
      'Freedom to upgrade or adjust anytime.'
    ]
  },
];

function ProcessGrid() {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
        gap: '36px',
        marginTop: 8,
      }}
    >
      {processSteps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: i * 0.09, type: 'spring', stiffness: 60 }}
          style={{
            background: '#181818',
            borderRadius: 20,
            boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
            border: '1.5px solid #232323',
            padding: '2.4rem 2.2rem 2.2rem 2.2rem',
            color: '#232323',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minHeight: 220,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ marginBottom: 24, fontWeight: 800, fontSize: 22, color: '#00ffe7', background: 'rgba(0,255,231,0.08)', borderRadius: 999, padding: '8px 18px', display: 'inline-block', fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif', letterSpacing: 1 }}>{String(i+1).padStart(2, '0')}</div>
          <div style={{ fontWeight: 800, fontSize: 26, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif', marginBottom: 18, color: '#fff', letterSpacing: -0.5 }}>{step.title}</div>
          <ul style={{ color: '#c7c7c7', fontSize: 18, fontFamily: 'TT Hoves Pro, Helvetica Neue, Arial, sans-serif', lineHeight: 1.7, margin: 0, paddingLeft: 24 }}>
            {step.bullets.map((b, j) => (
              <li key={j} style={{ marginBottom: 10 }}>{b}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#111',
      borderTop: '1px solid #232323',
      marginTop: 80,
      padding: '0 0 32px 0',
      fontFamily: 'TT Hoves Pro, Nexa, Helvetica Neue, Arial, sans-serif',
    }}>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '36px 2vw 0 2vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 32,
      }}>
        {/* Left: Logo and Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#00ffe7" opacity="0.18"/><path d="M14 7v2M14 19v2M7 14h2M19 14h2M10.5 10.5l2 2M15.5 15.5l2 2M10.5 17.5l2-2M15.5 12.5l2-2" stroke="#00ffe7" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span style={{ fontWeight: 800, fontSize: 22, color: '#fff', letterSpacing: 1, fontFamily: 'Nexa, TT Hoves Pro, Helvetica Neue, Arial, sans-serif' }}>Affex Media</span>
        </div>
        {/* Center: Nav Links */}
        <nav style={{ display: 'flex', gap: 36, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <a href="#" style={{ color: '#bbb', textDecoration: 'none', fontWeight: 500, fontSize: 18 }}>Product</a>
          <a href="#" style={{ color: '#bbb', textDecoration: 'none', fontWeight: 500, fontSize: 18 }}>Benefits</a>
          <a href="#" style={{ color: '#bbb', textDecoration: 'none', fontWeight: 500, fontSize: 18 }}>Reviews</a>
          <a href="#" style={{ color: '#bbb', textDecoration: 'none', fontWeight: 500, fontSize: 18 }}>Pricing</a>
        </nav>
        {/* Right: Social Icons */}
        <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
          <a href="https://www.instagram.com/affexxmedia?igsh=MXY1djNndnN4ZGJ0Yw==" aria-label="Instagram" style={{ color: '#bbb' }} target="_blank" rel="noopener noreferrer">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 28 28">
              <rect x="3" y="3" width="22" height="22" rx="6"/>
              <path d="M19 14.5A5.5 5.5 0 1 1 14.5 9 5.5 5.5 0 0 1 19 14.5z"/>
              <circle cx="20.5" cy="7.5" r="1"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/shourya-raghuvanshi-0a891627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" style={{ color: '#bbb', display: 'flex', alignItems: 'center', justifyContent: 'center' }} target="_blank" rel="noopener noreferrer">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 28 28">
              <rect x="3" y="3" width="22" height="22" rx="6"/>
              <text x="9.2" y="18.5" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="12.5" fill="currentColor" alignment-baseline="middle">in</text>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" style={{ color: '#bbb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="11"/>
              <path d="M9 9l10 10M19 9l-10 10" strokeWidth="2.2"/>
            </svg>
          </a>
        </div>
      </div>
      <div style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: '18px 2vw 0 2vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 24,
        fontSize: 16,
        color: '#bbb',
      }}>
        <div>© {new Date().getFullYear()} Affex Media</div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <span>Made by Affex Team</span>
        </div>
      </div>
    </footer>
  );
} 
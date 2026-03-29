import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#1a1a1a', color: '#aaa', paddingTop: '4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', paddingBottom: '3rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.8rem' }}>🐘</span>
            <span style={{ fontFamily: "'Playfair Display', serif", color: '#c8860a', fontSize: '1.3rem', fontWeight: 700 }}>
              Tembo Tours
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#888' }}>
            Kenya's premier safari and adventure tourism company. Creating unforgettable memories since 2009.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontFamily: "'DM Sans', sans-serif", marginBottom: '1.25rem', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { to: '/', label: 'Home' },
              { to: '/destinations', label: 'Destinations' },
              { to: '/tours', label: 'Tours' },
              { to: '/accommodation', label: 'Accommodation' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} style={{ color: '#888', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.color = '#c8860a'}
                  onMouseOut={e => e.currentTarget.style.color = '#888'}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontFamily: "'DM Sans', sans-serif", marginBottom: '1.25rem', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
            <p>Nairobi, Kenya</p>
            <a href="tel:+254700000000" style={{ color: '#888', transition: 'color 0.2s' }}
              onMouseOver={e => e.currentTarget.style.color = '#c8860a'}
              onMouseOut={e => e.currentTarget.style.color = '#888'}
            >
              +254 700 000 000
            </a>
            <a href="mailto:info@tembotours.co.ke" style={{ color: '#888', transition: 'color 0.2s' }}
              onMouseOver={e => e.currentTarget.style.color = '#c8860a'}
              onMouseOut={e => e.currentTarget.style.color = '#888'}
            >
              info@tembotours.co.ke
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontFamily: "'DM Sans', sans-serif", marginBottom: '1.25rem', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Newsletter
          </h4>
          <p style={{ fontSize: '0.88rem', color: '#888', marginBottom: '1rem', lineHeight: 1.6 }}>
            Get travel tips and exclusive deals delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: '10px 12px',
                borderRadius: '6px',
                border: '1px solid #333',
                background: '#2a2a2a',
                color: '#fff',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
            <button style={{
              background: '#c8860a',
              color: '#fff',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #2a2a2a', padding: '1.5rem 5%', textAlign: 'center', fontSize: '0.85rem', color: '#555' }}>
        <p>2025 Tembo Tours. All rights reserved. Proudly Kenyan.</p>
      </div>
    </footer>
  );
};

export default Footer;

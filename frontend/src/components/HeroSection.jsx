import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div style={{
      height: '100vh',
      minHeight: '600px',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=2072")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '0 5%',
    }}>
      <p style={{
        fontSize: '0.9rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        opacity: 0.85,
        marginBottom: '1rem',
        fontWeight: 600,
      }}>
        Kenya's Premier Safari Company
      </p>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        marginBottom: '1.5rem',
        fontWeight: 700,
        lineHeight: 1.15,
        maxWidth: '800px',
      }}>
        Experience the Majesty of Kenya's Wild
      </h1>
      <p style={{
        fontSize: '1.15rem',
        maxWidth: '560px',
        marginBottom: '2.5rem',
        opacity: 0.9,
        lineHeight: 1.7,
      }}>
        From the Maasai Mara to Diani Beach, we craft journeys that stay with you forever.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/tours" className="btn-primary" style={{
          background: '#f4bb51',
          color: '#fff',
          padding: '15px 35px',
          borderRadius: '6px',
          fontWeight: 600,
          fontSize: '1rem',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Explore Tours
        </Link>
        <Link to="/contact" style={{
          border: '2px solid rgba(255,255,255,0.8)',
          color: '#fff',
          padding: '13px 33px',
          borderRadius: '6px',
          fontWeight: 600,
          fontSize: '1rem',
          fontFamily: "'DM Sans', sans-serif",
          transition: 'background 0.2s',
        }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseOut={e => e.currentTarget.style.background = 'transparent'}
        >
          Contact Us
        </Link>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '2rem',
        display: 'flex',
        gap: '3rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0 5%',
      }}>
        {[
          { num: '15+', label: 'Years Experience' },
          { num: '500+', label: 'Happy Clients' },
          { num: '30+', label: 'Tour Packages' },
        ].map(({ num, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>{num}</div>
            <div style={{ fontSize: '0.85rem', opacity: 0.75, marginTop: '2px' }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

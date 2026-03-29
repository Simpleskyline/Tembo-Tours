import React from 'react';

const HeroSection = () => {
  return (
    <div style={{
      height: '80vh',
      width: '100%',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1516422275681-460fdf5eb930?auto=format&fit=crop&q=80&w=2070")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Explore the Wild with Tembo Tours</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Unforgettable safaris and coastal adventures across Kenya. Book your dream getaway today.
      </p>
      <button style={{
        padding: '15px 30px',
        fontSize: '1rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        View Our Tours
      </button>
    </div>
  );
};

export default HeroSection;
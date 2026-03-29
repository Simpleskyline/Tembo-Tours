import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
  const { title, destination, duration, price_kes, image, is_featured } = tour;

  return (
    <div className="card" style={{ position: 'relative' }}>
      {is_featured && (
        <span className="badge" style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 1 }}>
          Featured
        </span>
      )}
      <div style={{ height: '220px', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ padding: '1.25rem' }}>
        <p style={{ fontSize: '0.8rem', color: '#c8860a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
          {destination}
        </p>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', marginBottom: '0.75rem', color: '#1a1a1a' }}>
          {title}
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f0e8e0' }}>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '2px' }}>Duration</p>
            <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{duration}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '2px' }}>From</p>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#c8860a' }}>
              KES {Number(price_kes).toLocaleString()}
            </p>
          </div>
        </div>
        <Link
          to="/contact"
          className="btn-primary"
          style={{
            display: 'block',
            textAlign: 'center',
            marginTop: '1rem',
            padding: '10px',
            background: '#c8860a',
            color: '#fff',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '0.9rem',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Book This Tour
        </Link>
      </div>
    </div>
  );
};

export default TourCard;

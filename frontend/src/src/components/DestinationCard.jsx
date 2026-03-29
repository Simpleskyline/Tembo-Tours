import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const { name, image, description, tourCount } = destination;

  return (
    <div style={{
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      height: '300px',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    }}>
      <img
        src={image}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s',
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 40%, transparent)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '1.5rem',
      }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '1.5rem', marginBottom: '0.3rem' }}>
          {name}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
          {description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#f0c070', fontSize: '0.85rem', fontWeight: 600 }}>
            {tourCount} tours available
          </span>
          <Link
            to="/tours"
            style={{
              color: '#fff',
              background: 'rgba(200,134,10,0.85)',
              padding: '6px 14px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            View Tours
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

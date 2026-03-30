import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
  return (
    <div className="card">
      <div style={{ height: '250px', position: 'relative', borderBottom: '2px solid #000' }}>
        <img src={tour.image} alt={tour.title} style={{ height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, background: '#f3ae2d', color: '#000', padding: '5px 15px', fontWeight: 'bold', fontSize: '0.8rem' }}>
          {tour.duration}
        </div>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{tour.title}</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{tour.destination}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>KES {Number(tour.price_kes).toLocaleString()}</span>
          <Link to="/contact" style={{ background: '#000', color: '#FFF', padding: '8px 16px', fontWeight: 'bold' }}>
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TourCard;
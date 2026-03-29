import React, { useState } from 'react';
import TourCard from '../components/TourCard';

const ALL_TOURS = [
  { id: 1, title: 'Maasai Mara Safari', destination: 'Maasai Mara', duration: '3 Days, 2 Nights', price_kes: 45000, image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&q=80&w=800', is_featured: true },
  { id: 2, title: 'Amboseli & Kilimanjaro Views', destination: 'Amboseli', duration: '2 Days, 1 Night', price_kes: 28000, image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800', is_featured: false },
  { id: 3, title: 'Diani Beach Getaway', destination: 'Mombasa Coast', duration: '4 Days, 3 Nights', price_kes: 55000, image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&q=80&w=800', is_featured: true },
  { id: 4, title: 'Lake Nakuru Flamingo Tour', destination: 'Nakuru', duration: '1 Day', price_kes: 12000, image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800', is_featured: false },
  { id: 5, title: 'Tsavo East & West Safari', destination: 'Tsavo', duration: '3 Days, 2 Nights', price_kes: 38000, image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800', is_featured: false },
  { id: 6, title: 'Mount Kenya Trekking', destination: 'Mount Kenya', duration: '5 Days, 4 Nights', price_kes: 75000, image: 'https://images.unsplash.com/photo-1590688711-d9f3f76f0f6c?auto=format&fit=crop&q=80&w=800', is_featured: true },
  { id: 7, title: 'Lamu Island Cultural Tour', destination: 'Lamu', duration: '3 Days, 2 Nights', price_kes: 48000, image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800', is_featured: false },
  { id: 8, title: 'Samburu National Reserve', destination: 'Samburu', duration: '3 Days, 2 Nights', price_kes: 42000, image: 'https://images.unsplash.com/photo-1551649001-7a2482d98d05?auto=format&fit=crop&q=80&w=800', is_featured: false },
];

const DESTINATIONS = ['All', 'Maasai Mara', 'Mombasa Coast', 'Amboseli', 'Nakuru', 'Tsavo', 'Mount Kenya', 'Lamu', 'Samburu'];

const Tours = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? ALL_TOURS : ALL_TOURS.filter(t => t.destination === filter);

  return (
    <div>
      <div
        className="page-hero"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="page-hero-content">
          <h1>Our Tours</h1>
          <p>Choose your perfect Kenyan adventure</p>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
            {DESTINATIONS.map(dest => (
              <button
                key={dest}
                onClick={() => setFilter(dest)}
                style={{
                  padding: '8px 18px',
                  border: filter === dest ? '2px solid #c8860a' : '2px solid #e0d8d0',
                  borderRadius: '30px',
                  background: filter === dest ? '#c8860a' : 'transparent',
                  color: filter === dest ? '#fff' : '#555',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {dest}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filtered.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: '#888', padding: '3rem 0' }}>
              No tours found for this destination.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tours;

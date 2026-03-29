import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TourCard from '../components/TourCard';
import DestinationCard from '../components/DestinationCard';

const FEATURED_TOURS = [
  {
    id: 1,
    title: 'Maasai Mara Safari',
    destination: 'Maasai Mara',
    duration: '3 Days, 2 Nights',
    price_kes: 45000,
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&q=80&w=800',
    is_featured: true,
  },
  {
    id: 2,
    title: 'Amboseli & Kilimanjaro Views',
    destination: 'Amboseli',
    duration: '2 Days, 1 Night',
    price_kes: 28000,
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800',
    is_featured: false,
  },
  {
    id: 3,
    title: 'Diani Beach Getaway',
    destination: 'Diani, Mombasa',
    duration: '4 Days, 3 Nights',
    price_kes: 55000,
    image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&q=80&w=800',
    is_featured: true,
  },
];

const TOP_DESTINATIONS = [
  {
    id: 1,
    name: 'Maasai Mara',
    description: 'Witness the Great Migration',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800',
    tourCount: 8,
  },
  {
    id: 2,
    name: 'Diani Beach',
    description: 'Pristine Indian Ocean shores',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    tourCount: 5,
  },
  {
    id: 3,
    name: 'Mount Kenya',
    description: 'Africa\'s second highest peak',
    image: 'https://images.unsplash.com/photo-1590688711-d9f3f76f0f6c?auto=format&fit=crop&q=80&w=800',
    tourCount: 4,
  },
];

const WHY_US = [
  { icon: '🌍', title: 'Expert Local Guides', desc: 'Our guides are born and raised in these landscapes and know every trail.' },
  { icon: '💰', title: 'Best Value Packages', desc: 'Premium safari experiences starting from just KES 15,000 per person.' },
  { icon: '🛡️', title: 'Safe & Reliable', desc: 'Your safety is our top priority. All vehicles are insured and maintained.' },
  { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock support before, during and after your journey.' },
];

const Home = () => {
  return (
    <div>
      <HeroSection />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Featured Tours</h2>
          <p className="section-subtitle">Handpicked experiences for the adventurous traveller</p>
          <div className="grid-3">
            {FEATURED_TOURS.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <Link to="/tours" className="btn-outline" style={{ marginTop: '3rem', display: 'inline-block' }}>
            View All Tours
          </Link>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Top Destinations</h2>
          <p className="section-subtitle">Kenya's most breathtaking places, curated for you</p>
          <div className="grid-3">
            {TOP_DESTINATIONS.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Why Choose Tembo Tours?</h2>
          <p className="section-subtitle">Over 15 years of creating unforgettable Kenyan adventures</p>
          <div className="grid-2" style={{ textAlign: 'left', marginTop: '1rem' }}>
            {WHY_US.map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&q=80&w=2000") center/cover',
        padding: '6rem 5%',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '1rem' }}>
          Ready for Your African Adventure?
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Let us plan your perfect Kenyan safari. Custom packages available.
        </p>
        <Link to="/contact" className="btn-primary" style={{ background: '#c8860a', color: '#fff', padding: '15px 40px', borderRadius: '6px', fontWeight: 600, fontSize: '1rem' }}>
          Start Planning
        </Link>
      </section>
    </div>
  );
};

export default Home;

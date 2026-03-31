import React from 'react';
import { Link } from 'react-router-dom';

const ACCOMMODATIONS = [
  {
    id: 1,
    name: 'Mara Serena Safari Lodge',
    location: 'Maasai Mara',
    type: 'Lodge',
    stars: 5,
    priceFrom: 28000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/41081034.jpg?k=3ce40988cf5e827a8c2150260ed6c3ac178b0b11199408c6dfbd92971760e362&o=',
    desc: 'Perched on a ridge overlooking the Mara River, this iconic lodge offers world-class comfort in the heart of the Mara.',
    amenities: ['Swimming pool', 'Restaurant & bar', 'Wi-Fi', 'Game drives included'],
  },
  {
    id: 2,
    name: 'Amboseli Sopa Lodge',
    location: 'Amboseli',
    type: 'Lodge',
    stars: 4,
    priceFrom: 18000,
    image: 'https://theholidaydealers.com/wp-content/uploads/2023/03/Amboseli-Sopa-Lodge_2.jpg',
    desc: 'Set against the backdrop of Mount Kilimanjaro, this lodge offers stunning views and exceptional wildlife experiences.',
    amenities: ['Pool', 'Spa', 'Restaurant', 'Cultural evenings'],
  },
  {
    id: 3,
    name: 'Diani Reef Beach Resort',
    location: 'Diani Beach',
    type: 'Beach Resort',
    stars: 4,
    priceFrom: 22000,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/95/4a/ce/diani-reef-beach-resort.jpg?w=900&h=500&s=1',
    desc: 'An award-winning beachfront resort offering direct access to Diani\'s pristine white sands and crystal-clear waters.',
    amenities: ['Private beach', 'Water sports', 'Multiple restaurants', 'Kids club'],
  },
  {
    id: 4,
    name: 'Lewa Safari Camp',
    location: 'Lewa Conservancy',
    type: 'Tented Camp',
    stars: 4,
    priceFrom: 35000,
    image: 'https://xplorato.com/wp-content/uploads/2014/09/tented-camp.jpg',
    desc: 'Experience the authentic bush camp feel while enjoying modern comforts in a private conservancy renowned for rhino conservation.',
    amenities: ['Guided walks', 'Night game drives', 'Conservancy access', 'Full board'],
  },
  {
    id: 5,
    name: 'Sentrim Tsavo Lodge',
    location: 'Tsavo East',
    type: 'Lodge',
    stars: 3,
    priceFrom: 9500,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b7/76/a4/restaurant.jpg?w=900&h=500&s=1',
    desc: 'A budget-friendly lodge offering comfortable accommodation and excellent game viewing in Tsavo East National Park.',
    amenities: ['Restaurant', 'Bar', 'Game drives', 'Wi-Fi in common areas'],
  },
  {
    id: 6,
    name: 'Baobab Beach Resort',
    location: 'Mombasa',
    type: 'Beach Resort',
    stars: 3,
    priceFrom: 15000,
    image: 'https://images.trvl-media.com/lodging/21000000/20010000/20006200/20006119/70c6e92f.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    desc: 'A tropical paradise on the south coast of Kenya blending African and Arabian influences with lush gardens and warm hospitality.',
    amenities: ['Beachfront', 'Spa', 'Multiple pools', 'Live entertainment'],
  },
];

const stars = (n) => Array.from({ length: 5 }, (_, i) => i < n ? '★' : '☆').join('');

const Accommodation = () => {
  return (
    <div>
      <div
        className="page-hero"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="page-hero-content">
          <h1>Accommodation</h1>
          <p>Carefully selected lodges, camps and resorts</p>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Where You'll Stay</h2>
            <p className="section-subtitle">From tented camps to luxury lodges, every stay is memorable</p>
          </div>

          <div className="grid-2">
            {ACCOMMODATIONS.map(acc => (
              <div key={acc.id} className="card">
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={acc.image} alt={acc.name} style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <span style={{
                    position: 'absolute', top: '12px', right: '12px',
                    background: 'rgba(0,0,0,0.7)', color: '#fff',
                    padding: '4px 10px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 600,
                  }}>
                    {acc.type}
                  </span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', color: '#1a1a1a' }}>
                      {acc.name}
                    </h3>
                    <span style={{ color: '#080808', fontSize: '0.85rem', flexShrink: 0, marginLeft: '0.5rem' }}>
                      {stars(acc.stars)}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#f70606', fontWeight: 600, marginBottom: '0.75rem' }}>
                    📍 {acc.location}
                  </p>
                  <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {acc.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {acc.amenities.map(a => (
                      <span key={a} style={{ background: '#f5f0ea', color: '#666', padding: '4px 10px', borderRadius: '4px', fontSize: '0.78rem' }}>
                        {a}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f0e8e0' }}>
                    <div>
                      <p style={{ fontSize: '0.78rem', color: '#0c0c0c' }}>From</p>
                      <p style={{ fontWeight: 700, color: '#c8860a', fontSize: '1.1rem' }}>
                        KES {acc.priceFrom.toLocaleString()}<span style={{ fontSize: '0.8rem', color: '#131212', fontWeight: 400 }}>/night</span>
                      </p>
                    </div>
                    <Link to="/contact" style={{
                      background: '#00BFFF', color: '#fff',
                      padding: '9px 20px', borderRadius: '6px',
                      fontWeight: 600, fontSize: '0.88rem',
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;

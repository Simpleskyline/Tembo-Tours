import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Featured Tours Section */}
      <section style={{ padding: '4rem 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Travel With Us?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '2rem' }}>
          <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '10px' }}>
            <h3>Expert Guides</h3>
            <p>Our local guides have years of experience in the Savannah.</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '10px' }}>
            <h3>Affordable Prices</h3>
            <p>High-quality tours starting from 15,000 KES.</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '10px' }}>
            <h3>Safe & Secure</h3>
            <p>Your safety is our priority throughout the journey.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
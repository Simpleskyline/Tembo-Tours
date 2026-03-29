import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 5%', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Plane size={32} color="#007bff" />
        <h2 style={{ margin: 0, color: '#333' }}>Tembo Tours</h2>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'center' }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link></li>
        <li><Link to="/destinations" style={{ textDecoration: 'none', color: '#333' }}>Destinations</Link></li>
        <li><Link to="/tours" style={{ textDecoration: 'none', color: '#333' }}>Tours</Link></li>
        <li><Link to="/accommodation" style={{ textDecoration: 'none', color: '#333' }}>Accommodation</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: '#333', background: '#007bff', color: '#fff', padding: '8px 15px', borderRadius: '5px' }}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    height: '70px',
    transition: 'background 0.3s, box-shadow 0.3s',
    background: scrolled || !isHome ? '#ffffff' : 'transparent',
    boxShadow: scrolled || !isHome ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
  };

  const linkColor = scrolled || !isHome ? '#1a1a1a' : '#ffffff';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/tours', label: 'Tours' },
    { to: '/accommodation', label: 'Accommodation' },
  ];

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <span style={{ fontSize: '1.8rem' }}>🐘</span>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '1.3rem',
          color: scrolled || !isHome ? '#c8860a' : '#ffffff',
          transition: 'color 0.3s',
        }}>
          Tembo Tours
        </span>
      </Link>

      <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center', margin: 0, padding: 0 }}>
        {links.map(({ to, label }) => (
          <li key={to} style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>
            <Link
              to={to}
              style={{
                color: location.pathname === to ? '#c8860a' : linkColor,
                fontWeight: location.pathname === to ? 600 : 400,
                fontSize: '0.95rem',
                transition: 'color 0.2s',
                borderBottom: location.pathname === to ? '2px solid #c8860a' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/contact"
            style={{
              background: '#c8860a',
              color: '#ffffff',
              padding: '10px 22px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'background 0.2s',
            }}
          >
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

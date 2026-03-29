import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled;

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
    transition: 'background 0.35s, box-shadow 0.35s',
    background: transparent ? 'transparent' : '#ffffff',
    boxShadow: transparent ? 'none' : '0 2px 20px rgba(0,0,0,0.08)',
  };

  const linkColor = transparent ? '#c8860a' : '#060605';
  const logoColor = transparent ? '#c8860a' : '#c8860a';

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
          color: logoColor,
          transition: 'color 0.35s',
        }}>
          Tembo Tours
        </span>
      </Link>

      <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center', margin: 0, padding: 0 }}>
        {links.map(({ to, label }) => {
          const isActive = location.pathname === to;
          return (
            <li key={to}>
              <Link
                to={to}
                style={{
                  color: isActive ? '#c8860a' : linkColor,
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '0.95rem',
                  transition: 'color 0.2s',
                  paddingBottom: '3px',
                  borderBottom: isActive ? '2px solid #c8860a' : '2px solid transparent',
                  textShadow: transparent && !isActive ? '0 1px 3px rgba(0,0,0,0.4)' : 'none',
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
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
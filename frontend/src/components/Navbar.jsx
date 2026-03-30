import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

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

  const linkColor = transparent ? '#ffffff' : '#060605';
  const logoColor = '#c8860a';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/tours', label: 'Tours' },
    { to: '/accommodation', label: 'Accommodation' },
  ];

  return (
    <>
      <style>{`
        .nav-links-desktop {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 5px;
          align-items: center;
          justify-content: center;
        }
        .hamburger-line {
          width: 24px;
          height: 2px;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          z-index: 999;
          flex-direction: column;
          padding: 2rem 5%;
          gap: 0.25rem;
          overflow-y: auto;
        }
        .mobile-menu.open {
          display: flex;
        }
        .mobile-nav-link {
          display: block;
          padding: 1rem 0;
          font-size: 1.1rem;
          font-weight: 500;
          color: #1a1a1a;
          border-bottom: 1px solid #f0ece6;
          transition: color 0.2s;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #c8860a;
        }
        .mobile-book-btn {
          margin-top: 1.5rem;
          background: #00BFFF;
          color: #ffffff;
          padding: 14px 22px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1rem;
          font-family: 'DM Sans', sans-serif;
          text-align: center;
          text-decoration: none;
          display: block;
        }
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none;
          }
          .hamburger-btn {
            display: flex;
          }
        }
      `}</style>

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

        <ul className="nav-links-desktop">
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
                    textDecoration: 'none',
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
                background: '#00BFFF',
                color: '#ffffff',
                padding: '10px 22px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              Book Now
            </Link>
          </li>
        </ul>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" style={{
            background: transparent ? '#ffffff' : '#1a1a1a',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span className="hamburger-line" style={{
            background: transparent ? '#ffffff' : '#1a1a1a',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span className="hamburger-line" style={{
            background: transparent ? '#ffffff' : '#1a1a1a',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`mobile-nav-link${location.pathname === to ? ' active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link to="/contact" className="mobile-book-btn">
          Book Now
        </Link>
      </div>
    </>
  );
};

export default Navbar;
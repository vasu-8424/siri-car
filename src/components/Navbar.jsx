import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" onClick={close}>
          <div className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M4 20L6 12H26L28 20H4Z" fill="#f5a623" opacity="0.9"/>
              <rect x="3" y="20" width="26" height="5" rx="2.5" fill="#f5a623"/>
              <circle cx="9" cy="26" r="3" fill="#0a0f1e" stroke="#f5a623" strokeWidth="1.5"/>
              <circle cx="23" cy="26" r="3" fill="#0a0f1e" stroke="#f5a623" strokeWidth="1.5"/>
              <path d="M10 16H22" stroke="#0a0f1e" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__brand">SIRI</span>
            <span className="navbar__brand-sub">CAR RENTALS</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="navbar__link">{l.label}</a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="tel:+918977934454" className="btn-primary navbar__cta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          Call Now
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={close}>{l.label}</a>
        ))}
        <div className="navbar__mobile-actions">
          <a href="tel:+918977934454" className="btn-primary" onClick={close}>📞 Call Now</a>
          <a href="https://wa.me/918977934454" className="btn-whatsapp" onClick={close} target="_blank" rel="noreferrer">💬 WhatsApp</a>
        </div>
      </div>
    </header>
  );
}

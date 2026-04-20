import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top-bar" />

      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path d="M4 20L6 12H26L28 20H4Z" fill="#f5a623" opacity="0.9"/>
                  <rect x="3" y="20" width="26" height="5" rx="2.5" fill="#f5a623"/>
                  <circle cx="9" cy="26" r="3" fill="#0a0f1e" stroke="#f5a623" strokeWidth="1.5"/>
                  <circle cx="23" cy="26" r="3" fill="#0a0f1e" stroke="#f5a623" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <span className="footer__brand-name">SIRI</span>
                <span className="footer__brand-sub">CAR RENTALS</span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Visakhapatnam's trusted 24/7 car rental service. Self-drive, chauffeur-driven, airport transfers & outstation trips.
            </p>
            <div className="footer__socials">
              <a href="https://instagram.com/siricarrentals" className="footer__social" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://wa.me/918977934454" className="footer__social footer__social--wa" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:+918977934454" className="footer__social footer__social--call" aria-label="Call">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__links-group">
            <h4 className="footer__links-title">Services</h4>
            <ul className="footer__links">
              <li><a href="#services">Self-Drive Rentals</a></li>
              <li><a href="#services">Chauffeur-Driven</a></li>
              <li><a href="#services">Airport Transfers</a></li>
              <li><a href="#services">Outstation Trips</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Fleet</h4>
            <ul className="footer__links">
              <li><a href="#fleet">5-Seater Cars</a></li>
              <li><a href="#fleet">7-Seater Cars</a></li>
              <li><a href="#fleet">Premium Vehicles</a></li>
              <li><a href="#fleet">Thar & Fortuner</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Contact</h4>
            <ul className="footer__links footer__links--contact">
              <li>
                <span>📞</span>
                <a href="tel:+918977934454">+91 89779 34454</a>
              </li>
              <li>
                <span>✉️</span>
                <a href="mailto:Sai.vizag007@gmail.com">Sai.vizag007@gmail.com</a>
              </li>
              <li>
                <span>📍</span>
                <span>2-74 v juttada, pendurthi, Visakhapatnam 531173</span>
              </li>
              <li>
                <span>🕐</span>
                <span>24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {year} SIRI CAR RENTALS. All rights reserved. | 2-74 v juttada, pendurthi, Visakhapatnam 531173</p>
          <button className="footer__back-top" onClick={scrollTop} aria-label="Back to top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}

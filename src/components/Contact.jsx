import './Contact.css';

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      {/* Background glow */}
      <div className="contact__glow" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className="contact__header">
          <span className="section-tag">📞 Get In Touch</span>
          <h2 className="section-title">
            Ready to Ride?<br /><span>Book In Seconds.</span>
          </h2>
          <div className="gradient-div" />
          <p className="section-sub">
            No booking forms. No waiting. Just call or WhatsApp us and we'll sort everything out instantly.
          </p>
        </div>

        <div className="contact__layout">
          {/* Contact Cards */}
          <div className="contact__cards">
            {/* Phone */}
            <a href="tel:+919876543210" className="contact-card contact-card--phone">
              <div className="contact-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">Call Us Directly</span>
                <strong className="contact-card__value">+91 98765 43210</strong>
                <span className="contact-card__sub">Available 24/7, every day</span>
              </div>
              <div className="contact-card__arrow">→</div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210?text=Hi%20SIRI%20CAR%20RENTALS%2C%20I%20want%20to%20book%20a%20car!"
              className="contact-card contact-card--whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-card__icon contact-card__icon--wa">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">WhatsApp Us</span>
                <strong className="contact-card__value">+91 98765 43210</strong>
                <span className="contact-card__sub">Fastest response guaranteed</span>
              </div>
              <div className="contact-card__arrow contact-card__arrow--wa">→</div>
            </a>

            {/* Email */}
            <a href="mailto:siricarrentals@gmail.com" className="contact-card contact-card--email">
              <div className="contact-card__icon contact-card__icon--email">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">Email Us</span>
                <strong className="contact-card__value">siricarrentals@gmail.com</strong>
                <span className="contact-card__sub">For inquiries & quotes</span>
              </div>
              <div className="contact-card__arrow contact-card__arrow--email">→</div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/siricarrentals"
              className="contact-card contact-card--insta"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-card__icon contact-card__icon--insta">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">Follow on Instagram</span>
                <strong className="contact-card__value">@siricarrentals</strong>
                <span className="contact-card__sub">Fleet updates & offers</span>
              </div>
              <div className="contact-card__arrow contact-card__arrow--insta">→</div>
            </a>
          </div>

          {/* Info Panel */}
          <div className="contact__info-panel glass-card">
            <h3 className="contact__panel-title">Quick Info</h3>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <span>Visakhapatnam, Andhra Pradesh</span>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <span>24/7 — We're always open</span>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">✈️</span>
                <div>
                  <strong>Airport Transfers</strong>
                  <span>Visakhapatnam International Airport</span>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">🗺️</span>
                <div>
                  <strong>Service Area</strong>
                  <span>Vizag + outstation across AP & beyond</span>
                </div>
              </div>
            </div>

            <div className="contact__panel-ctas">
              <a href="tel:+919876543210" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                📞 Call & Book Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20SIRI%20CAR%20RENTALS%2C%20I%20want%20to%20book%20a%20car!"
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

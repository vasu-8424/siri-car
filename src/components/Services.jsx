import './Services.css';

const SERVICES = [
  {
    id: 'self-drive',
    img: '/images/swift.png',
    title: 'Self-Drive Rentals',
    tag: 'Most Popular',
    desc: 'Take the wheel yourself. Hourly, daily, and weekly packages available. Flexible pickup & drop across Visakhapatnam.',
    highlights: ['No driver hassle', 'Hourly & daily plans', 'GPS-enabled vehicles', 'Fuel-efficient fleet'],
    accent: '#f5a623',
  },
  {
    id: 'driver',
    img: '/images/suzuki.png',
    title: 'Chauffeur-Driven',
    tag: 'Premium',
    desc: 'Sit back and relax with our professional, courteous drivers. Ideal for business travel, weddings, and special occasions.',
    highlights: ['Verified drivers', 'On-time guarantee', 'Corporate bookings', 'Special occasions'],
    accent: '#6366f1',
  },
  {
    id: 'airport',
    img: '/images/hero_banner.png', // Temporary placeholder
    title: 'Airport Transfers',
    tag: 'On-Time',
    desc: 'Reliable pickup and drop-off at Visakhapatnam International Airport, 24/7, every day of the year.',
    highlights: ['Flight-tracked arrival', '24/7 availability', 'Meet & greet service', 'Fixed pricing'],
    accent: '#10b981',
  },
  {
    id: 'outstation',
    img: '/images/tata.png',
    title: 'Outstation / Long Drives',
    tag: 'Anywhere',
    desc: 'Weekend getaways, pilgrimages, or business trips. We cover all major routes from Vizag across Andhra Pradesh & beyond.',
    highlights: ['Araku & Borra Caves', 'Hyderabad routes', 'Multi-day packages', 'Comfortable long rides'],
    accent: '#e85d26',
  },
];

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        {/* Header */}
        <div className="services__header">
          <span className="section-tag">⚡ Our Services</span>
          <h2 className="section-title">
            Everything You Need,<br /><span>One Call Away</span>
          </h2>
          <div className="gradient-div" />
          <p className="section-sub">
            From quick city hops to long-haul outstation trips — SIRI CAR RENTALS has you covered, 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Grid */}
        <div className="services__grid">
          {SERVICES.map((s) => (
            <div key={s.id} className="service-card" style={{ '--card-accent': s.accent }}>
              <div className="service-card__image-container">
                <img src={s.img} alt={s.title} className="service-card__img" />
              </div>
              <div className="service-card__header">
                <span className="service-card__tag" style={{ color: s.accent, background: `${s.accent}15`, borderColor: `${s.accent}30` }}>
                  {s.tag}
                </span>
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <ul className="service-card__list">
                {s.highlights.map(h => (
                  <li key={h}>
                    <span className="check" style={{ color: s.accent }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(s.title)}`}
                className="service-card__cta"
                target="_blank"
                rel="noreferrer"
                style={{ '--c': s.accent }}
              >
                Book This Service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

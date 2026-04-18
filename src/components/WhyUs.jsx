import './WhyUs.css';

const REASONS = [
  {
    icon: '🕐',
    title: '24/7 Round-the-Clock Service',
    desc: 'We never sleep so you don\'t have to worry. Book any time — midnight, early morning, or public holidays.',
    color: '#f5a623',
  },
  {
    icon: '📍',
    title: 'Local Vizag Experts',
    desc: 'Born and based in Visakhapatnam. We know every route, every shortcut, and every scenic detour.',
    color: '#6366f1',
  },
  {
    icon: '✅',
    title: 'Verified, Well-Maintained Fleet',
    desc: 'Every car is regularly serviced, sanitized, and insured. No surprises on the road.',
    color: '#10b981',
  },
  {
    icon: '💼',
    title: 'Flexible Rental Plans',
    desc: 'Hourly, daily, or multi-day packages. With or without driver. Customize to your exact need.',
    color: '#e85d26',
  },
  {
    icon: '🔒',
    title: 'Transparent Pricing',
    desc: 'No hidden charges. No surge pricing traps. The quote you get is the price you pay.',
    color: '#ec4899',
  },
  {
    icon: '⚡',
    title: 'Instant Confirmation',
    desc: 'Book via WhatsApp or phone and get confirmed within minutes. No lengthy online forms.',
    color: '#14b8a6',
  },
];

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    city: 'Hyderabad',
    stars: 5,
    text: 'Used SIRI CAR RENTALS for our Araku Valley trip from Vizag. The Innova Crysta was immaculate and the driver was extremely professional. Will book again!',
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    city: 'Visakhapatnam',
    stars: 5,
    text: 'Got a self-drive Fronx for 3 days. Smooth process, great car condition, and they were reachable even at 11pm when I had a question. 10/10!',
    avatar: 'PS',
  },
  {
    name: 'Venkat Rao',
    city: 'Vijayawada',
    stars: 5,
    text: 'Airport pickup was exactly on time at 5 AM. The Fortuner was spotless. Premium experience at a fair price. Highly recommend for business trips.',
    avatar: 'VR',
  },
];

export default function WhyUs() {
  return (
    <section className="whyus section-pad" id="why-us">
      <div className="container">
        {/* Header */}
        <div className="whyus__header">
          <span className="section-tag">💡 Why Choose Us</span>
          <h2 className="section-title">
            The SIRI Difference —<br /><span>Reliability You Can Count On</span>
          </h2>
          <div className="gradient-div" />
          <p className="section-sub">
            We don't just rent cars. We take full responsibility for your journey from start to finish.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="whyus__grid">
          {REASONS.map(r => (
            <div key={r.title} className="reason-card glass-card">
              <div className="reason-card__icon" style={{ background: `${r.color}18`, border: `1px solid ${r.color}30` }}>
                <span style={{ fontSize: '1.8rem' }}>{r.icon}</span>
              </div>
              <h3 className="reason-card__title">{r.title}</h3>
              <p className="reason-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h3 className="testimonials__title">What Our Customers Say</h3>
          <div className="testimonials__grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial-card glass-card">
                <div className="testimonial-card__stars">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

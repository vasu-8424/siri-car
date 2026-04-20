import { useState } from 'react';
import './Fleet.css';

const CATEGORIES = [
  {
    id: '5-seater',
    label: '5-Seater',
    icon: '🚗',
    cars: [
      {
        name: 'Maruti Swift',
        type: 'Hatchback',
        seats: 5,
        ac: true,
        fuel: 'Petrol',
        img: '/images/swift.png',
        tag: 'Popular',
        imgPosition: 'center 80%',
      },
      {
        name: 'Maruti Dzire',
        type: 'Sedan',
        seats: 5,
        ac: true,
        fuel: 'Petrol/CNG',
        img: '/images/Brezza 2022.jpg',
        tag: null,
      },
      {
        name: 'Maruti Baleno',
        type: 'Premium Hatchback',
        seats: 5,
        ac: true,
        fuel: 'Petrol',
        img: '/images/baleno.jpg',
        tag: 'Comfort Pick',
        imgPosition: 'center 80%',
      },
      {
        name: 'Maruti Fronx',
        type: 'Compact SUV',
        seats: 5,
        ac: true,
        fuel: 'Petrol',
        img: '/images/fronx.jpg',
        tag: 'New',
      },
      {
        name: 'Hyundai i20',
        type: 'Premium Hatchback',
        seats: 5,
        ac: true,
        fuel: 'Petrol',
        img: '/images/i20.jpg',
        tag: 'Smooth Ride',
      },
    ],
  },
  {
    id: '7-seater',
    label: '7-Seater',
    icon: '🚐',
    cars: [
      {
        name: 'Maruti Ertiga',
        type: 'MPV',
        seats: 7,
        ac: true,
        fuel: 'Petrol/CNG',
        img: '/images/ertiga.jpg',
        tag: 'Best Value',
      },
      {
        name: 'Kia Carens',
        type: 'Premium MPV',
        seats: 7,
        ac: true,
        fuel: 'Petrol/Diesel',
        img: '/images/kia.jpg',
        tag: 'Premium MPV',
      },
      {
        name: 'Toyota Innova',
        type: 'Luxury MPV',
        seats: 7,
        ac: true,
        fuel: 'Diesel',
        img: '/images/innova.jpg',
        tag: 'Elite',
      },
      {
        name: 'Toyota Innova Crysta',
        type: 'VIP MPV',
        seats: 7,
        ac: true,
        fuel: 'Diesel',
        img: '/images/crysta.jpg',
        tag: 'Top Choice',
        imgPosition: 'center 80%',
      },
    ],
  },
  {
    id: 'premium',
    label: 'Premium',
    icon: '👑',
    cars: [
      {
        name: 'Tata Safari Storme',
        type: 'Full-size SUV',
        seats: 7,
        ac: true,
        fuel: 'Diesel',
        img: '/images/strorme.jpg',
        tag: 'Adventure',
      },
      {
        name: 'Mahindra Thar',
        type: 'Off-Road SUV',
        seats: 4,
        ac: true,
        fuel: 'Petrol/Diesel',
        img: '/images/image.png',
        tag: '🔥 Legend',
      },
      {
        name: 'Toyota Fortuner',
        type: 'Luxury SUV',
        seats: 7,
        ac: true,
        fuel: 'Diesel',
        img: '/images/fortuner.jpg',
        tag: '⭐ King',
      },
      {
        name: 'Mahindra XUV700',
        type: 'Tech-Loaded SUV',
        seats: 7,
        ac: true,
        fuel: 'Petrol/Diesel',
        img: '/images/mahindra.jpg',
        tag: 'Luxury',
      },
    ],
  },
];

export default function Fleet() {
  const [active, setActive] = useState('5-seater');
  const currentCat = CATEGORIES.find(c => c.id === active);

  return (
    <section className="fleet section-pad" id="fleet">
      <div className="container">
        {/* Header */}
        <div className="fleet__header">
          <span className="section-tag">🚘 Our Fleet</span>
          <h2 className="section-title">
            Choose Your <span>Perfect Ride</span>
          </h2>
          <div className="gradient-div" />
          <p className="section-sub">
            From your daily commute to your bucket-list road trips — we have the right manufacturer and model for every journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="fleet__tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`fleet__tab${active === cat.id ? ' fleet__tab--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span className="fleet__tab-icon">{cat.icon}</span>
              {cat.label}
              {cat.id === 'premium' && <span className="fleet__tab-crown">PREMIUM</span>}
            </button>
          ))}
        </div>

        {/* Premium Banner */}
        {active === 'premium' && (
          <div className="fleet__premium-banner">
            <div className="fleet__premium-banner-glow" />
            <span className="fleet__premium-icon">👑</span>
            <div>
              <strong>Premium Excellence</strong>
              <span>Experience unparalleled comfort and authority with our flagship SUV lineup.</span>
            </div>
          </div>
        )}

        {/* Car Grid */}
        <div className={`fleet__grid${active === 'premium' ? ' fleet__grid--premium' : ''}`}>
          {currentCat.cars.map((car) => (
            <div
              key={car.name}
              className={`car-card${active === 'premium' ? ' car-card--premium' : ''}`}
            >
              {car.tag && (
                <div className={`car-card__tag${active === 'premium' ? ' car-card__tag--premium' : ''}`}>
                  {car.tag}
                </div>
              )}
              <div className="car-card__img-wrap">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="car-card__img" 
                  loading="lazy" 
                  style={{ objectPosition: car.imgPosition || 'center' }}
                />
                <div className="car-card__img-overlay" />
              </div>
              <div className="car-card__body">
                <div className="car-card__meta">
                  <span className="car-card__type">{car.type}</span>
                  <div className="car-card__badges">
                    <span>👤 {car.seats}</span>
                    <span>❄️ AC</span>
                    <span>⛽ {car.fuel}</span>
                  </div>
                </div>
                <h3 className="car-card__name">{car.name}</h3>
                <a
                  href={`https://wa.me/918977934454?text=Hi%20SIRI%20CAR%20RENTALS%2C%20I%20want%20to%20book%20${encodeURIComponent(car.name)}`}
                  className={`car-card__btn${active === 'premium' ? ' car-card__btn--premium' : ''}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fleet__bottom-cta">
          <p>Prefer another manufacturer? <strong>Contact us today!</strong></p>
          <a href="tel:+918977934454" className="btn-primary">
            📞 Call For Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

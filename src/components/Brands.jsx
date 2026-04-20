import './Brands.css';

const BRANDS = [
  { 
    name: 'Maruti Suzuki', 
    logo: '/images/logos/suzuki.svg' 
  },
  { 
    name: 'Hyundai', 
    logo: '/images/logos/hyundai.svg' 
  },
  { 
    name: 'Kia', 
    logo: '/images/logos/kia.svg' 
  },
  { 
    name: 'Toyota', 
    logo: '/images/logos/toyota.svg' 
  },
  { 
    name: 'Mahindra', 
    logo: '/images/logos/mahindra.svg' 
  },
  { 
    name: 'Tata Motors', 
    logo: '/images/logos/tata.svg' 
  },
];

export default function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands__header">
          <div className="brands__title-group">
            <h2 className="brands__title">Explore Our Fleet Brands</h2>
          </div>
          <a href="#fleet" className="brands__link">View Full Fleet ↗</a>
        </div>
        <div className="brands__grid">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="brand-card">
              <div className="brand-card__logo-wrap">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="brand-card__logo" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<span class="brand-card__fallback">${brand.name}</span>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

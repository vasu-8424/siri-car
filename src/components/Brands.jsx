import './Brands.css';

const BRANDS = [
  { 
    name: 'Maruti Suzuki', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/200px-Suzuki_logo_2.svg.png' 
  },
  { 
    name: 'Hyundai', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png' 
  },
  { 
    name: 'Kia', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kia_logo_2021.svg/200px-Kia_logo_2021.svg.png' 
  },
  { 
    name: 'Toyota', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/200px-Toyota_carlogo.svg.png' 
  },
  { 
    name: 'Mahindra', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mahindra_Rise_logo.svg/200px-Mahindra_Rise_logo.svg.png' 
  },
  { 
    name: 'Tata Motors', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png' 
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

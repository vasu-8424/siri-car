import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const VIDEOS = [
  'https://res.cloudinary.com/dhdocj29v/video/upload/v1776162767/bg1_setfsr.mp4',
  'https://res.cloudinary.com/dhdocj29v/video/upload/v1776162756/bg2_oyxyig.mp4',
  'https://res.cloudinary.com/dhdocj29v/video/upload/v1776162766/bg3_peu80k.mp4'
];

const VEHICLE_TYPES = [
  { icon: '🚘', label: 'SUV' },
  { icon: '🚗', label: 'Sedan' },
  { icon: '🚙', label: 'Hatchback' },
  { icon: '👑', label: 'Premium' },
  { icon: '🛻', label: 'Off-Road' },
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);

  // Setup video playback speed and rotation
  useEffect(() => {
    // Set slow motion for all videos
    videoRefs.current.forEach(video => {
      if (video) video.playbackRate = 0.6;
    });

    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* ── CINEMATIC VIDEO BACKGROUND ── */}
      <div className="hero__bg">
        {VIDEOS.map((src, index) => (
          <video
            key={src}
            ref={el => videoRefs.current[index] = el}
            src={src}
            className={`hero__video ${index === currentVideo ? 'hero__video--active' : ''}`}
            muted
            autoPlay
            loop
            playsInline
          />
        ))}
        <div className="hero__overlay" />
        <div className="hero__gradient-bottom" />
      </div>

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => <span key={i} className="particle" />)}
      </div>

      {/* ── CENTERED CONTENT ── */}
      <div className="hero__center">
        {/* Live badge */}
        <div className="hero__badge animate-fade-up">
          <span className="hero__badge-dot" />
          24/7 Car Rentals in Visakhapatnam
        </div>

        {/* Main Heading */}
        <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Find Your Perfect Ride<br />
          <span className="hero__title-gold">Anytime, Anywhere in Vizag</span>
        </h1>

        {/* Sub */}
        <p className="hero__sub animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Self-drive or chauffeur-driven · Airport transfers · Long-distance trips
        </p>

        {/* ── Removed Booking Form Card per request ── */}

        {/* Browse by vehicle type */}
        <div className="hero__browse animate-fade-up" style={{ animationDelay: '0.35s' }}>
          <span className="hero__browse-label">Or browse by vehicle type</span>
          <div className="hero__vehicle-pills">
            {VEHICLE_TYPES.map(v => (
              <a key={v.label} href="#fleet" className="hero__vehicle-pill">
                <span>{v.icon}</span>
                {v.label}
              </a>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.45s' }}>
          {[
            { num: '24/7', label: 'Available' },
            { num: '15+', label: 'Vehicles' },
            { num: '4.9★', label: 'Rating' },
            { num: '100%', label: 'Local' },
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

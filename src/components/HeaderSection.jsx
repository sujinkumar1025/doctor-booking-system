import './HeaderSection.css';
import doctorBanner from '../assets/doctor-banner.jpg';

export default function HeaderSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="glass-text-box">
          <h1>Your Health, Our Priority</h1>
          <p>
            Book appointments with top doctors in your area. Safe, reliable, and quick health consultations.
          </p>
          <a href="book" className="hero-button">Book Now</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={doctorBanner} alt="Healthcare professionals" />
      </div>
    </section>
  );
}

import './AboutPage.css';
import aboutImage from '../assets/doctor2.jpg'; // Add a relevant image

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-left">
          <h2>About MediLink</h2>
          <p>
            MediLink is committed to delivering top-tier healthcare services with compassion,
            innovation, and professionalism. Our platform bridges the gap between patients and
            healthcare providers, offering accessible, reliable, and efficient medical services.
          </p>
          <p>
            With a wide network of specialized doctors and modern health technology, we ensure
            that you receive care tailored to your needs. Our mission is to simplify your health
            journey, so you can focus on what matters most — your well-being.
          </p>
          <p>
            Whether you're looking for regular checkups, specialist consultations, or health advice,
            MediLink is your trusted partner in achieving a healthier life.
          </p>
        </div>
        <div className="about-right">
          <img src={aboutImage} alt="Our team" className="about-img" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

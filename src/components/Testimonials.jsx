import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const testimonialData = [
  {
    name: "Sarah M.",
    feedback: "The doctors were so caring and professional. Highly recommended!",
    rating: 5,
  },
  {
    name: "James L.",
    feedback: "Quick diagnosis and clear guidance. I felt truly cared for.",
    rating: 4,
  },
  {
    name: "Priya R.",
    feedback: "Excellent service and very friendly staff.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Patients Say</h2>
      <div className="testimonial-cards">
        {testimonialData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="feedback">"{item.feedback}"</p>
            <div className="stars">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
            <h4 className="name">— {item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

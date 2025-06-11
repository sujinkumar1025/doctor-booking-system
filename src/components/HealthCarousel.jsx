import { useState, useEffect } from 'react';
import './HealthCarousel.css';
import { FaHeartbeat, FaLeaf, FaSmile, FaStethoscope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const tips = [
  {
    icon: <FaHeartbeat size={40} color="#e91e63" />,
    title: 'Heart Health',
    text: '30 minutes of walking daily improves cardiovascular health.',
    cta: 'Book a Heart Checkup',
    link: '/doctors?department=cardiology'
  },
  {
    icon: <FaLeaf size={40} color="#4caf50" />,
    title: 'Eat Green',
    text: 'Leafy greens help your immune system stay strong.',
    cta: 'See Nutrition Tips',
    link: '/blog/nutrition'
  },
  {
    icon: <FaSmile size={40} color="#ff9800" />,
    title: 'Mental Wellness',
    text: 'Take 10 minutes daily to unplug and breathe deeply.',
    cta: 'Talk to a Specialist',
    link: '/doctors?department=mental-health'
  },
  {
    icon: <FaStethoscope size={40} color="#3f51b5" />,
    title: 'Routine Checkup',
    text: 'Annual physical exams help catch problems early.',
    cta: 'Book a Checkup',
    link: '/appointments'
  }
];

export default function HealthCarousel() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    navigate(tips[current].link);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        {tips[current].icon}
        <h3>{tips[current].title}</h3>
        <p>{tips[current].text}</p>
        <button className="cta-button" onClick={handleClick}>
          {tips[current].cta}
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import './DoctorCardsFlip.css';
import doctor4 from '../assets/doctor4.jpg';
import doctor5 from '../assets/doctor5.jpg';
import doctor6 from '../assets/doctor6.jpg';
import doctor7 from '../assets/doctor7.jpg';

const doctors = [
  {
    id: 1,
    name: 'Dr. Alice Smith',
    department: 'Cardiology',
    imagePath: doctor4,
    tips: 'Maintain a heart-healthy diet and exercise regularly.',
  },
  {
    id: 2,
    name: 'Dr. Bob Johnson',
    department: 'Neurology',
    imagePath: doctor5,
    tips: 'Get enough sleep and manage stress to support brain health.',
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    department: 'Pediatrics',
    imagePath: doctor6,
    tips: 'Ensure your child gets regular vaccinations and balanced nutrition.',
  },
  {
    id: 4,
    name: 'Dr. Ryan Lee',
    department: 'Dermatology',
    imagePath: doctor7,
    tips: 'Protect your skin from UV exposure and hydrate regularly.',
  },
];

export default function DoctorCardsFlip() {
  const [flippedIds, setFlippedIds] = useState([]);

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="doctor-cards-container">
      {doctors.map((doc) => {
        const isFlipped = flippedIds.includes(doc.id);

        return (
          <div
            key={doc.id}
            className={`doctor-card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => toggleFlip(doc.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={doc.imagePath}
                  alt={doc.name}
                  className="doctor-image"
                  loading="lazy"
                />
                <div className="doctor-info">
                  <h3>{doc.name}</h3>
                  <p>{doc.department}</p>
                </div>
              </div>
              <div className="card-back">
                <h4>Health Tips</h4>
                <p>{doc.tips}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

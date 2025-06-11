import { useState, useEffect } from 'react';
import './DoctorCardsFlip.css';

// Doctors data with image file names only
const doctors = [
  {
    id: 1,
    name: 'Dr. Alice Smith',
    department: 'Cardiology',
    imagePath: 'doctor4.jpg',
    tips: 'Maintain a heart-healthy diet and exercise regularly.',
  },
  {
    id: 2,
    name: 'Dr. Bob Johnson',
    department: 'Neurology',
    imagePath: 'doctor5.jpg',
    tips: 'Get enough sleep and manage stress to support brain health.',
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    department: 'Pediatrics',
    imagePath: 'doctor6.jpg',
    tips: 'Ensure your child gets regular vaccinations and balanced nutrition.',
  },
  {
    id: 4,
    name: 'Dr. Ryan Lee',
    department: 'Dermatology',
    imagePath: 'doctor7.jpg',
    tips: 'Protect your skin from UV exposure and hydrate regularly.',
  },
];

export default function DoctorCardsFlip() {
  const [flippedIds, setFlippedIds] = useState([]);
  const [images, setImages] = useState({});

  // Dynamically import images when component mounts
  useEffect(() => {
    doctors.forEach(async (doc) => {
      if (!images[doc.id]) {
        try {
const imgModule = await import(/* @vite-ignore */ `../assets/${doc.imagePath}`);
          setImages((prev) => ({ ...prev, [doc.id]: imgModule.default }));
        } catch (error) {
          console.error(`Failed to load image for doctor id ${doc.id}:`, error);
        }
      }
    });
  }, []); // Run only once on mount

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="doctor-cards-container">
      {doctors.map((doc) => {
        const isFlipped = flippedIds.includes(doc.id);
        const imageSrc = images[doc.id];

        return (
          <div
            key={doc.id}
            className={`doctor-card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => toggleFlip(doc.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={doc.name}
                    className="doctor-image"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="image-placeholder"
                    style={{
                      height: '200px',
                      backgroundColor: '#ccc',
                      borderRadius: '8px',
                    }}
                  />
                )}
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

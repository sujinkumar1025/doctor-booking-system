// HealthSearchSection.jsx
import { useState } from 'react';
import './HealthSearchSection.css';
import doctor1 from '../assets/successful-medical-team.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';

const departments = [
  { id: 'cardiology', name: 'Cardiology' },
  { id: 'neurology', name: 'Neurology' },
  { id: 'pediatrics', name: 'Pediatrics' },
];

const doctorsByDepartment = {
  cardiology: [
    { id: 1, name: 'Dr. Alice Smith' },
    { id: 2, name: 'Dr. Bob Johnson' },
  ],
  neurology: [{ id: 3, name: 'Dr. Carol Williams' }],
  pediatrics: [
    { id: 4, name: 'Dr. David Brown' },
    { id: 5, name: 'Dr. Emily Davis' },
  ],
};

export default function HealthSearchSection() {
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const doctorsList = selectedDept ? doctorsByDepartment[selectedDept] || [] : [];

  const handleDeptChange = (e) => {
    setSelectedDept(e.target.value);
    setSelectedDoctor('');
  };

  return (
    <div className="health-search-wrapper">
      <div className="health-search-container">

        <div className="left-column">
          <h2>Health & Wellness</h2>
          <p>
            Maintaining good health is essential for living a happy and fulfilling life. It involves not just the absence of illness but also the proactive management of physical, mental, and emotional well-being. Our platform connects you with trusted doctors across various specialties to help you stay in control of your well-being. Whether you need routine check-ups, specialized care, or health advice, we make it easy to find and book appointments with qualified professionals. Take charge of your health today and enjoy a better tomorrow.
          </p>
        </div>

        <div className="right-column">
          <div className="search-controls">
            <select
              value={selectedDept}
              onChange={handleDeptChange}
              className="search-input"
            >
              <option value="">Select a department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>

            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              disabled={!selectedDept}
              className="doctor-dropdown"
            >
              <option value="">
                {selectedDept ? 'Select a doctor' : 'Select department first'}
              </option>
              {doctorsList.map((doc) => (
                <option key={doc.id} value={doc.name}>{doc.name}</option>
              ))}
            </select>
          </div>

          <div className="hexagon-layout">
            <div className="hex-row top">
              <div className="hexagon-container">
                <img src={doctor1} alt="Doctor 1" className="hexagon-image" loading="lazy" />
              </div>
            </div>
            <div className="hex-row bottom">
              <div className="hexagon-container">
                <img src={doctor2} alt="Doctor 2" className="hexagon-image" loading="lazy" />
              </div>
              <div className="hexagon-container">
                <img src={doctor3} alt="Doctor 3" className="hexagon-image" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

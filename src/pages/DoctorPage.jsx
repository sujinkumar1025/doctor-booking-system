import { useNavigate } from 'react-router-dom';
import './DoctorPage.css';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Alice Smith',
    department: 'Cardiology',
    date: '2025-06-15',
    time: '10:00 AM - 1:00 PM',
    cabin: 'Cabin 101',
    qualifications: 'MD, Cardiology Specialist',
  },
  {
    id: 2,
    name: 'Dr. Bob Johnson',
    department: 'Cardiology',
    date: '2025-06-16',
    time: '2:00 PM - 5:00 PM',
    cabin: 'Cabin 102',
    qualifications: 'MD, Cardiology Consultant',
  },
  {
    id: 3,
    name: 'Dr. Carol Williams',
    department: 'Neurology',
    date: '2025-06-15',
    time: '9:00 AM - 12:00 PM',
    cabin: 'Cabin 201',
    qualifications: 'MD, Neurology Specialist',
  },
  {
    id: 4,
    name: 'Dr. David Brown',
    department: 'Pediatrics',
    date: '2025-06-17',
    time: '11:00 AM - 3:00 PM',
    cabin: 'Cabin 301',
    qualifications: 'MD, Pediatrician',
  },
];

export default function DoctorPage() {
  const navigate = useNavigate();

  const handleBook = (department, doctor) => {
  const dep = department.toLowerCase(); // match department IDs
  const doc = encodeURIComponent(doctor);
  navigate(`/book?department=${dep}&doctor=${doc}`);
};

  return (
    <div className="doctors-page-container">
      <h2>Our Doctors</h2>
      <div className="doctors-cards-column">
        {doctorsData.map(doc => (
          <div key={doc.id} className="doctors-card">
            <div className="doctors-info">
              <h3>{doc.name}</h3>
              <p><strong>Department:</strong> {doc.department}</p>
              <p><strong>Date:</strong> {doc.date}</p>
              <p><strong>Time:</strong> {doc.time}</p>
              <p><strong>Cabin:</strong> {doc.cabin}</p>
              <p><strong>Qualifications:</strong> {doc.qualifications}</p>
            </div>
            <button
              className="book-button"
              onClick={() => handleBook(doc.department, doc.name)}
              aria-label={`Book appointment with ${doc.name}`}
            >
              📅 Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

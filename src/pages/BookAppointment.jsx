import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './BookAppointment.css';

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
  neurology: [
    { id: 3, name: 'Dr. Carol Williams' },
  ],
  pediatrics: [
    { id: 4, name: 'Dr. David Brown' },
    { id: 5, name: 'Dr. Emily Davis' },
  ],
};

export default function BookAppointment() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    doctor: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Load department and doctor from query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dep = params.get('department') || '';
    const doc = params.get('doctor') || '';

    if (dep) {
      setFormData(prev => ({
        ...prev,
        department: dep,
        doctor: '', // Clear doctor first
      }));

      // Set doctor after department is set to ensure dropdown updates
      if (doc) {
        setTimeout(() => {
          setFormData(prev => ({
            ...prev,
            doctor: doc,
          }));
        }, 0);
      }
    }
  }, [location.search]);

  const doctorsList = formData.department ? doctorsByDepartment[formData.department] || [] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'department' ? { doctor: '' } : {}), // Reset doctor on department change
    }));
  };

  const sendEmail = (data) => {
    console.log('Sending email with data:', data);
    // Simulate email sending
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('appointmentData', JSON.stringify(formData));
    sendEmail(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 50, height: 50, color: 'green', marginBottom: 10 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h2>Appointment Booked Successfully!</h2>
        <p>Thank you for booking your appointment. We will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="book-appointment-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="book-appointment-form">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="book-appointment-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="book-appointment-input"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="book-appointment-input"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="book-appointment-input"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="book-appointment-input"
        />
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          className="book-appointment-select"
        >
          <option value="">Select Department</option>
          {departments.map(d => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
          disabled={!formData.department || doctorsList.length === 0}
          className="book-appointment-select"
        >
          <option value="">
            {!formData.department
              ? 'Select Department First'
              : doctorsList.length === 0
              ? 'No Doctors Available'
              : 'Select Doctor'}
          </option>
          {doctorsList.map(doc => (
            <option key={doc.id} value={doc.name}>{doc.name}</option>
          ))}
        </select>

        <button type="submit" className="book-appointment-button">Book Appointment</button>
      </form>
    </div>
  );
}

import { Routes, Route } from 'react-router-dom'; // no Router here
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookAppointment from './pages/BookAppointment';
import DoctorPage from './pages/DoctorPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<BookAppointment/>} />
                <Route path="/doctor" element={<DoctorPage/>} />


        {/* other routes */}
      </Routes>
    </>
  );
}

export default App;

import DoctorCardsFlip from '../components/DoctorCardsFlip';
import Footer from '../components/Footer';
import HealthCarousel from '../components/HealthCarousel';
import HealthSearchSection from '../components/HealthSearchSection';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <div>
      <HealthSearchSection />
      <DoctorCardsFlip />
      <HealthCarousel />
      <Testimonials />
      <Footer />
    </div>
  );
}

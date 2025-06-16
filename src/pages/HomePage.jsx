import DoctorCardsFlip from '../components/DoctorCardsFlip';
import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import HealthCarousel from '../components/HealthCarousel';
import HealthSearchSection from '../components/HealthSearchSection';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <div>
      <HeaderSection/>
      <HealthSearchSection />
      <DoctorCardsFlip />
      <HealthCarousel />
      <Testimonials />
      <Footer />
    </div>
  );
}

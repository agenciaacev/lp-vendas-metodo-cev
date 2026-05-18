import AnnouncementBar from './components/AnnouncementBar';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import ExpertSection from './components/ExpertSection';
import FrameworkSection from './components/FrameworkSection';
import TransformationsSection from './components/TransformationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import BonusSection from './components/BonusSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import AosInit from './components/AosInit';

export default function Home() {
  return (
    <main>
      <AosInit />
      <AnnouncementBar />
      <HeroSection />
      <PainSection />
      <ExpertSection />
      <FrameworkSection />
      <TransformationsSection />
      <TestimonialsSection />
      <PricingSection />
      <BonusSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
    </main>
  );
}

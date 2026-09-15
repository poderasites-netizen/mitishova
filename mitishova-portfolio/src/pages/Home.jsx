import Navbar from "@/components/navigation/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import ServicesSection from "@/components/section/ServicesSection";
import EthosSection from "@/components/section/EthosSection";
import PricesSection from "@/components/section/PricesSection";
import AcademySection from "@/components/section/AcademySection";
import GallerySection from "@/components/section/GallerySection";
import ReviewsSection from "@/components/section/ReviewsSection";
import FAQSection from "@/components/section/FAQSections";
import ContactSection from "@/components/section/ContactSection";
import FooterSection from "@/components/section/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EthosSection />
      <PricesSection />
      <AcademySection />
      <GallerySection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
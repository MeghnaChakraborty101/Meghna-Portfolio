import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import PhilosophySection from '../components/PhilosophySection';
import SkillsSection from '../components/SkillsSection';
import ClosingSection from '../components/ClosingSection';
import Footer from '../components/Footer';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="portfolio-container">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PhilosophySection />
      <SkillsSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Home;
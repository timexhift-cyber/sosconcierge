import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WellnessSection } from '../components/sections/WellnessSection';
import { CTASection } from '../components/sections/CTASection';
import { SpecialtiesSection } from '../components/sections/SpecialtiesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { FooterSection } from '../components/sections/FooterSection';

const Index = () => {
  return (
    <main className="w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WellnessSection />
      <CTASection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
};

export default Index;

import React from 'react';
import { StarRating } from '../ui/StarRating';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-black py-20 px-6 lg:px-20">
      <div className="w-full max-w-7xl mx-auto relative">
        <nav className="absolute -top-16 right-0 flex items-center gap-4 lg:gap-6 max-md:static max-md:justify-center max-md:flex-wrap max-md:mb-8 max-sm:hidden animate-fade-in">
          <a href="#home" className="text-white text-center text-base lg:text-lg font-light cursor-pointer hover:text-[#E0AE2E] transition-colors">
            Home
          </a>
          <a href="#about" className="text-white text-center text-base lg:text-lg font-light cursor-pointer hover:text-[#E0AE2E] transition-colors">
            Lorem
          </a>
          <a href="#services" className="text-white text-center text-base lg:text-lg font-light cursor-pointer hover:text-[#E0AE2E] transition-colors">
            Ipsum
          </a>
          <a href="#contact" className="text-white text-center text-base lg:text-lg font-light cursor-pointer hover:text-[#E0AE2E] transition-colors">
            Lorem ipsum
          </a>
        </nav>

        <div className="flex flex-col items-center gap-6 lg:gap-8 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex flex-col items-center gap-4 lg:gap-6">
            <StarRating />
            <p className="text-white text-center text-sm lg:text-lg font-light tracking-wider">
              Menos tarefas. Mais vida.
            </p>
            <h1 className="font-aboreto text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight leading-tight">
              Concierge premium, cuidamos de tudo para você focar no essencial.
            </h1>
          </div>

          <div className="flex items-center gap-2 mt-8">
            <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-32 flex flex-col items-center max-lg:hidden">
          <div className="relative -rotate-90 w-64">
            <p className="text-white text-center text-base font-normal absolute left-0 top-20">
              Ligue agora
            </p>
            <a href="tel:+5511969752460" className="text-[#E0AE2E] text-center text-xl font-normal absolute left-8 top-0 hover:underline whitespace-nowrap">
              +55 11 96975-2460
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

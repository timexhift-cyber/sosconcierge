import React from 'react';
import { StarRating } from '../ui/StarRating';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-[1053px] relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-black max-md:h-auto max-md:px-10 max-md:py-[100px] max-sm:px-5 max-sm:py-[60px]">
      <div className="w-[1632px] h-[730px] relative max-w-[calc(100%_-_288px)] max-md:w-full max-md:h-auto max-md:max-w-none">
        <nav className="absolute top-[-140px] flex items-center gap-6 right-0 max-md:static max-md:justify-center max-md:flex-wrap max-md:gap-4 max-md:mb-10 max-sm:hidden">
          <a href="#home" className="text-white text-center text-2xl font-light leading-4 tracking-[0.24px] cursor-pointer max-md:text-xl hover:text-[#E0AE2E] transition-colors">
            Home
          </a>
          <a href="#about" className="text-white text-center text-2xl font-light leading-4 tracking-[0.24px] cursor-pointer max-md:text-xl hover:text-[#E0AE2E] transition-colors">
            Lorem
          </a>
          <a href="#services" className="text-white text-center text-2xl font-light leading-4 tracking-[0.24px] cursor-pointer max-md:text-xl hover:text-[#E0AE2E] transition-colors">
            Ipsum
          </a>
          <a href="#contact" className="text-white text-center text-2xl font-light leading-4 tracking-[0.24px] cursor-pointer max-md:text-xl hover:text-[#E0AE2E] transition-colors">
            Lorem ipsum
          </a>
        </nav>

        <div className="absolute w-[1022px] h-[312px] flex flex-col items-center gap-[34px] left-[305px] top-[175px] max-md:static max-md:w-full max-md:h-auto max-md:gap-6">
          <div className="flex flex-col items-center gap-6">
            <StarRating />
            <p className="text-white text-center text-2xl font-light leading-8 tracking-[2.4px] self-stretch max-sm:text-lg max-sm:leading-6">
              Menos tarefas. Mais vida.
            </p>
            <h1 className="text-white text-center text-[70px] font-normal leading-[76px] tracking-[-1.2px] self-stretch max-md:text-5xl max-md:leading-[52px] max-sm:text-[32px] max-sm:leading-9">
              Concierge premium, cuidamos de tudo para você focar no essencial.
            </h1>
          </div>

          <div className="absolute bottom-[-138px] flex items-center gap-[7px] w-[119px] h-14 -right-52 max-md:static max-md:justify-center max-md:mt-10">
            <button className="w-[58px] h-[58px] rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-[58px] h-[58px] rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute left-[-305px] w-16 h-[385px] flex flex-col items-center top-0 max-md:hidden">
          <div className="w-14 h-[302px] relative -rotate-90">
            <p className="text-white text-center text-2xl font-normal leading-4 tracking-[0.24px] absolute w-[136px] h-[17px] left-0 top-[166px]">
              Ligue agora
            </p>
            <a href="tel:+5511969752460" className="text-[#E0AE2E] text-center text-[32px] font-normal leading-4 tracking-[0.24px] absolute w-[302px] h-[23px] left-[33px] top-0 hover:underline">
              +55 11 96975-2460
            </a>
          </div>
          <button className="w-[66px] h-[66px] rounded-full border-2 border-white flex items-center justify-center mt-[19px] cursor-pointer hover:bg-white hover:text-black transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

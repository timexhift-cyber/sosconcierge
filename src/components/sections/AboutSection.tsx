import React from 'react';
import { StarRating } from '../ui/StarRating';

export const AboutSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex-1 flex flex-col items-start gap-6 lg:gap-8">
          <StarRating size="small" />
          
          <p className="text-black text-lg lg:text-xl font-light">
            Foco no que realmente importa!
          </p>
          
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            Garanta uma Experiência Concierge Incomparável
          </h2>
          
          <div className="flex flex-col gap-6">
            <p className="text-[#4C4C4C] text-base lg:text-lg font-light leading-relaxed">
              Bem-vindo à Sunny Organization Solutions. Cuidamos do que consome seu tempo, agenda, burocracias, viagens, casa, família e experiências, para que você viva o essencial.
            </p>
            <p className="text-[#4C4C4C] text-base lg:text-lg font-light leading-relaxed">
              Na S.O.S, cada detalhe é planejado e executado com excelência, confidencialidade e acompanhamento dedicado.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="flex flex-col">
              <p className="text-black text-sm lg:text-base font-normal">
                Ligue agora
              </p>
              <a href="tel:+5511969752460" className="text-[#E0AE2E] text-lg lg:text-xl font-normal hover:underline">
                +55 11 96975-2460
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-4 lg:gap-6 max-sm:grid-cols-1">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2e2257d678c611c41fd31a244d0d8fb8e01bba46?width=692"
            alt="Concierge service professional"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/048a58ce12021aab60f556ca78e6d4c3c8580763?width=692"
            alt="Premium lifestyle services"
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

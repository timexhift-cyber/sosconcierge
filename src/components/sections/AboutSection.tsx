import React from 'react';
import { StarRating } from '../ui/StarRating';

export const AboutSection: React.FC = () => {
  return (
    <section className="flex h-[951px] justify-center items-center bg-white pl-[222px] pr-[223px] py-[203px] max-md:h-auto max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="w-[1475px] h-[545px] flex gap-9 max-md:flex-col max-md:w-full max-md:gap-[60px]">
        <div className="w-[720px] flex flex-col items-start gap-10 max-md:w-full">
          <StarRating size="small" />
          
          <p className="text-black text-2xl font-light leading-[35px] self-stretch">
            Foco no que realmente importa!
          </p>
          
          <h2 className="text-black text-5xl font-normal leading-[51px] tracking-[-1.2px] self-stretch max-md:text-4xl max-md:leading-10 max-sm:text-[28px] max-sm:leading-8">
            Garanta uma Experiência Concierge Incomparável
          </h2>
          
          <div className="w-[714px] h-[188px] flex flex-col gap-[49px]">
            <p className="text-[#4C4C4C] text-2xl font-light leading-[35px]">
              Bem-vindo à Sunny Organization Solutions. Cuidamos do que consome seu tempo, agenda, burocracias, viagens, casa, família e experiências, para que você viva o essencial.
            </p>
            <p className="text-[#4C4C4C] text-2xl font-light leading-[35px]">
              Na S.O.S, cada detalhe é planejado e executado com excelência, confidencialidade e acompanhamento dedicado.
            </p>
          </div>
          
          <div className="w-14 h-[302px] rotate-90 relative">
            <p className="text-black text-center text-2xl font-normal leading-4 tracking-[0.24px] absolute w-[136px] h-[17px] left-0 top-0">
              Ligue agora
            </p>
            <a href="tel:+5511969752460" className="text-[#E0AE2E] text-center text-[32px] font-normal leading-4 tracking-[0.24px] absolute w-[302px] h-[23px] left-0 top-[33px] hover:underline">
              +55 11 96975-2460
            </a>
          </div>
        </div>
        
        <div className="w-[719px] h-[545px] relative max-md:w-full max-md:h-[400px] max-sm:h-[300px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2e2257d678c611c41fd31a244d0d8fb8e01bba46?width=692"
            alt="Concierge service professional"
            className="w-[346px] h-[428px] absolute left-0 top-[117px] max-md:w-[48%] max-md:h-[300px] max-md:absolute max-md:left-0 max-md:top-[50px] max-sm:w-full max-sm:h-[200px] max-sm:static max-sm:mb-5"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/048a58ce12021aab60f556ca78e6d4c3c8580763?width=692"
            alt="Premium lifestyle services"
            className="w-[346px] h-[343px] absolute right-0 top-0 max-md:w-[48%] max-md:h-[300px] max-md:absolute max-md:right-0 max-md:top-0 max-sm:w-full max-sm:h-[200px] max-sm:static max-sm:mb-5"
          />
        </div>
      </div>
    </section>
  );
};

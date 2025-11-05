import React from 'react';

export const WellnessSection: React.FC = () => {
  return (
    <section className="flex h-[1016px] justify-center items-start gap-[40.5px] bg-[#222] pl-[222px] pr-[223px] pt-[231px] pb-[232px] max-md:h-auto max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="flex w-[1475px] gap-10 items-start max-md:flex-col max-md:w-full max-md:gap-[60px]">
        <div className="flex w-[466px] flex-col items-start gap-10 max-md:w-full">
          <p className="text-[#E0AE2E] text-2xl font-light leading-[35px] tracking-[6.48px] self-stretch">
            UMA INICIATIVA S.O.S
          </p>
          <h2 className="text-white text-5xl font-normal leading-[51px] tracking-[-1.2px] self-stretch max-sm:text-[28px] max-sm:leading-8">
            S.O.S Wellness Club
          </h2>
          <p className="w-[466px] text-[#DFDFDF] text-2xl font-light leading-[35px]">
            Acesso a uma rede selecionada de academias, spas, clínicas e profissionais de saúde e estética. Agendamos, confirmamos, lembramos e acompanhamos cada etapa para você manter o foco no que importa.
          </p>
          
          <div className="w-14 h-[302px] rotate-90 relative">
            <p className="text-white text-center text-2xl font-normal leading-4 tracking-[0.24px] absolute w-[136px] h-[17px] left-0 top-0">
              Ligue agora
            </p>
            <a href="tel:+5511969752460" className="text-[#E0AE2E] text-center text-[32px] font-normal leading-4 tracking-[0.24px] absolute w-[302px] h-[23px] left-0 top-[33px] hover:underline">
              +55 11 96975-2460
            </a>
          </div>
        </div>
        
        <div className="flex gap-10 max-md:flex-col max-md:gap-5">
          <div className="w-[464px] h-[553px] flex flex-col max-md:w-full max-sm:h-auto">
            <div className="w-[464px] h-[266px] bg-[#D9D9D9] max-sm:h-[200px]" />
            <div className="w-[464px] h-[287px] flex flex-col gap-[27px] bg-[#F6F5EE] px-5 py-9">
              <h3 className="text-black text-3xl font-normal leading-[38px] tracking-[-1.2px]">
                Profissionais e espaços criteriosamente selecionados
              </h3>
              <div className="flex flex-col gap-5">
                <p className="text-[#656565] text-2xl font-light leading-[35px]">Lorem Ipsum</p>
                <p className="text-[#656565] text-2xl font-light leading-[35px]">Lorem Ipsum</p>
                <p className="text-[#656565] text-2xl font-light leading-[35px]">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          
          <div className="w-[464px] h-[553px] flex flex-col max-md:w-full max-sm:h-auto">
            <div className="w-[464px] h-[266px] bg-[#D9D9D9] max-sm:h-[200px]" />
            <div className="w-[464px] h-[287px] flex flex-col gap-[27px] bg-[#F6F5EE] px-5 py-9">
              <h3 className="text-black text-3xl font-normal leading-[38px] tracking-[-1.2px]">
                Profissionais e espaços criteriosamente selecionados
              </h3>
              <div className="flex flex-col gap-5">
                <p className="text-[#656565] text-2xl font-light leading-[35px]">Lorem Ipsum</p>
                <p className="text-[#656565] text-2xl font-light leading-[35px]">Lorem Ipsum</p>
                <p className="text-[#656565] text-2xl font-light leading-[35px]">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

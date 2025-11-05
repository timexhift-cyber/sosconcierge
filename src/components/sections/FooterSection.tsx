import React from 'react';

export const FooterSection: React.FC = () => {
  const navigationLinks = ['Home', 'Sobre', 'Serviços', 'Produtos', 'Contato'];

  return (
    <footer className="flex justify-center items-center bg-[#222] pl-[222px] pr-[223px] pt-[114px] pb-[261px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="flex w-[1475px] justify-between items-start max-md:flex-col max-md:w-full max-md:gap-[60px]">
        <div className="flex w-[509px] flex-col items-start gap-10 max-md:w-full">
          <h3 className="text-white text-[40px] font-normal leading-[51px] tracking-[-1.2px] self-stretch max-sm:text-[28px] max-sm:leading-8">
            Sobre a <span className="text-[#E0AE2E]">S.O.S</span>
          </h3>
          <p className="w-[509px] text-white text-2xl font-light leading-[35px]">
            A S.O.S é uma empresa de concierge pessoal que organiza, executa e simplifica a sua rotina com excelência, discrição e cuidado humano. Nosso foco é liberar seu tempo, tornando a vida mais leve, eficiente e sofisticada.
          </p>
        </div>
        
        <div className="flex w-[349px] flex-col items-start gap-10 max-md:w-full">
          <h3 className="text-white text-[40px] font-normal leading-[51px] tracking-[-1.2px] self-stretch max-sm:text-[28px] max-sm:leading-8">
            Explorar
          </h3>
          <nav className="flex flex-col items-start gap-[30px] self-stretch">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-white text-2xl font-light leading-[35px] cursor-pointer hover:text-[#E0AE2E] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="flex w-[349px] flex-col items-start gap-10 max-md:w-full">
          <h3 className="text-white text-[40px] font-normal leading-[51px] tracking-[-1.2px] self-stretch max-sm:text-[28px] max-sm:leading-8">
            Contato
          </h3>
          <div className="flex flex-col gap-5">
            <a
              href="tel:+5511969752460"
              className="text-[#E0AE2E] text-2xl font-light leading-[35px] hover:underline"
            >
              +55 11 96975-2460
            </a>
            <a
              href="mailto:contato@sos.com.br"
              className="text-white text-2xl font-light leading-[35px] hover:text-[#E0AE2E] transition-colors"
            >
              contato@sos.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

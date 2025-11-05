import React from 'react';

export const FooterSection: React.FC = () => {
  const navigationLinks = ['Home', 'Sobre', 'Serviços', 'Produtos', 'Contato'];

  return (
    <footer className="flex justify-center items-center bg-[#222] py-16 lg:py-20 px-6 lg:px-20">
      <div className="flex w-full max-w-7xl justify-between items-start flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex flex-1 flex-col items-start gap-6">
          <h3 className="text-white text-2xl lg:text-3xl font-normal tracking-tight">
            Sobre a <span className="text-[#E0AE2E]">S.O.S</span>
          </h3>
          <p className="text-white text-base lg:text-lg font-light leading-relaxed">
            A S.O.S é uma empresa de concierge pessoal que organiza, executa e simplifica a sua rotina com excelência, discrição e cuidado humano. Nosso foco é liberar seu tempo, tornando a vida mais leve, eficiente e sofisticada.
          </p>
        </div>
        
        <div className="flex flex-1 flex-col items-start gap-6">
          <h3 className="text-white text-2xl lg:text-3xl font-normal tracking-tight">
            Explorar
          </h3>
          <nav className="flex flex-col items-start gap-4">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-white text-base lg:text-lg font-light cursor-pointer hover:text-[#E0AE2E] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 flex-col items-start gap-6">
          <h3 className="text-white text-2xl lg:text-3xl font-normal tracking-tight">
            Contato
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+5511969752460"
              className="text-[#E0AE2E] text-base lg:text-lg font-light hover:underline"
            >
              +55 11 96975-2460
            </a>
            <a
              href="mailto:contato@sos.com.br"
              className="text-white text-base lg:text-lg font-light hover:text-[#E0AE2E] transition-colors"
            >
              contato@sos.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

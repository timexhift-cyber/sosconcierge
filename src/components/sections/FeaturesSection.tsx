import React from 'react';
import featurePlanning from '@/assets/feature-planning.jpg';
import featureDiscretion from '@/assets/feature-discretion.jpg';
import featureExcellence from '@/assets/feature-excellence.jpg';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'PLANEJAMENTO IMPECÁVEL',
      heading: 'Cada detalhe pensado para você',
      description: 'Nossa equipe cuida de todo o planejamento e execução das suas demandas. Desde viagens internacionais até eventos pessoais, garantimos que tudo seja executado com precisão absoluta e atenção aos mínimos detalhes.',
      image: featurePlanning,
      imagePosition: 'left'
    },
    {
      title: 'DISCRIÇÃO GARANTIDA',
      heading: 'Confidencialidade em primeiro lugar',
      description: 'Trabalhamos com total sigilo e profissionalismo. Todas as informações e solicitações são tratadas com máxima confidencialidade, garantindo sua privacidade e tranquilidade em todos os momentos.',
      image: featureDiscretion,
      imagePosition: 'right'
    },
    {
      title: 'EXCELÊNCIA NO ATENDIMENTO',
      heading: 'Superando suas expectativas',
      description: 'Nossa equipe dedicada está disponível para atender suas necessidades com o mais alto padrão de qualidade. Acompanhamento personalizado, respostas rápidas e soluções eficientes para tornar seu dia a dia mais leve.',
      image: featureExcellence,
      imagePosition: 'left'
    }
  ];

  return (
    <section className="flex justify-center items-center bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex w-full max-w-7xl flex-col items-start gap-0">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex items-center self-stretch animate-fade-in-up ${
              feature.imagePosition === 'right' ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'
            }`}
          >
            <div className="flex-1 h-full">
              <img
                src={feature.image}
                alt={feature.heading}
                className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover"
              />
            </div>
            <div className="flex-1 flex justify-center items-center bg-[#F6F5EE] py-12 lg:py-16 px-6 lg:px-12 min-h-[400px] lg:min-h-[500px]">
              <div className="flex flex-col gap-6 lg:gap-8 max-w-lg">
                <p className="text-black text-sm lg:text-base font-light tracking-widest">
                  {feature.title}
                </p>
                <h3 className="font-aboreto text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
                  {feature.heading}
                </h3>
                <p className="text-black text-base lg:text-lg font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

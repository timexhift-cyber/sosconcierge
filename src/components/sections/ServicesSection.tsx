import React from 'react';
import { ServiceCard } from '../ui/ServiceCard';

export const ServicesSection: React.FC = () => {
  const services = [
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum'
  ];

  return (
    <section className="flex h-[1618px] flex-col justify-center items-center bg-[#F6F5EE] px-[222px] py-[173px] max-md:h-auto max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="flex w-[1476px] flex-col items-start gap-10 max-md:w-full">
        <div className="flex w-[720px] flex-col items-start gap-10">
          <p className="text-black text-2xl font-light leading-[35px] self-stretch">
            O que resolvemos por você
          </p>
          <h2 className="text-black text-5xl font-normal leading-[51px] tracking-[-1.2px] self-stretch max-sm:text-[28px] max-sm:leading-8">
            Serviços e Soluções
          </h2>
        </div>
        
        <div className="flex items-start content-start gap-10 self-stretch flex-wrap max-md:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

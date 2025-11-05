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
    <section className="flex flex-col justify-center items-center bg-[#F6F5EE] py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex w-full max-w-7xl flex-col items-start gap-8 lg:gap-12">
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          <p className="text-black text-lg lg:text-xl font-light">
            O que resolvemos por você
          </p>
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            Serviços e Soluções
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

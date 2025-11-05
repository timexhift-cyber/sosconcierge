import React from 'react';
import { FeatureCard } from '../ui/FeatureCard';

export const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      title: 'lOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam aliquam volutpat imperdiet vel nibh.'
    },
    {
      title: 'lOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam aliquam volutpat imperdiet vel nibh.'
    },
    {
      title: 'lOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam aliquam volutpat imperdiet vel nibh.'
    },
    {
      title: 'lOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam aliquam volutpat imperdiet vel nibh.'
    },
    {
      title: 'lOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam aliquam volutpat imperdiet vel nibh.'
    },
    {
      title: 'lOREM IPSUM',
      description: 'Lorem ipsum dolor sit amet consectetur. Diam aliquam volutpat imperdiet vel nibh.'
    }
  ];

  return (
    <section className="flex flex-col justify-center items-start bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex flex-col gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          <p className="text-black text-lg lg:text-xl font-light">
            ESPECIALIDADES S.O.S
          </p>
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            Como superamos expectativas
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <FeatureCard
              key={index}
              title={specialty.title}
              description={specialty.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

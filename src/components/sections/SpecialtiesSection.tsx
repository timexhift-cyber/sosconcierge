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
    <section className="flex h-[1130px] flex-col justify-center items-start gap-[69px] bg-white px-[221px] py-[102px] max-md:h-auto max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="flex flex-col gap-[69px] w-full">
        <div className="flex w-[720px] flex-col items-start gap-10">
          <p className="text-black text-2xl font-light leading-[35px] self-stretch">
            ESPECIALIDADES S.O.S
          </p>
          <h2 className="text-black text-5xl font-normal leading-[51px] tracking-[-1.2px] self-stretch max-sm:text-[28px] max-sm:leading-8">
            Como superamos expectativas
          </h2>
        </div>
        
        <div className="flex items-center content-center gap-[45px] flex-wrap max-md:gap-5">
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

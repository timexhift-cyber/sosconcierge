import React from 'react';

interface ServiceCardProps {
  title: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, className = '' }) => {
  return (
    <div className={`flex w-[465px] h-[618px] flex-col justify-end items-start bg-[#452816] px-[42px] py-[65px] max-md:w-full max-md:h-[400px] max-sm:h-[300px] max-sm:px-5 max-sm:py-10 ${className}`}>
      <h3 className="text-white text-4xl font-normal leading-[51px] tracking-[-1.2px]">
        {title}
      </h3>
    </div>
  );
};

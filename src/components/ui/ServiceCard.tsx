import React from 'react';

interface ServiceCardProps {
  title: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, className = '' }) => {
  return (
    <div className={`flex w-full h-64 lg:h-80 flex-col justify-end items-start bg-[#452816] px-6 lg:px-8 py-8 lg:py-10 ${className}`}>
      <h3 className="font-aboreto text-white text-xl lg:text-2xl font-normal tracking-tight">
        {title}
      </h3>
    </div>
  );
};

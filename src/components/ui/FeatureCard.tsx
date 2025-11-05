import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`flex w-full flex-col items-start gap-4 border bg-white px-6 py-6 border-solid border-[#B6B6B6] ${className}`}>
      <div className="w-16 h-16 border border-solid border-[#E0AE2E]" />
      <h3 className="text-black text-xl lg:text-2xl font-normal tracking-tight">
        {title}
      </h3>
      <p className="text-black text-base lg:text-lg font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};

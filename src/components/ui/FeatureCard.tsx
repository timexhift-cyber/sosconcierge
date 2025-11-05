import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`flex w-[462px] flex-col items-start gap-2.5 border bg-white px-[30px] py-7 border-solid border-[#B6B6B6] max-md:w-full max-sm:p-5 ${className}`}>
      <div className="w-[83px] h-[83px] border mb-[30px] border-solid border-[#E0AE2E]" />
      <h3 className="text-black text-[32px] font-normal leading-[51px] tracking-[-1.2px] self-stretch mb-[30px]">
        {title}
      </h3>
      <p className="text-black text-xl font-light leading-[35px] self-stretch">
        {description}
      </p>
    </div>
  );
};

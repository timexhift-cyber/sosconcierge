import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: Icon, className = '' }) => {
  return (
    <div className={`flex w-full h-64 lg:h-80 flex-col justify-between items-start bg-[#452816] px-6 lg:px-8 py-8 lg:py-10 hover:bg-[#563520] transition-colors ${className}`}>
      <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-[#E0AE2E]" />
      <h3 className="font-aboreto text-white text-xl lg:text-2xl font-normal tracking-tight">
        {title}
      </h3>
    </div>
  );
};

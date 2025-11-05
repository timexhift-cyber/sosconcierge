import React from 'react';
import { StarRating } from '../ui/StarRating';

export const CTASection: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-br from-gray-900 to-black pl-[665px] pr-[666px] py-[181px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="flex flex-col justify-center items-center gap-10 w-[589px] h-[309px] max-md:w-full">
        <StarRating size="small" />
        
        <p className="text-white text-center text-2xl font-light leading-[35px] tracking-[6.48px]">
          SUNNY ORGANIZATION SOLUTIONS
        </p>
        
        <h2 className="text-white text-center text-5xl font-normal leading-[51px] tracking-[-1.2px] max-sm:text-[28px] max-sm:leading-8">
          Viva a Experiência S.O.S
        </h2>
        
        <button className="w-[118px] h-[118px] flex justify-center items-center cursor-pointer bg-[rgba(255,255,255,0.10)] px-10 py-[42px] rounded-[59px] hover:bg-[rgba(255,255,255,0.20)] transition-colors">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 14.7634C29.3333 15.5332 29.3333 17.4577 28 18.2275L5.5 31.2179C4.16667 31.9877 2.5 31.0255 2.5 29.4859L2.5 3.50512C2.5 1.96552 4.16667 1.00326 5.5 1.77307L28 14.7634Z" stroke="#E0AE2E" strokeWidth="3"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

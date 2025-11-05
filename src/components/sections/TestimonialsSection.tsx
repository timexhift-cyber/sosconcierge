import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-end items-center gap-[138px] relative bg-gradient-to-br from-gray-900 to-black pt-[212px] pb-[54px] px-[448px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="flex flex-col justify-center items-start gap-10 w-[1024px] h-[356px] max-md:w-full">
        <p className="text-white text-center text-2xl font-light leading-[35px] tracking-[6.48px]">
          DEPOIMENTOS
        </p>
        
        <h2 className="text-white text-center text-5xl font-normal leading-[51px] tracking-[-1.2px] max-sm:text-[28px] max-sm:leading-8">
          Você sente a diferença no primeiro mês
        </h2>
        
        <div className="w-[130px] h-px bg-[#E0AE2E]" />
        
        <blockquote className="text-white text-xl font-light leading-[35px] self-stretch">
          Deleguei o que me tomava energia e ganhei horas por semana. A S.O.S cuida de tudo com uma discrição impressionante e uma execução impecável. É como ter um time de confiança no bolso.
        </blockquote>
        
        <div className="flex items-center gap-[17px] max-sm:flex-col max-sm:items-start max-sm:gap-5">
          <div className="w-[95px] h-[95px] rounded-full border border-white bg-[#D9D9D9]" />
          
          <div className="flex w-52 flex-col items-start gap-[18px]">
            <div className="w-[99px] h-[14px]">
              <svg width="99" height="14" viewBox="0 0 99 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.07817 0L9.28294 4.58347L14.1563 5.34752L10.6456 8.94432L11.4527 14L7.07817 11.6395L2.70362 14L3.51077 8.94432L0 5.34752L4.8734 4.58347L7.07817 0Z" fill="#E0AE2E"/>
                <path d="M28.2891 0L30.4939 4.58347L35.3673 5.34752L31.8565 8.94432L32.6636 14L28.2891 11.6395L23.9145 14L24.7217 8.94432L21.2109 5.34752L26.0843 4.58347L28.2891 0Z" fill="#E0AE2E"/>
                <path d="M49.5 0L51.7048 4.58347L56.5782 5.34752L53.0674 8.94432L53.8746 14L49.5 11.6395L45.1255 14L45.9326 8.94432L42.4218 5.34752L47.2952 4.58347L49.5 0Z" fill="#E0AE2E"/>
                <path d="M70.7109 0L72.9157 4.58347L77.7891 5.34752L74.2783 8.94432L75.0855 14L70.7109 11.6395L66.3364 14L67.1435 8.94432L63.6327 5.34752L68.5061 4.58347L70.7109 0Z" fill="#E0AE2E"/>
                <path d="M91.9218 0L94.1266 4.58347L99 5.34752L95.4892 8.94432L96.2964 14L91.9218 11.6395L87.5473 14L88.3544 8.94432L84.8437 5.34752L89.7171 4.58347L91.9218 0Z" fill="#E0AE2E"/>
              </svg>
            </div>
            
            <h3 className="text-white text-2xl font-normal leading-[51px] tracking-[-1.2px] self-stretch">
              Mariana Campos
            </h3>
            
            <p className="text-white text-base font-normal leading-[51px] tracking-[-1.2px] self-stretch">
              Executiva de Operações
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-[54px] left-1/2 transform -translate-x-1/2">
        <svg width="68" height="20" viewBox="0 0 68 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="#E0AE2E"/>
          <circle cx="34" cy="10" r="9.5" stroke="white"/>
          <circle cx="58" cy="10" r="9.5" stroke="white"/>
        </svg>
      </div>
    </section>
  );
};

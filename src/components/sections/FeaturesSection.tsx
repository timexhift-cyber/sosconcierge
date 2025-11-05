import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'ESPECIALIDADES S.O.S',
      heading: 'Como superamos expectativas',
      description: 'Lorem ipsum dolor sit amet consectetur. Elementum enim pellentesque enim urna orci sed. Duis euismod hac turpis vestibulum pharetra sed. Laoreet diam tempor vivamus felis senectus.',
      imagePosition: 'left'
    },
    {
      title: 'ESPECIALIDADES S.O.S',
      heading: 'Como superamos expectativas',
      description: 'Lorem ipsum dolor sit amet consectetur. Elementum enim pellentesque enim urna orci sed. Duis euismod hac turpis vestibulum pharetra sed. Laoreet diam tempor vivamus felis senectus.',
      imagePosition: 'right'
    },
    {
      title: 'ESPECIALIDADES S.O.S',
      heading: 'Como superamos expectativas',
      description: 'Lorem ipsum dolor sit amet consectetur. Elementum enim pellentesque enim urna orci sed. Duis euismod hac turpis vestibulum pharetra sed. Laoreet diam tempor vivamus felis senectus.',
      imagePosition: 'left'
    }
  ];

  return (
    <section className="flex justify-center items-center bg-white px-[221px] py-[197px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="flex w-[1478px] flex-col items-start max-md:w-full">
        {features.map((feature, index) => (
          <div key={index} className={`flex items-center self-stretch max-md:flex-col ${feature.imagePosition === 'right' ? 'flex-row-reverse' : ''}`}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c17d1b4115aa0f46473efe29ee4cb2aec7b3c2c9?width=1478"
              alt="Feature illustration"
              className="w-[739px] h-[493px] max-md:w-full"
            />
            <div className="flex w-[739px] justify-center items-center bg-[#F6F5EE] pt-[95px] pb-[94px] px-[53px] max-md:w-full max-sm:px-5 max-sm:py-10">
              <div className="flex flex-col gap-10">
                <p className="text-black text-2xl font-light leading-[35px]">
                  {feature.title}
                </p>
                <h3 className="w-[497px] text-black text-5xl font-normal leading-[51px] tracking-[-1.2px]">
                  {feature.heading}
                </h3>
                <p className="text-black text-2xl font-light leading-[35px]">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

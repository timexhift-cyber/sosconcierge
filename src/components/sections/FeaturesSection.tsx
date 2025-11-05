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
    <section className="flex justify-center items-center bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex w-full max-w-7xl flex-col items-start gap-8 lg:gap-0">
        {features.map((feature, index) => (
          <div key={index} className={`flex items-center w-full flex-col lg:flex-row animate-fade-in-up ${feature.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c17d1b4115aa0f46473efe29ee4cb2aec7b3c2c9?width=1478"
              alt="Feature illustration"
              className="w-full lg:w-1/2 h-64 lg:h-80 object-cover"
            />
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-[#F6F5EE] py-12 lg:py-16 px-6 lg:px-10">
              <div className="flex flex-col gap-6">
                <p className="text-black text-base lg:text-lg font-light">
                  {feature.title}
                </p>
                <h3 className="font-aboreto text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
                  {feature.heading}
                </h3>
                <p className="text-black text-base lg:text-lg font-light leading-relaxed">
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

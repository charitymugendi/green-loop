import React from 'react';

const HeaderComponent = () => {
  return (
    // Outer container with a subtle light-blue background, mimicking the KPLC background pattern
    <div className="relative bg-blue-50/70 p-8 md:p-16 lg:p-20 overflow-hidden">
      
      {/* Subtle Pattern (Optional: Replace with actual background image if available) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="grid grid-cols-6 h-full w-full">
          {Array(24).fill(0).map((_, i) => (
            <div 
              key={i} 
              className={`
                bg-white/50 border-white/50 
                ${i % 2 === 0 ? 'border-r border-b' : ''}
              `} 
            />
          ))}
        </div>
      </div>

      {/* Main Content: Uses a flex or grid layout for the left and right sides */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side: Large Heading */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight">
            Apply for Waste Management
          </h1>
        </div>

        {/* Right Side: Descriptive Text */}
        <div className="lg:w-1/2 lg:pl-16">
          <p className="text-base md:text-lg text-gray-700 max-w-xl">
            Green Loop offers flexible waste solutions for its customers: **Scheduled** and **On-Demand**. Each type has unique features and benefits that cater to different preferences and needs.
          </p>
          <p className="text-base md:text-lg text-gray-700 max-w-xl mt-4">
            **Scheduled Service** provides predictable cost control and reliable routine collection, while **On-Demand Service** offers the convenience of calling for a pickup only when you need it, ideal for bulk or occasional waste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
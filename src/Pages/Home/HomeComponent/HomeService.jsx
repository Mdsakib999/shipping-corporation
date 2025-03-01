import React from 'react';

const HomeService = () => {
    return (
        <div className="relative w-full flex flex-col items-center text-white text-center p-8">
        {/* Background Image */}
        <div className="w-full h-[300px] relative">
          <img
            src="https://www.constructionworld.in/assets/uploads/20f5aa8f827629e9ddb6f62b289002d5.jpg"
            alt="Shipping"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-blac bg-opacity-60"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
            Our Services
          </h1>
        </div>
  
        {/* Content Card */}
        <div className="relative bg-white text-black p-8 rounded-3xl shadow-lg max-w-4xl flex flex-col md:flex-row -mt-24">
          {/* Service Texts */}
          <div className="flex-1 p-4">
            <h2 className="text-xl font-bold">Custom Clearance</h2>
            <p className="text-gray-600 mb-4">Explore our comprehensive range of chartering services</p>
            
            <h2 className="text-xl font-bold">Storage & Packaging</h2>
            <p className="text-gray-600 mb-4">Explore our comprehensive range of chartering services.</p>
            
            <h2 className="text-xl font-bold">Transport Brokerage</h2>
            <p className="text-gray-600">Explore our comprehensive range of chartering.</p>
          </div>
          
          {/* Service Images */}
          <div className="flex-1 p-4 flex flex-col gap-4">
            <img
              src="https://source.unsplash.com/300x200/?containers,shipping"
              alt="Shipping"
              className="rounded-lg w-full"
            />
            <img
              src="https://source.unsplash.com/200x150/?logistics,packing"
              alt="Packing"
              className="rounded-lg w-2/3 mx-auto"
            />
          </div>
        </div>
      </div>
    );
};

export default HomeService;
import React from 'react';

const HomeService = () => {
    return (
        <div className="relative w-full flex flex-col items-center text-white text-center p-8">
        {/* Background Image */}
        <div className="w-full h-[300px] relative">
          <img
            src="https://t3.ftcdn.net/jpg/08/47/40/06/360_F_847400652_Q6ZvM8q0fSXCn8h2bHqc97xQNBNoN33v.jpg"
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
        <div className="relative bg-white text-black p-10 rounded-3xl text-left  max-w-4xl flex flex-col md:flex-row -mt-24 ">
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
          <div className="flex-1 p-4 flex flex-col gap-4 relative">
            <img
              src="https://media.istockphoto.com/id/486570435/photo/crane-lifting-up-container-in-yard.jpg?s=612x612&w=0&k=20&c=L3fiF5bi6rN8FdA3mdD7w7oCgXBHar6UvcqKGZZ9OyI="
              alt="Shipping"
              className="rounded-lg w-full"
            />
            <img
              src="https://media.istockphoto.com/id/1250035520/photo/foreman-holding-document-walking-and-checking-the-containers-box-from-cargo-ship-for-export.jpg?s=612x612&w=0&k=20&c=UYv1k-mjHCdFUEWORzSCSf5TtlW234D7kd0tyozCWwQ="
              alt="Packing"
              className="border-8 border-white w-[220px]  absolute -bottom-3 -left-5"
            />
          </div>
        </div>
      </div>
    );
};

export default HomeService;
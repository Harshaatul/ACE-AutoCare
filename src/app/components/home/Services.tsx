import { useState } from "react";

import { ImageWithFallback } from "../figma/ImageWithFallback";

import ServiceModal from "./ServiceModal";

const services = [

  {
    title: "AC Service and Repair",
    image:
      "https://images.unsplash.com/photo-1715597964018-b9ecfd21574e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Complete air conditioning diagnostics, repair, and recharge services for optimal cooling.",

    price: "₹1499",

    duration: "2-3 Hours",

    features: [
      "AC Cooling Check",
      "Gas Refill",
      "Compressor Inspection",
      "Cabin Filter Cleaning",
    ],
  },

  {
    title: "Batteries",
    image:
      "https://images.unsplash.com/photo-1705720717198-9b18c35500bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Battery testing, replacement, and maintenance to ensure reliable starts every time.",

    price: "₹2999",

    duration: "1 Hour",

    features: [
      "Battery Testing",
      "Battery Replacement",
      "Terminal Cleaning",
      "Charging Check",
    ],
  },

  {
    title: "Tires and Wheel Alignment",
    image:
      "https://images.unsplash.com/photo-1760836395840-fdfebd413333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Professional tire services, balancing, rotation, and precision wheel alignment.",

    price: "₹999",

    duration: "1-2 Hours",

    features: [
      "Wheel Balancing",
      "Wheel Alignment",
      "Tyre Rotation",
      "Tyre Inspection",
    ],
  },

  {
    title: "Car Inspection",
    image:
      "https://images.unsplash.com/photo-1775590766345-c117265f0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Comprehensive vehicle inspections and safety checks to keep you driving with confidence.",

    price: "₹799",

    duration: "1 Hour",

    features: [
      "Engine Inspection",
      "Brake Inspection",
      "Fluid Level Check",
      "Safety Diagnostics",
    ],
  },

  {
    title: "Insurance Claim",
    image:
      "https://images.unsplash.com/photo-1607970576683-114740d0cd72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Expert assistance with insurance claims and documentation for accident repairs.",

    price: "₹1999",

    duration: "2-5 Days",

    features: [
      "Insurance Assistance",
      "Claim Documentation",
      "Accident Repair",
      "Vehicle Inspection",
    ],
  },

  {
    title: "Clutch and Body Parts",
    image:
      "https://images.unsplash.com/photo-1760836395840-fdfebd413333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Quality clutch repairs and genuine body parts replacement for all makes and models.",

    price: "₹4999",

    duration: "1 Day",

    features: [
      "Clutch Repair",
      "Body Panel Replacement",
      "Genuine Parts",
      "Performance Check",
    ],
  },

];

function Services() {

  const [selectedService, setSelectedService] = useState<any>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: any) => {

    setSelectedService(service);

    setIsModalOpen(true);

  };

  return (

    <>
    
      <section
        id="services"
        className="relative -mt-20 pt-40 pb-28 overflow-hidden bg-gradient-to-b from-black via-[#050505] to-[#0b0b0b]"
      >

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-20">

            <p className="text-red-500 uppercase tracking-[6px] text-sm font-semibold mb-4">
              Premium Auto Solutions
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our Services
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Complete luxury automobile care built for performance,
              reliability, comfort, and peace of mind.
            </p>

          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service, index) => (

              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 hover:border-red-500/40 transition-all duration-500 shadow-2xl"
              >

                {/* Image */}
                <div className="overflow-hidden h-60 relative">

                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                </div>

                {/* Content */}
                <div className="p-8">

                  <div className="flex items-center justify-between mb-4">

                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>

                    <span className="text-red-500 font-bold">
                      {service.price}
                    </span>

                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => openModal(service)}
                    className="mt-6 bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold"
                  >
                    Learn More
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />

    </>

  );
}

export default Services;
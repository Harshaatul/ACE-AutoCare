
import { ImageWithFallback } from "../figma/ImageWithFallback";

const services = [
  {
    title: "AC Service and Repair",
    image:
      "https://images.unsplash.com/photo-1715597964018-b9ecfd21574e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Complete air conditioning diagnostics, repair, and recharge services for optimal cooling.",
  },

  {
    title: "Batteries",
    image:
      "https://images.unsplash.com/photo-1705720717198-9b18c35500bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Battery testing, replacement, and maintenance to ensure reliable starts every time.",
  },

  {
    title: "Tires and Wheel Alignment",
    image:
      "https://images.unsplash.com/photo-1760836395840-fdfebd413333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Professional tire services, balancing, rotation, and precision wheel alignment.",
  },

  {
    title: "Car Inspection",
    image:
      "https://images.unsplash.com/photo-1775590766345-c117265f0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Comprehensive vehicle inspections and safety checks to keep you driving with confidence.",
  },

  {
    title: "Insurance Claim",
    image:
      "https://images.unsplash.com/photo-1607970576683-114740d0cd72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Expert assistance with insurance claims and documentation for accident repairs.",
  },

  {
    title: "Clutch and Body Parts",
    image:
      "https://images.unsplash.com/photo-1760836395840-fdfebd413333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Quality clutch repairs and genuine body parts replacement for all makes and models.",
  },

  {
    title: "Windshield and Lights",
    image:
      "https://images.unsplash.com/photo-1583956922501-a0e42819c6cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Windshield repair and replacement, headlight restoration and replacement services.",
  },

  {
    title: "Suspension and Fitments",
    image:
      "https://images.unsplash.com/photo-1769218402167-b0ef15eaf7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Expert suspension repair, upgrades, and custom fitments for enhanced ride quality.",
  },

  {
    title: "Denting and Painting",
    image:
      "https://images.unsplash.com/photo-1754782385041-c200ec321b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Professional dent removal, paintless dent repair, and high-quality paint restoration.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>

          <p className="text-xl text-gray-600">
            Comprehensive care for every aspect of your vehicle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >

              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;
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

    <section
      id="services"
      className="relative -mt-20 pt-40 pb-28 overflow-hidden bg-gradient-to-b from-black via-[#050505] to-[#0b0b0b]"
    >

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

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
            Comprehensive luxury automotive care tailored for performance,
            safety, reliability, and perfection.
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
              <div className="overflow-hidden h-60">

                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-6 text-red-500 font-semibold text-lg hover:text-red-400 transition-colors">
                  Learn More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Services;
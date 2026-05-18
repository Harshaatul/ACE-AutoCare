const brands = [
  "Ford",
  "Toyota",
  "Hyundai",
  "Honda",
  "TATA",
  "Maruti Suzuki",
  "Mahindra",
  "Kia",
  "MG",
  "Volkswagen",
  "Skoda",
  "Chevrolet",
  "Jeep",
  "Mercedes-Benz",
  "Audi",
  "Jaguar/Land Rover",
];

function Brands() {

  return (

    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-orange-500/5 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-500/5 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Ford Specialist Banner */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#111111] shadow-[0_0_50px_rgba(249,115,22,0.05)] mb-24">

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#101010] to-[#161616]"></div>

          {/* Soft Glow */}
          <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full"></div>

          <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-red-500/5 blur-[120px] rounded-full"></div>

          {/* Texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="relative z-10 py-14 px-8 lg:px-14">

            {/* Badge */}
            <div className="flex justify-center mb-5">

              <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2">

                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>

                <p className="text-orange-400 uppercase tracking-[5px] text-[10px] font-bold">
                  ACE Automotive Solutions
                </p>

              </div>

            </div>

            {/* Heading */}
            <div className="text-center">

              <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight mb-4">

                Ford Specialists

              </h2>

              {/* Accent Line */}
              <div className="w-24 h-[3px] bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-6"></div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">

                Trusted by Ford owners across Pune for advanced diagnostics,
                premium servicing, performance upgrades, accident repairs,
                and complete luxury automotive care.

              </p>

            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

              {/* Card 1 */}
              <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-500">

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-500/[0.03]"></div>

                <div className="relative z-10">

                  <div className="text-3xl mb-4">⚙️</div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    Advanced Diagnostics
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    Precision fault detection using modern diagnostic systems
                    built specifically for Ford vehicles.
                  </p>

                </div>

              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-500">

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-500/[0.03]"></div>

                <div className="relative z-10">

                  <div className="text-3xl mb-4">🚗</div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    Genuine Service Care
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    Premium servicing with expert technicians,
                    genuine components, and industry-grade tools.
                  </p>

                </div>

              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-500">

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-500/[0.03]"></div>

                <div className="relative z-10">

                  <div className="text-3xl mb-4">🛠️</div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    Expert Repairs
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    Complete repair solutions for engine,
                    suspension, bodywork, electricals, and performance systems.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-orange-500 uppercase tracking-[6px] text-sm font-semibold mb-4">
            Premium Auto Brands
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Other Brands We Service
          </h2>

          <p className="text-xl text-gray-400">
            Professional servicing for all major automobile brands
          </p>

        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {brands.map((brand, index) => (

            <div
              key={index}
              className="group relative overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-10 text-center hover:-translate-y-2 hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-500 shadow-xl cursor-pointer"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/[0.05] to-red-500/[0.05]"></div>

              <div className="relative z-10">

                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                  {brand}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Brands;
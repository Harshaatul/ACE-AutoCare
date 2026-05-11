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
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Ford Speciality */}
        <div className="bg-blue-600 text-white rounded-3xl p-10 text-center shadow-xl mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Ford Specialists
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ACE Automotive Solutions is trusted by Ford owners across Pune
            for expert diagnostics, servicing, repairs, and maintenance.
          </p>

        </div>

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Other Brands We Service
          </h2>

          <p className="text-xl text-gray-600">
            Professional servicing for all major automobile brands
          </p>

        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-gray-800">
                {brand}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Brands;
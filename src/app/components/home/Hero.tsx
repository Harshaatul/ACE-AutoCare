import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../figma/ImageWithFallback";

function Hero() {

  const navigate = useNavigate();

  return (

    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzc3ODk3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Luxury car detailing"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-24 md:pt-28">

        {/* Tagline */}
        <p className="text-red-400 uppercase tracking-[8px] text-sm md:text-base font-semibold mb-6">
          Premium Auto Solutions
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-2xl">

          Premium Car Care <br />

          You Can Trust

        </h1>

        {/* Description */}
        <p className="mt-5 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">

          Professional detailing, diagnostics,
          maintenance, and repair services designed
          for modern luxury vehicles.

        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">

          <button
            onClick={() => navigate("/book-service")}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-red-500/30"
          >
            Schedule Service
          </button>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({
              behavior: "smooth",
                })
            }
              className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white text-xl font-semibold hover:bg-white/10 hover:border-red-500/40 transition-all duration-300"
            >
            Explore Services
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-xl">

            <h2 className="text-4xl font-black text-white mb-2">
              10K+
            </h2>

            <p className="text-gray-300 text-lg">
              Vehicles Serviced
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-xl">

            <h2 className="text-4xl font-black text-white mb-2">
              4.9★
            </h2>

            <p className="text-gray-300 text-lg">
              Customer Rating
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-xl">

            <h2 className="text-4xl font-black text-white mb-2">
              24/7
            </h2>

            <p className="text-gray-300 text-lg">
              Premium Support
            </p>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;
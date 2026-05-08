import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../figma/ImageWithFallback";

function Hero() {
  const navigate = useNavigate();

  return (  <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzc3ODk3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury car detailing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Premium Car Care <br />You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional detailing, maintenance, and repair services for your vehicle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/book-service")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Service
            </button>
          </div>
        </div>
      </section>
   
  );
}

export default Hero;
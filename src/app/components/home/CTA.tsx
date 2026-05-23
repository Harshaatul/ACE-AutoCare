import { Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CTA() {

  const navigate = useNavigate();

  return (

    <section className="relative overflow-hidden bg-black py-28 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,0,0.15),_transparent_40%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,80,0,0.12),_transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 px-5 py-2 rounded-full mb-8">

          <div className="w-2 h-2 rounded-full bg-red-500"></div>

          <span className="text-red-400 uppercase tracking-[0.35em] text-xs font-semibold">
            Premium Auto Solutions
          </span>

        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-5xl mx-auto">

          Ready To Give Your Car
          <br />
          The Care It Deserves?

        </h2>

        {/* Description */}
        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto mt-8">

          Professional diagnostics, premium servicing, detailing,
          and repair solutions designed for luxury and
          performance vehicles across Pune.

        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

          {/* Call Button */}
          <a
            href="tel:+919175387887"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition-all duration-300 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.35)]"
          >

            <Phone className="w-6 h-6" />

            Call +91 9175387887

          </a>

          {/* Book Service Button */}
          <button
            onClick={() => navigate("/book-service")}
            className="group inline-flex items-center gap-3 bg-white/[0.05] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.08] transition-all duration-300 text-white text-xl font-bold px-10 py-5 rounded-2xl"
          >

            Book Service

            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />

          </button>

        </div>

        {/* Bottom Premium Line */}
        <div className="mt-20 flex justify-center">

          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70"></div>

        </div>

      </div>

    </section>

  );

}

export default CTA;

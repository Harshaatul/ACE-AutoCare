import {
  Wrench,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import { useEffect, useState } from "react";

import workshop from "../../../imports/workshop.jpg";
import workshop1 from "../../../imports/workshop1.jpg";
import workshop2 from "../../../imports/workshop2.jpg";
import workshop3 from "../../../imports/workshop3.jpg";
import workshop4 from "../../../imports/workshop4.jpg";

function WhyChooseUs() {

  const images = [
    workshop,
    workshop1,
    workshop2,
    workshop3,
    workshop4,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) => (prev + 1) % images.length);

    }, 3500);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="bg-[#050505] py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP TEXT */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <p className="text-orange-500 uppercase tracking-[6px] text-sm font-bold mb-5">

            WHY CHOOSE ACE AUTOMOTIVE SOLUTIONS

          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">

            Premium Car Care
            <br />
            Experience In Pune

          </h2>

          <p className="text-gray-400 text-xl leading-relaxed">

            From diagnostics and repairs to detailing and maintenance,
            ACE AutoCare delivers premium automobile solutions with
            professional expertise, genuine parts, and trusted service.

          </p>

        </div>

        {/* MAIN IMAGE GALLERY */}
        <div className="relative rounded-[36px] overflow-hidden border border-white/10 shadow-2xl">

          <img
            src={images[currentImage]}
            alt="Workshop"
            className="w-full h-[720px] object-cover transition-all duration-700"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          {/* Bottom Text */}
          <div className="absolute bottom-10 left-10">

            <p className="text-orange-400 uppercase tracking-[5px] text-sm font-bold mb-4">

              Trusted Automotive Workshop

            </p>

            <h3 className="text-5xl md:text-6xl font-black text-white leading-tight">

              Real Service.
              <br />
              Real Experts.

            </h3>

          </div>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:border-orange-500/40 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">

              <Wrench className="w-8 h-8 text-orange-400" />

            </div>

            <h3 className="text-3xl font-bold text-white mb-4">

              Expert Technicians

            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">

              Experienced professionals using advanced diagnostics
              and modern automotive repair techniques.

            </p>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:border-orange-500/40 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">

              <ShieldCheck className="w-8 h-8 text-orange-400" />

            </div>

            <h3 className="text-3xl font-bold text-white mb-4">

              Genuine Parts

            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">

              We use only trusted manufacturer-approved
              components for reliability and performance.

            </p>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 hover:border-orange-500/40 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">

              <Clock3 className="w-8 h-8 text-orange-400" />

            </div>

            <h3 className="text-3xl font-bold text-white mb-4">

              Fast Turnaround

            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">

              Quick service delivery without compromising
              quality, safety, or workmanship.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default WhyChooseUs;
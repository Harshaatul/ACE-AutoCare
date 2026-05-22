import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function Testimonials() {
  const reviews = [
    {
      name: "Abhishek Ghodchore",
      initials: "A",
      date: "2 months ago",
      review:
        "Best and quick service. Honest and reliable suggestions. From body shop to insurance assistance, everything available under one roof.",
    },
    {
      name: "Rohit Dhomne",
      initials: "R",
      date: "7 months ago",
      review:
        "Excellent experience at ACE Automotive Solutions. The team is very professional and genuinely cares about customer satisfaction.",
    },
    {
      name: "KB TOYS",
      initials: "KB",
      date: "7 months ago",
      review:
        "After struggling with poor service at other garages, I finally found ACE Automotive Solutions. Honest mechanics and top-notch service.",
    },
    {
      name: "inkmarks",
      initials: "IM",
      date: "6 months ago",
      review:
        "Very transparent pricing and timely delivery. Highly recommended for anyone around Wakad or Chinchwad.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-black py-28 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[140px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-orange-400 uppercase tracking-[5px] text-sm font-semibold mb-4">
            Google Reviews
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            What Our Clients Say
          </h2>

          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="flex gap-1">
              <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
              <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
              <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
              <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
              <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
            </div>

            <span className="text-white text-2xl font-bold">
              4.9
            </span>
          </div>

          <p className="text-gray-400 text-lg">
            Based on 94+ verified customer reviews
          </p>

        </div>

        {/* Review Card */}
        <div className="relative">

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30 transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8 text-black" />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30 transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8 text-black" />
          </button>

          {/* Card */}
          <div className="mx-20 bg-gradient-to-br from-[#111111] to-[#050505] border border-white/10 rounded-[40px] p-14 min-h-[420px] flex flex-col justify-between shadow-2xl">

            {/* Google Header */}
            <div className="flex items-center justify-between mb-10">

              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-black font-black text-2xl">
                  {reviews[current].initials}
                </div>

                <div>
                  <h3 className="text-white text-3xl font-bold">
                    {reviews[current].name}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Local Guide • {reviews[current].date}
                  </p>
                </div>

              </div>

              {/* Google */}
              <div className="hidden md:block">
                <p className="text-white font-semibold text-lg">
                  Google Review
                </p>
              </div>

            </div>

            {/* Stars */}
            <div className="flex gap-2 mb-8">

              <Star className="w-7 h-7 fill-orange-400 text-orange-400" />
              <Star className="w-7 h-7 fill-orange-400 text-orange-400" />
              <Star className="w-7 h-7 fill-orange-400 text-orange-400" />
              <Star className="w-7 h-7 fill-orange-400 text-orange-400" />
              <Star className="w-7 h-7 fill-orange-400 text-orange-400" />

            </div>

            {/* Review Text */}
            <p className="text-gray-300 text-2xl leading-[1.9] max-w-4xl">
              “{reviews[current].review}”
            </p>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-14">

              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-orange-500 w-10"
                      : "bg-gray-600"
                  }`}
                ></button>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
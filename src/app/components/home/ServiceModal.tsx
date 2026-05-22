import {
  X,
  Clock,
  ShieldCheck,
  BadgeIndianRupee,
} from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;

  onClose: () => void;

  service: {
    title: string;
    image: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
  } | null;
}

function ServiceModal({
  isOpen,
  onClose,
  service,
}: ServiceModalProps) {

  if (!isOpen || !service) return null;

  return (

    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">

      {/* Modal */}
      <div className="relative bg-[#0b0b0b] border border-white/10 rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl animate-in fade-in zoom-in duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 bg-white/10 hover:bg-red-500 transition-all duration-300 p-2 rounded-full"
        >

          <X className="w-6 h-6 text-white" />

        </button>

        <div className="grid lg:grid-cols-2">

          {/* Left Image */}
          <div className="relative h-[350px] lg:h-full">

            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            <div className="absolute bottom-8 left-8">

              <p className="text-red-500 uppercase tracking-[4px] text-sm font-semibold mb-2">
                ACE AutoCare
              </p>

              <h2 className="text-4xl font-black text-white">
                {service.title}
              </h2>

            </div>

          </div>

          {/* Right Content */}
          <div className="p-8 lg:p-10 text-white">

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">

              {service.features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>

                  <p className="text-gray-300">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

                <Clock className="w-7 h-7 text-red-500 mb-3" />

                <p className="text-sm text-gray-400 mb-1">
                  Estimated Time
                </p>

                <h3 className="text-xl font-bold">
                  {service.duration}
                </h3>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

                <BadgeIndianRupee className="w-7 h-7 text-red-500 mb-3" />

                <p className="text-sm text-gray-400 mb-1">
                  Starting From
                </p>

                <h3 className="text-xl font-bold">
                  {service.price}
                </h3>

              </div>

            </div>

            {/* Warranty */}
            <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 mb-8">

              <ShieldCheck className="w-7 h-7 text-red-500" />

              <div>

                <h3 className="font-bold">
                  30 Days Service Warranty
                </h3>

                <p className="text-sm text-gray-400">
                  Genuine parts and trusted workmanship.
                </p>

              </div>

            </div>

            {/* CTA */}
            <button
              onClick={() => {

                onClose();

                window.location.href =
                  `/book-service?service=${encodeURIComponent(service.title)}`;

              }}
              className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-4 rounded-2xl text-lg font-bold"
            >
              Book This Service
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ServiceModal;
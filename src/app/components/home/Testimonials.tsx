import { Star } from "lucide-react";

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/50 text-yellow-400'}`} />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">4.5</span>
            </div>
            <p className="text-xl text-gray-600">94 reviews from our satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Excellent experience at Ace Automotive Solutions, Thergaon close to Hinjewadi. The team is very professional and genuinely cares about customer satisfaction. They updated me throughout the process and even gave tips for better maintenance. Truly happy with their service."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                  R
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rohit Dhomne</div>
                  <div className="text-sm text-gray-600">7 months ago</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "I recently got my car serviced at Ace Automotive Solutions in Thergaon, and I am extremely happy with the experience. Mr. Atul sir explained every detail patiently and delivered the car on time. The prices are fair, and the quality of work is top-notch. Highly recommended for anyone around Chinchwad or Wakad."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                  IM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">inkmarks</div>
                  <div className="text-sm text-gray-600">7 months ago</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "After struggling with poor service at other garages, I finally found Ace Automotive Solutions in Thergaon opposite Badmaja Paper Mill. What a difference! The mechanics are skilled, honest, and polite. They fixed my car issues perfectly, and I feel much more confident driving now. Best service near Kalewadi and Chinchwad!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-700 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                  KB
                </div>
                <div>
                  <div className="font-semibold text-gray-900">KB TOYS</div>
                  <div className="text-sm text-gray-600">7 months ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
  );
}

export default Testimonials;
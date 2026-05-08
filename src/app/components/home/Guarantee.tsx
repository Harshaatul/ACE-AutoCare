import { Car, Shield, Clock, CheckCircle } from "lucide-react";

function Guarantee() {
  return ( 
     <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ACE AutoCare's Guarantee</h2>
            <p className="text-lg text-gray-600">Your satisfaction is our priority</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Pickup Drop</h3>
              <p className="text-gray-600">Complimentary pickup and drop service for your convenience.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600">Only authentic, manufacturer-approved parts for all repairs.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Days Warranty</h3>
              <p className="text-gray-600">All services backed by our comprehensive 30-day warranty.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Prices</h3>
              <p className="text-gray-600">Competitive pricing without compromising on quality or service.</p>
            </div>
          </div>
        </div>
      </section>
   
  );
}

export default Guarantee;
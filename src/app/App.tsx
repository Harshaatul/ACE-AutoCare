import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Car, Droplet, Shield, Wrench, Clock, Star, Phone, Mail, MapPin, CheckCircle, User } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/src/imports/image.png" alt="ACE AutoCare Logo" className="h-12" />
              <span className="text-2xl font-bold text-gray-900">ACE AutoCare</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
              
                <User className="w-5 h-5" />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive care for every aspect of your vehicle</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715597964018-b9ecfd21574e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhaXIlMjBjb25kaXRpb25pbmclMjByZXBhaXJ8ZW58MXx8fHwxNzc3OTAyMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AC Service and Repair"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AC Service and Repair</h3>
                <p className="text-gray-600">Complete air conditioning diagnostics, repair, and recharge services for optimal cooling.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705720717198-9b18c35500bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5JTIwcmVwbGFjZW1lbnR8ZW58MXx8fHwxNzc3OTAyMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Batteries"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Batteries</h3>
                <p className="text-gray-600">Battery testing, replacement, and maintenance to ensure reliable starts every time.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760836395840-fdfebd413333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjbHV0Y2glMjByZXBhaXIlMjBwYXJ0c3xlbnwxfHx8fDE3Nzc5MDIwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tires and Wheel Alignment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tires and Wheel Alignment</h3>
                <p className="text-gray-600">Professional tire services, balancing, rotation, and precision wheel alignment.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1775590766345-c117265f0c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnNwZWN0aW9uJTIwbWVjaGFuaWN8ZW58MXx8fHwxNzc3OTAyMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Car Inspection"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Car Inspection</h3>
                <p className="text-gray-600">Comprehensive vehicle inspections and safety checks to keep you driving with confidence.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607970576683-114740d0cd72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnN1cmFuY2UlMjBjbGFpbSUyMGRhbWFnZXxlbnwxfHx8fDE3Nzc5MDIwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Insurance Claim"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Claim</h3>
                <p className="text-gray-600">Expert assistance with insurance claims and documentation for accident repairs.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760836395840-fdfebd413333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjbHV0Y2glMjByZXBhaXIlMjBwYXJ0c3xlbnwxfHx8fDE3Nzc5MDIwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clutch and Body Parts"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clutch and Body Parts</h3>
                <p className="text-gray-600">Quality clutch repairs and genuine body parts replacement for all makes and models.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1583956922501-a0e42819c6cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kc2hpZWxkJTIwaGVhZGxpZ2h0fGVufDF8fHx8MTc3NzkwMjA0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Windshield and Lights"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Windshield and Lights</h3>
                <p className="text-gray-600">Windshield repair and replacement, headlight restoration and replacement services.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769218402167-b0ef15eaf7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzdXNwZW5zaW9uJTIwcmVwYWlyfGVufDF8fHx8MTc3NzkwMjA0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Suspension and Fitments"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Suspension and Fitments</h3>
                <p className="text-gray-600">Expert suspension repair, upgrades, and custom fitments for enhanced ride quality.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1754782385041-c200ec321b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZW50aW5nJTIwcGFpbnRpbmclMjBib2R5d29ya3xlbnwxfHx8fDE3Nzc5MDIwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Denting and Painting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Denting and Painting</h3>
                <p className="text-gray-600">Professional dent removal, paintless dent repair, and high-quality paint restoration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACE AutoCare's Guarantee Section */}
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

      {/* Testimonials Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Give Your Car the Care It Deserves?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your appointment today and experience the ACE AutoCare difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
              Call +91 9175387887
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Car className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">ACE AutoCare</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner for premium car care and servicing since 2009.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400">123 Auto Boulevard<br />Los Angeles, CA 90001</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-400">+91 9175387887</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-400">info@autocarepro.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-400">
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Our Services</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="#testimonials" className="block text-gray-400 hover:text-white transition-colors">Testimonials</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Gallery</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQs</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ACE AutoCare. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------- APP ROUTES ----------------
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
  );
}
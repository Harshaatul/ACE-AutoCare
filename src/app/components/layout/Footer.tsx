import {
  Car,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Facebook,
  Instagram,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/5">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,0,0.10),_transparent_35%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,120,0,0.08),_transparent_35%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

          {/* Logo + About */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-[0_0_25px_rgba(255,0,0,0.35)]">

                <Car className="w-7 h-7 text-white" />

              </div>

              <div>

                <h2 className="text-3xl font-black text-white">
                  ACE AutoCare
                </h2>

                <p className="text-red-400 tracking-[0.3em] uppercase text-xs mt-1">
                  Premium Car Service
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-relaxed text-lg">

              Trusted premium car care and servicing solutions
              in Pune with expert technicians, genuine parts,
              and transparent pricing.

            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ace_auto85?igsh=dWFpYm12amtsNDEz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center group"
              >

                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-pink-400 transition-colors" />

              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/AceAutoPune"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center group"
              >

                <Facebook className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />

              </a>

            </div>

          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Info
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <MapPin className="w-6 h-6 text-red-400 mt-1" />

                <p className="text-gray-400 leading-relaxed text-lg">
                  Aditya Birla Hospital Marg,
                  opposite Pudumjee Paper Products Ltd,
                  Thergaon, Chinchwad,
                  Pimpri-Chinchwad, Pune,
                  Maharashtra 411033
                </p>

              </div>

              <div className="flex items-center gap-4">

                <Phone className="w-6 h-6 text-red-400" />

                <a
                  href="tel:+919175387887"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  +91 9175387887
                </a>

              </div>

              <div className="flex items-center gap-4">

                <Mail className="w-6 h-6 text-red-400" />

                <a
                  href="mailto:hello@aceauto.in"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  hello@aceauto.in
                </a>

              </div>

              <div className="flex items-start gap-4">

                <Clock3 className="w-6 h-6 text-red-400 mt-1" />

                <div className="text-gray-400 text-lg leading-relaxed">

                  <p>Mon - Fri : 8:00 AM - 6:00 PM</p>
                  <p>Saturday : 9:00 AM - 4:00 PM</p>
                  <p>Sunday : Closed</p>

                </div>

              </div>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold text-white mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="#services"
                className="text-gray-400 hover:text-red-400 transition-colors text-lg"
              >
                Our Services
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-red-400 transition-colors text-lg"
              >
                About Us
              </a>

              <a
                href="#testimonials"
                className="text-gray-400 hover:text-red-400 transition-colors text-lg"
              >
                Testimonials
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-red-400 transition-colors text-lg"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-base">
            © 2026 ACE AutoCare. All rights reserved.
          </p>

          <p className="text-gray-600 text-sm tracking-[0.2em] uppercase">
            Premium Automotive Solutions
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
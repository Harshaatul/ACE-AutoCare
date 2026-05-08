import { useState } from "react";
import { User, Menu, X, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const [menuOpen, setMenuOpen] = useState(false);
  const [customerMenu, setCustomerMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/src/imports/image.png"
              alt="ACE AutoCare Logo"
              className="h-12"
            />

            <span className="text-2xl font-bold text-gray-900">
              ACE AutoCare
            </span>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-8 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none`}
          >

            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>

            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>

            {isLoggedIn ? (

              <div className="relative">

                <button
                  onClick={() => setCustomerMenu(!customerMenu)}
                  className="bg-red-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Customer
                </button>

                {customerMenu && (
                  <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-xl w-48 overflow-hidden z-50">

                    <button
                      onClick={() => navigate("/dashboard")}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100"
                    >
                      Dashboard
                    </button>

                    <button
                      onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        navigate("/");
                        window.location.reload();
                      }}
                      className="w-full text-left px-5 py-3 hover:bg-gray-100 flex items-center gap-2 text-red-500"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>

                  </div>
                )}

              </div>

            ) : (

              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <User className="w-5 h-5" />
                Login
              </button>

            )}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
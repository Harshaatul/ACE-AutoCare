import { useEffect, useState } from "react";
import { User, Menu, X, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const [menuOpen, setMenuOpen] = useState(false);

  const [customerMenu, setCustomerMenu] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

 useEffect(() => {

  const handleScroll = () => {

    const currentScrollY = window.scrollY;

    // Hide navbar when scrolling down
    if (currentScrollY > lastScrollY && currentScrollY > 100) {

      setShowNavbar(false);

    }

    // Show navbar only after scrolling up significantly
    if (lastScrollY - currentScrollY > 50) {

      setShowNavbar(true);

    }

    setLastScrollY(currentScrollY);

  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, [lastScrollY]);

  return (

    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => navigate("/")}
          >

            <img
              src="/src/imports/image.png"
              alt="ACE AutoCare Logo"
              className="h-16"
            />

            <div>

              <h1 className="text-4xl font-black text-white leading-none">
                ACE AutoCare
              </h1>

              <p className="text-gray-300 tracking-[3px] text-sm mt-1 uppercase">
                Premium Car Service
              </p>

            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}

          </button>

          {/* Navbar Links */}
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-10 absolute md:static top-24 left-0 w-full md:w-auto bg-transparent md:bg-transparent p-6 md:p-0`}
          >

            <a
              href="#about"
              className="text-white text-xl font-semibold hover:text-red-500 transition-colors"
            >
              About
            </a>

            <a
              href="#services"
              className="text-white text-xl font-semibold hover:text-red-500 transition-colors"
            >
              Services
            </a>

            <a
              href="#testimonials"
              className="text-white text-xl font-semibold hover:text-red-500 transition-colors"
            >
              Testimonials
            </a>

            <a
              href="#contact"
              className="text-white text-xl font-semibold hover:text-red-500 transition-colors"
            >
              Contact
            </a>

            {/* Logged In */}
            {isLoggedIn ? (

              <div className="relative">

                <button
                  onClick={() => setCustomerMenu(!customerMenu)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md text-xl font-semibold transition-colors"
                >
                  Customer
                </button>

                {customerMenu && (

                  <div className="absolute right-0 mt-4 bg-white rounded-xl shadow-2xl overflow-hidden w-52">

                    <button
                      onClick={() => navigate("/dashboard")}
                      className="w-full text-left px-5 py-4 hover:bg-gray-100 text-lg"
                    >
                      Dashboard
                    </button>

                    <button
                      onClick={() => {

                        localStorage.removeItem("isLoggedIn");

                        localStorage.removeItem("token");

                        navigate("/");

                        window.location.reload();

                      }}
                      className="w-full text-left px-5 py-4 hover:bg-gray-100 flex items-center gap-2 text-red-500 text-lg"
                    >

                      <LogOut className="w-5 h-5" />

                      Logout

                    </button>

                  </div>

                )}

              </div>

            ) : (

              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md text-xl font-semibold transition-colors"
              >

                <User className="w-6 h-6" />

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
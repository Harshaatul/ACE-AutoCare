import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return ( <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
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
              {isLoggedIn ? (

  <button
  onClick={() => navigate("/dashboard")}
  className="bg-red-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-600 transition-colors"
>
  Customer
</button>

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
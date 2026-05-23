import {
  Car,
  Calendar,
  Clock3,
  Wrench,
  LogOut,
  Home,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    navigate("/login");

  };

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,0,0.18),_transparent_35%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,120,0,0.12),_transparent_35%)]"></div>

      {/* Header */}
      <div className="relative border-b border-white/10 backdrop-blur-xl bg-white/[0.03]">

        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          <div>

            <p className="text-red-400 tracking-[0.3em] uppercase text-xs font-semibold mb-3">
              ACE AUTOCARE
            </p>

            <h1 className="text-4xl font-black">
              Customer Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Welcome back to your premium service portal
            </p>

          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 bg-white/[0.05] border border-white/10 hover:border-red-500/40 hover:bg-white/[0.08] px-6 py-3 rounded-2xl transition-all duration-300"
            >

              <Home className="w-5 h-5" />

              Home

            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold shadow-[0_0_25px_rgba(255,0,0,0.30)]"
            >

              <LogOut className="w-5 h-5" />

              Logout

            </button>

          </div>

        </div>

      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-14">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Vehicles */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-red-500/30 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 mb-3">
                  Registered Vehicles
                </p>

                <h2 className="text-6xl font-black text-white">
                  0
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">

                <Car className="w-8 h-8 text-red-400" />

              </div>

            </div>

          </div>

          {/* Bookings */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-500/30 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 mb-3">
                  Total Bookings
                </p>

                <h2 className="text-6xl font-black text-white">
                  0
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

                <Calendar className="w-8 h-8 text-orange-400" />

              </div>

            </div>

          </div>

          {/* Pending */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-yellow-500/30 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 mb-3">
                  Pending Services
                </p>

                <h2 className="text-6xl font-black text-white">
                  0
                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">

                <Clock3 className="w-8 h-8 text-yellow-400" />

              </div>

            </div>

          </div>

        </div>

        {/* Recent Services */}
        <div className="mt-12 bg-white/[0.04] border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

          <div className="flex items-center gap-4 mb-10">

            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">

              <Wrench className="w-7 h-7 text-red-400" />

            </div>

            <div>

              <h2 className="text-3xl font-black text-white">
                Recent Services
              </h2>

              <p className="text-gray-400 mt-1">
                Your latest bookings and service updates
              </p>

            </div>

          </div>

          {/* Empty State */}
          <div className="border border-dashed border-white/10 rounded-3xl p-20 text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">

              <Calendar className="w-10 h-10 text-gray-500" />

            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              No Services Yet
            </h3>

            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">

              You haven't booked any services yet.
              Schedule your first premium car service with
              ACE AutoCare today.

            </p>

            <button
              onClick={() => navigate("/book-service")}
              className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition-all duration-300 text-white font-bold px-8 py-4 rounded-2xl shadow-[0_0_25px_rgba(255,0,0,0.30)]"
            >

              Book Service

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Car,
  Calendar,
  Clock,
  Wrench,
  LogOut,
} from "lucide-react";

function Dashboard() {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {

    const fetchBookings = async () => {

      try {

        const response = await fetch("http://localhost:5000/api/bookings");

        const data = await response.json();

        setBookings(data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchBookings();

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/");

  };

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-600 text-white py-6 shadow-lg">

        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <User className="w-10 h-10" />

            <div>

              <h1 className="text-3xl font-bold">
                Customer Dashboard
              </h1>

              <p className="text-blue-100">
                Welcome back to ACE AutoCare
              </p>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition-colors"
          >

            <LogOut className="w-5 h-5" />

            Logout

          </button>

        </div>

      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Vehicles */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="flex items-center gap-4 mb-4">

              <Car className="w-10 h-10 text-blue-600" />

              <h2 className="text-2xl font-bold text-gray-900">
                Vehicles
              </h2>

            </div>

            <p className="text-5xl font-bold text-blue-600">
              {bookings.length}
            </p>

          </div>

          {/* Bookings */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="flex items-center gap-4 mb-4">

              <Calendar className="w-10 h-10 text-green-600" />

              <h2 className="text-2xl font-bold text-gray-900">
                Bookings
              </h2>

            </div>

            <p className="text-5xl font-bold text-green-600">
              {bookings.length}
            </p>

          </div>

          {/* Pending */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="flex items-center gap-4 mb-4">

              <Clock className="w-10 h-10 text-orange-500" />

              <h2 className="text-2xl font-bold text-gray-900">
                Pending
              </h2>

            </div>

            <p className="text-5xl font-bold text-orange-500">
              {bookings.length}
            </p>

          </div>

        </div>

        {/* Recent Services */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex items-center gap-4 mb-8">

            <Wrench className="w-10 h-10 text-blue-600" />

            <h2 className="text-3xl font-bold text-gray-900">
              Recent Services
            </h2>

          </div>

          <div className="space-y-6">

            {bookings.map((booking: any) => (

              <div
                key={booking.id}
                className="border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {booking.service}
                  </h3>

                  <p className="text-gray-600">
                    {booking.carBrand} • Pending
                  </p>

                </div>

                <div className="bg-orange-100 text-orange-700 px-5 py-2 rounded-xl font-semibold w-fit">
                  Pending
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;

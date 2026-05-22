import { useState } from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function BookService() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const selectedService =
    searchParams.get("service") || "";

  const [formData, setFormData] = useState({

    fullName: "",

    phone: "",

    carBrand: "",

    service: selectedService,

    date: "",

    message: "",

  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${localStorage.getItem("token")}`,

          },

          body: JSON.stringify(formData),

        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Service booked successfully!");

        console.log(data);

        navigate("/");

      } else {

        alert(data.message || "Something went wrong");

      }

    } catch (error) {

      console.error(error);

      alert("Server error");

    }

  };

  return (

    <section className="min-h-screen bg-black py-24 px-6 overflow-hidden relative">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-red-500 uppercase tracking-[6px] text-sm font-semibold mb-4">

            ACE AUTOCARE

          </p>

          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">

            Book Your Service

          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">

            Schedule premium automobile servicing with
            trusted experts and genuine parts support.

          </p>

        </div>

        {/* Form */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[36px] p-10 md:p-14 shadow-2xl">

          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >

            {/* Full Name */}
            <div>

              <label className="block text-white font-semibold mb-3">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-red-500 transition-all"
                required
              />

            </div>

            {/* Phone */}
            <div>

              <label className="block text-white font-semibold mb-3">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-red-500 transition-all"
                required
              />

            </div>

            {/* Brand */}
            <div>

              <label className="block text-white font-semibold mb-3">
                Car Brand
              </label>

              <select
                name="carBrand"
                value={formData.carBrand}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-red-500 transition-all"
                required
              >

                <option value="" className="bg-black">
                  Select Car Brand
                </option>

                <option className="bg-black">
                  Maruti Suzuki
                </option>

                <option className="bg-black">
                  Hyundai
                </option>

                <option className="bg-black">
                  Honda
                </option>

                <option className="bg-black">
                  Tata
                </option>

                <option className="bg-black">
                  Mahindra
                </option>

                <option className="bg-black">
                  BMW
                </option>

                <option className="bg-black">
                  Mercedes
                </option>
                
                 <option className="bg-black">
                  Toyota
                </option>

              </select>

            </div>

            {/* Service */}
            <div>

              <label className="block text-white font-semibold mb-3">
                Select Service
              </label>
<select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-red-500 transition-all"
  required
>

  <option value="" className="bg-black">
    Select Service
  </option>

  <option
    value="AC Service and Repair"
    className="bg-black"
  >
    AC Service and Repair
  </option>

  <option
    value="Batteries"
    className="bg-black"
  >
    Batteries
  </option>

  <option
    value="Tires and Wheel Alignment"
    className="bg-black"
  >
    Tires and Wheel Alignment
  </option>

  <option
    value="Car Inspection"
    className="bg-black"
  >
    Car Inspection
  </option>

  <option
    value="Insurance Claim"
    className="bg-black"
  >
    Insurance Claim
  </option>

  <option
    value="Clutch and Body Parts"
    className="bg-black"
  >
    Clutch and Body Parts
  </option>

</select>

            </div>

            {/* Date */}
            <div>

              <label className="block text-white font-semibold mb-3">
                Preferred Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-red-500 transition-all"
                required
              />

            </div>

            {/* Message */}
            <div>

              <label className="block text-white font-semibold mb-3">
                Additional Details
              </label>

              <textarea
                name="message"
                placeholder="Describe your issue or service requirement"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-red-500 transition-all"
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 text-white text-xl font-bold py-5 rounded-2xl shadow-2xl shadow-red-500/20"
            >

              Book Service

            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default BookService;
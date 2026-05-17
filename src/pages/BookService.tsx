import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    carBrand: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {

    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });

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
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold text-center text-blue-600 mb-10">
          Book Your Service
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="carBrand"
            value={formData.carBrand}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Car Brand</option>
            <option>Maruti Suzuki</option>
            <option>Hyundai</option>
            <option>Honda</option>
            <option>Tata</option>
            <option>Mahindra</option>
            <option>BMW</option>
            <option>Mercedes</option>
          </select>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Service</option>
            <option>AC Service</option>
            <option>Oil Change</option>
            <option>Wheel Alignment</option>
            <option>Battery Replacement</option>
            <option>Denting & Painting</option>
            <option>Car Inspection</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Describe your issue or service requirement"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold py-4 rounded-2xl transition-colors"
          >
            Book Service
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookService;
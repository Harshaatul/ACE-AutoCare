import { api } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
  e: React.FormEvent
) => {

  e.preventDefault();

  try {

    const response = await api.post("/api/login", {
      email,
      password,
});

    const data = await response.json();

    if (!response.ok) {

      alert(data.message);

      return;

    }

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    alert("Login successful");

    navigate("/dashboard");

  } catch (error) {

    console.error(error);

    alert("Server error");

  }

};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">

        <h1 className="text-5xl font-bold text-blue-600 text-center mb-10">
          ACE AutoCare Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl px-5 py-5 text-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl px-5 py-5 text-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold py-4 rounded-2xl transition-colors"
          >
            Login
          </button>

        </form>

        <p className="text-center text-xl mt-8">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login; 
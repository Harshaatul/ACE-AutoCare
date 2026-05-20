import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";

import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";
import Footer from "./components/layout/Footer";

import BookService from "../pages/BookService";

import Dashboard from "../pages/Dashboard";


import Brands from "./components/home/Brands";

import WhyChooseUs from "./components/home/WhyChooseUs";


import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Car, Droplet, Shield, Wrench, Clock, Star, Phone, Mail, MapPin, CheckCircle, User } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
     

      {/* Services Section */}
      <Services />
      <Brands />

      <WhyChooseUs />


      {/* ImageWithFallback */}
      <ImageWithFallback />
      

     
       

      {/* Testimonials Section */}
       <Testimonials />

      {/* CTA Section */}
        <CTA />

      {/* Contact Section */}
        <Footer />
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

        <Route path="/book-service" element={<BookService />} />
        

       <Route
         path="/dashboard"
          element={
            <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}
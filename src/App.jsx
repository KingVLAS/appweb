
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import Home from "@/pages/Home";
import Servicios from "@/pages/Servicios";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <ThreeBackground />
        <div className="relative z-10">
          <Toaster />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
          <Chatbot />
        </div>
      </div>
    </Router>
  );
}

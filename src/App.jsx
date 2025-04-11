// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorBoundary from "@/components/ErrorBoundary";
import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import { Toaster } from "@/components/ui/toaster";

import Home from "@/pages/Home";
import Servicios from "@/pages/Servicios";

// ────────────────────────────────────────────────────────────
// Página temporal para rutas aún no implementadas
const Stub = ({ title }) => (
  <section className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold">{title}</h1>
  </section>
);
// ────────────────────────────────────────────────────────────

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        {/* Three.js puede tardar; Suspense evita parpadeos */}
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>

        <Navbar />
        <Chatbot />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />

          {/* Rutas placeholder */}
          <Route path="/portafolio" element={<Stub title="Portafolio" />} />
          <Route path="/blog" element={<Stub title="Blog" />} />
          <Route path="/nosotros" element={<Stub title="Nosotros" />} />
          <Route path="/contacto" element={<Stub title="Contacto" />} />

          {/* 404 */}
          <Route path="*" element={<Stub title="404 – Página no encontrada" />} />
        </Routes>

        <Toaster />
      </Router>
    </ErrorBoundary>
  );
}

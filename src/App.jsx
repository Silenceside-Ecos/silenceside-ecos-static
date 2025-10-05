import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout.jsx";
import TalleresEcosDelSer from "./pages/TalleresEcosDelSer.jsx";
import EspaciosE from "./pages/EspaciosE.jsx";
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");
export default function App() {
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cta" element={<CTA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espacios_e" element={<EspaciosE />} />
        </Routes>
      </Layout>
    </Router>
  );
}

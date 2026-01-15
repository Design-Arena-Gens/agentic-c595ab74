"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "SPC Flooring",
    description: "Stone Plastic Composite flooring - waterproof, durable, and eco-friendly",
    features: ["100% Waterproof", "Scratch Resistant", "Easy Installation", "Eco-Friendly"],
  },
  {
    id: 2,
    name: "Soffit Panel",
    description: "High-quality ceiling panels for residential and commercial spaces",
    features: ["Weather Resistant", "Low Maintenance", "Modern Design", "Durable"],
  },
  {
    id: 3,
    name: "ACP Sheet",
    description: "Aluminum Composite Panels for exterior and interior cladding",
    features: ["Fire Resistant", "Lightweight", "Aesthetic Appeal", "Long Lasting"],
  },
  {
    id: 4,
    name: "Flexitile",
    description: "Flexible tiles for creative and modern wall designs",
    features: ["Flexible", "Lightweight", "Versatile", "Easy to Cut"],
  },
  {
    id: 5,
    name: "3D Decorative Panel",
    description: "Stunning 3D wall panels that add depth and texture to any space",
    features: ["Modern Design", "Textured Surface", "Easy Installation", "Paintable"],
  },
  {
    id: 6,
    name: "PVC Louvers",
    description: "Premium PVC louvers for ventilation and aesthetic enhancement",
    features: ["Weather Proof", "UV Resistant", "Low Maintenance", "Customizable"],
  },
  {
    id: 7,
    name: "PU Stone",
    description: "Polyurethane decorative stone panels - lightweight and realistic",
    features: ["Lightweight", "Realistic Look", "Easy to Install", "Durable"],
  },
  {
    id: 8,
    name: "Laminate",
    description: "High-pressure laminates for furniture and interior surfaces",
    features: ["Scratch Resistant", "Wide Variety", "Cost Effective", "Easy Maintenance"],
  },
  {
    id: 9,
    name: "Gear Clock",
    description: "Industrial-style decorative gear clocks for modern interiors",
    features: ["Unique Design", "Statement Piece", "Quality Craftsmanship", "Modern Aesthetic"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 gradient-bg text-white shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-gold">Grand Royale</span> Interior
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-gold transition">Home</a>
              <a href="#products" className="hover:text-gold transition">Products</a>
              <a href="#about" className="hover:text-gold transition">About</a>
              <a href="#contact" className="hover:text-gold transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#home" className="block hover:text-gold transition" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#products" className="block hover:text-gold transition" onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#about" className="block hover:text-gold transition" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" className="block hover:text-gold transition" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="gradient-bg text-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Space with <span className="text-gold">Grand Royale</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Premium interior solutions including SPC flooring, ACP sheets, 3D panels, and more
          </p>
          <a
            href="#products"
            className="inline-block bg-gold text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition transform hover:scale-105"
          >
            Explore Our Products
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-gold">Premium</span> Products
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our comprehensive range of interior products designed to elevate your spaces
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
              >
                <div className="gradient-bg h-48 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">{product.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {selectedProduct === product.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold mb-2 text-gold">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <span className="text-gold mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button className="mt-4 text-gold font-semibold hover:text-yellow-600 transition">
                    {selectedProduct === product.id ? "Show Less" : "Learn More →"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gold">Grand Royale</span>?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                We are a leading interior products startup committed to providing premium quality materials
                for residential and commercial spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Premium Quality</h3>
                    <p className="text-gray-600">Only the finest materials that meet international standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Expert Guidance</h3>
                    <p className="text-gray-600">Professional consultation to help you choose the right products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Competitive Pricing</h3>
                    <p className="text-gray-600">Best value for money without compromising on quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-bg rounded-lg p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                To revolutionize interior spaces by providing innovative, high-quality products that combine
                aesthetics with functionality.
              </p>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg">
                To become the most trusted name in interior solutions, known for excellence, innovation,
                and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding gradient-bg text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Ready to transform your space? Contact us today for a consultation
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p>+91 XXX XXX XXXX</p>
            </div>

            <div className="text-center">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p>info@grandroyale.com</p>
            </div>

            <div className="text-center">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p>India</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105"
            >
              <FaWhatsapp className="mr-2 text-2xl" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-2">
            <span className="text-gold font-bold">Grand Royale Interior</span>
          </p>
          <p className="text-gray-400">
            Premium Interior Solutions © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

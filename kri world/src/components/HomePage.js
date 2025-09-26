import React, { useState, useEffect, useRef } from "react";
import { Menu, X, CheckCircle, XCircle } from "lucide-react";

const images = [
  "/slide1.jpeg",
  "/slide2.jpeg",
  "/slide3.jpeg",
  "/silde4.jpeg",
  "https://swadeshibiodiesel.com/images/about1.jpg",
];

export default function Homepage() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const sections = ["Home", "About", "Products", "Contact"];
  const sectionRefs = useRef({});

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-highlight nav on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 bg-white shadow-md fixed top-0 w-full z-50">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Swadeshee Biofuels Logo"
            className="h-10 w-20 rounded-full"
          />
          <h1 className="font-bold text-xl text-green-700">
            Swadeshee Biofuels
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-semibold text-gray-700">
          {sections.map((item) => (
            <li
              key={item}
              onClick={() =>
                sectionRefs.current[item].scrollIntoView({ behavior: "smooth" })
              }
              className={`cursor-pointer ${
                active === item
                  ? "text-green-700 border-b-2 border-green-700"
                  : "hover:text-green-700"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col space-y-2 py-4 px-6">
          {sections.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                active === item ? "text-green-700 font-bold" : "hover:text-green-700"
              }`}
              onClick={() => {
                setMenuOpen(false);
                sectionRefs.current[item].scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Slider */}
      <div
        ref={(el) => (sectionRefs.current["Home"] = el)}
        id="Home"
        className="mt-16 relative w-full h-[300px] md:h-[400px] overflow-hidden bg-black"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="About"
        ref={(el) => (sectionRefs.current["About"] = el)}
        className="relative bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white text-center py-20 md:py-16 px-4 md:px-6 overflow-hidden"
      >
        {/* Animated floating circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-green-400 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-500 rounded-full opacity-20 animate-bounce-slower"></div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Powering India with Cleaner, Greener Fuel
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 animate-fade-in-up animate-delay-200">
            Swadeshee Biodiesel – 100% Domestic, Eco-Friendly & Affordable
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-green-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-fade-in-up animate-delay-400"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Products */}
      <section
        id="Products"
        ref={(el) => (sectionRefs.current["Products"] = el)}
        className="max-w-6xl mx-auto py-4 px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[ /* ... same product cards code ... */ ]}
      </section>

      {/* Contact Section */}
      <section
        id="Contact"
        ref={(el) => (sectionRefs.current["Contact"] = el)}
        className="max-w-4xl mx-auto py-4 px-4 md:px-6 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6 text-sm sm:text-base">
          Have questions or want to partner with us? Let’s talk!
        </p>
        <p className="font-semibold">
          📍 1103, Buddha Heights, Sarnath, Varanasi – 221007
        </p>
        <p>📞 +91-9118444097 / +91-9118444087</p>
        <p>✉️ swadesheebiofuels@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 text-sm sm:text-base">
        © {new Date().getFullYear()} Swadeshee Biofuels Pvt. Ltd. – All Rights Reserved
      </footer>
    </div>
  );
}

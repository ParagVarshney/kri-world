// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#f7efe7] pt-36 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Text */}
        <div className="text-left">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-lg font-medium mb-4">
            Welcome to Kriworld - Innovating the Future
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Trusted IT <br className="hidden sm:block" />
            Solutions Partner
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
            At Kriworld, we are dedicated to transforming your ideas into
            reality through innovative technology solutions.
            <br />
            With our expertise in web development, mobile app development,
            digital marketing, and video production, we help businesses thrive
            in the digital era.
          </p>

          {/* Buttons with animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="tel:+91XXXXXXXXXX"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 transition"
            >
              Call Us Now
            </a>
            <a
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition"
            >
              Contact Now
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center  md:justify-end">
          <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[36rem] md:h-[36rem] rounded-full overflow-hidden shadow-xl">
            <img
              src="https://kriworld.com/assets/img/fresh-images/img-1.png"
              alt="Hero Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

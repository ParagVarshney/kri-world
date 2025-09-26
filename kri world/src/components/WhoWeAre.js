// WhoWeAre.jsx
import React from "react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="bg-[#eaf2ff] py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Who We Are
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
          
          {/* Left Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://kriworld.com/assets/img/fresh-images/img-3.png"
              alt="Team member working"
              className="w-[350px] sm:w-[400px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Center Text */}
          <div className="text-center lg:text-left md:pb-44">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Kriworld is a premier IT solutions provider committed to delivering
              cutting-edge technology services that drive growth and efficiency.
              Our team of skilled professionals works tirelessly to create bespoke
              solutions that meet your unique business needs. We pride ourselves
              on our ability to adapt to the ever-changing technological landscape,
              ensuring our clients stay ahead of the competition.
            </p>
          </div>

          {/* Right Small Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://kriworld.com/assets/img/fresh-images/img-2.png"
              alt="Team member working"
              className="w-[220px] sm:w-[250px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// AboutKriworld.jsx
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutKriworld() {
  return (
    <section className="bg-[#f3f4f7] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            About Kriworld
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Card (Image with overlay text) */}
          <div className="relative bg-black rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?s=612x612&w=0&k=20&c=oOKLdZJpcsrUbNrnGVf8TwoIdYud4mWoBkx1A3PdXI0="
              alt="AI and Innovation"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 mt-12 text-white">
              <h3 className="text-xl font-bold mb-3">Our Value</h3>
              <p className="text-sm leading-relaxed mb-2">
                <strong>Innovation:</strong> We are committed to innovation and
                continuously seek new ways to deliver value to our clients.
              </p>
              <p className="text-sm leading-relaxed mb-2">
                <strong>Integrity:</strong> We conduct our business with
                integrity and honesty, building trust with our clients and
                partners.
              </p>
              <p className="text-sm leading-relaxed mb-2">
                <strong>Collaboration:</strong> We believe in the power of
                collaboration and work closely with our clients to achieve their
                goals.
              </p>
              <p className="text-sm leading-relaxed mb-2">
                <strong>Customer Focus:</strong> We put our clients at the
                center of everything we do, understanding their needs and
                delivering tailored solutions.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Excellence:</strong> We strive for excellence in
                everything we do, ensuring the highest quality of service and
                solutions.
              </p>
            </div>
            {/* Arrow with hover effect */}
            <div className="absolute top-4 right-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-green-800 group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Right Side (Mission + Vision) */}
          <div className="flex flex-col gap-6">
            {/* Mission Card */}
            <div className="bg-white p-6 rounded-xl shadow-md relative group">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our mission is to empower businesses with innovative technology
                solutions that drive success and growth. We aim to be a trusted
                partner for our clients, helping them navigate the complexities
                of the digital world and achieve their strategic goals.
              </p>
              <div className="absolute top-4 right-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow transition-all duration-300 group-hover:bg-green-800 group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-6 rounded-xl shadow-md relative group">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our vision is to be a global leader in IT solutions, recognized
                for our excellence, innovation, and client satisfaction. We
                strive to create a positive impact on businesses and communities
                through our technology services.
              </p>
              <div className="absolute top-4 right-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow transition-all duration-300 group-hover:bg-green-800 group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

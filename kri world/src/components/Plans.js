import React from "react";
import { ArrowUpRight } from "lucide-react";

const plans = [
  {
    title: "Web Development",
    price: "₹10,000",
    features: [
      "1 year support",
      "Responsive Website",
      "1 year domain & Hosting",
      "Free SSL",
    ],
  },
  {
    title: "App Development",
    price: "₹30,000",
    features: ["1 year support", "UI/UX design", "Application Security", "Free SSL"],
  },
  {
    title: "Digital Marketing",
    price: "₹15,000",
    features: [
      "Pay-Per-Click Advertising (PPC)",
      "Social media marketing",
      "Analytics & Reporting",
      "Content Marketing",
    ],
  },
];

const Plans = () => {
  return (
    <section className="py-8 px-6 bg-blue-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Plans
      </h2>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>

            {/* Price */}
            <p className="text-lg font-medium mb-4">
              Starting from <span className="font-bold text-green-600">{plan.price}</span>
            </p>

            {/* Features */}
            <ul className="text-gray-700 text-lg space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex justify-center items-center gap-2">
                  ✓ {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="flex items-center ml-20  gap-2 px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition">
              Explore Now <ArrowUpRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;


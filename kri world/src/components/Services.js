import React from "react";
import { Search, CircleDot, Megaphone, Video } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Search size={40} />,
    description:
      "Build a powerful online presence with our comprehensive web development services. We specialize in creating custom websites, e-commerce platforms, and content management systems that are user-friendly, responsive, and visually stunning.",
    features: [
      "Custom website design",
      "E-commerce development",
      "CMS development",
      "Website maintenance and support",
      "SEO optimization",
    ],
  },
  {
    title: "Mobile App Development",
    icon: <CircleDot size={40} />,
    description:
      "Reach your audience on the go with our top-notch mobile app development services. We develop high-performance iOS, Android, and cross-platform apps tailored to your specific requirements.",
    features: [
      "iOS and Android app development",
      "Cross-platform app development",
      "Progressive web app (PWA) development",
      "App maintenance and support",
      "UI/UX design",
    ],
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone size={40} />,
    description:
      "Enhance your online visibility and drive engagement with our strategic digital marketing services. From SEO and PPC to social media and content marketing, we cover all aspects of digital marketing to help achieve your business goals.",
    features: [
      "Search engine optimization (SEO)",
      "Pay-per-click (PPC) advertising",
      "Social media marketing",
      "Content marketing",
      "Email marketing",
      "Analytics and reporting",
    ],
  },
  {
    title: "Video Development",
    icon: <Video size={40} />,
    description:
      "Tell your story through captivating visuals with our professional video production services. Whether you need commercials, explainers, or training videos, we deliver high-quality videos that resonate with your audience.",
    features: [
      "Corporate video production",
      "Commercial video production",
      "Animated explainer videos",
      "Social media video content",
      "Training and educational videos",
      "Post-production editing",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-4 px-6 bg-blue-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-md rounded-xl p-6 min-h-[420px] 
                       transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-300 hover:text-white"
          >
            {/* Icon */}
            <div className="flex items-center justify-start mb-4 text-blue-600 group-hover:text-white">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-lg mb-4 flex-grow">{service.description}</p>

            {/* Features Heading */}
            <h4 className="text-lg font-semibold mb-2">Features:</h4>

            {/* Features List */}
            <ul className="text-lg space-y-1">
              {service.features.map((feature, i) => (
                <li key={i}>- {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

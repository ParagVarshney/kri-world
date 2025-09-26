import { motion } from "framer-motion";
import { Lightbulb, Users, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-7 h-7 text-pink-500" />,
    title: "Expertise and Experience",
    desc: "With years of experience in the IT industry, we have the knowledge and skills to deliver exceptional results. Our team stays updated with the latest trends and technologies to provide you with the best possible solutions.",
  },
  {
    icon: <Users className="w-7 h-7 text-pink-500" />,
    title: "Client-Centric Approach",
    desc: "We believe in building long-term relationships with our clients. Our client-centric approach ensures that we understand your business needs and deliver solutions that exceed your expectations.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-pink-500" />,
    title: "Innovative Solutions",
    desc: "Innovation is at the heart of everything we do. We leverage the latest technologies and creative thinking to develop solutions that give you a competitive edge.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-pink-500" />,
    title: "Transparent Process",
    desc: "We maintain open communication and provide regular updates throughout the project lifecycle. Our transparent process ensures you are always informed and involved.",
  },
];

export default function WhyChooseKriworld() {
  return (
    <section className="bg-sky-100 py-8 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center md:mb-40">
        <img
          src="https://kriworld.com/assets/img/fresh-images/img-4.png" // Replace with your image path
          alt="Kritika"
          className="rounded-2xl shadow-lg object-cover w-[90%] md:w-[700px] md:h-[1000px]"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/3 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Why Choose Kriworld?
        </h2>
        <div className="grid md:grid-cols-1 gap-6 ">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center h-[320px] w-full"
            >
              <div className="bg-pink-100 p-4 rounded-full mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-lg mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



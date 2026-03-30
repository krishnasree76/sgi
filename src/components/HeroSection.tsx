import { motion } from "framer-motion";
import { Clock, Globe, Award } from "lucide-react";
import BlurTextAnimation from "@/components/ui/blur-text-animation";
import heroImg from "@/assets/hero-logistics.jpg";

// const stats = [
//   { icon: Award, label: "25+ Years", desc: "Experience" },
//   { icon: Clock, label: "24/7", desc: "Service" },
//   { icon: Globe, label: "Global", desc: "Coverage" },
// ];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16">
    
    {/* Background Image */}
    <img
      src={heroImg}
      alt="Container port"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative container mx-auto px-4 lg:px-8 py-20">

      {/* TEXT AREA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        {/* 🔥 Blur Animated Heading */}
        <BlurTextAnimation
          text="Integrated Logistics Solutions That Move Your Business Forward"
          fontSize="text-4xl sm:text-5xl lg:text-6xl"
          textColor="text-white"
        />

        <p className="text-lg sm:text-xl text-white/80 mb-8 mt-6 max-w-2xl">
          25+ Years of Expertise in Door-to-Door, Air, Ocean & Temperature-Controlled Logistics
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#contact"
            className="px-7 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
            Get a Quote
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition"
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      {/* STATS */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-3 max-w-lg gap-4"
      >
        {stats.map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
          >
            <Icon className="mx-auto mb-2 text-red-400" size={28} />
            <p className="font-bold text-white text-lg">{label}</p>
            <p className="text-white/70 text-sm">{desc}</p>
          </div>
        ))}
      </motion.div> */}

    </div>
  </section>
);

export default HeroSection;
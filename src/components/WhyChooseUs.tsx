import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck, Globe } from "lucide-react";

const points = [
  { icon: Award, title: "25+ Years Experience", desc: "Industry-leading expertise you can rely on." },
  { icon: Clock, title: "24/7 Operations", desc: "Round-the-clock support and logistics management." },
  { icon: ShieldCheck, title: "Reliable & Secure", desc: "Your cargo is safe with our proven track record." },
  { icon: Globe, title: "Global Network", desc: "Connections across continents for seamless delivery." },
];

const WhyChooseUs = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Our Strengths</p>
      <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mb-12">Why Choose SGI Logistics</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Icon className="text-steel" size={30} />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

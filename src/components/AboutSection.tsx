import { motion } from "framer-motion";
import aboutImg from "@/assets/about-logistics.jpg";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src={aboutImg} alt="Logistics warehouse" width={1280} height={854} loading="lazy" className="rounded-2xl shadow-card w-full object-cover aspect-[3/2]" />
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mb-6">
            About <span className="text-steel">SGI Logistics</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            With over 25 years of industry expertise, SGI Logistics provides complete logistics solutions tailored to your business needs. From standard shipments to temperature-controlled reefer containers, we ensure seamless operations, faster transit times, and reliable delivery.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {["Door-to-Door", "Reefer Containers", "Air Freight", "Ocean Freight"].map((s) => (
              <div key={s} className="flex items-center gap-2 text-foreground font-medium">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {s}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

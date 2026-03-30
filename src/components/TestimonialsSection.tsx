import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", review: "SGI Logistics has been our trusted partner for over 5 years. Their reefer container service is exceptional — our perishable goods always arrive in perfect condition.", rating: 5 },
  { name: "Priya Menon", review: "The 24/7 support and real-time tracking give us complete peace of mind. Highly recommend SGI for anyone looking for reliable logistics.", rating: 5 },
  { name: "Anil Kapoor", review: "Switching to SGI for our ocean freight cut our costs by 20% while improving transit times. A truly professional team.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Testimonials</p>
      <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-card text-left"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">"{t.review}"</p>
            <p className="font-heading font-bold text-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

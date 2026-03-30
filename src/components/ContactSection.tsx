import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">Contact Us</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-steel flex items-center justify-center shrink-0">
                  <Phone className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground mb-1">Phone</p>
                  <a href="tel:9494922080" className="text-muted-foreground hover:text-primary transition-colors block">9494922080</a>
                  <a href="tel:9849356197" className="text-muted-foreground hover:text-primary transition-colors block">9849356197</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-steel flex items-center justify-center shrink-0">
                  <Mail className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground mb-1">Email</p>
                  <a href="mailto:contact.sgilogistics@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">contact.sgilogistics@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-steel flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">6-3-852/2/B4, Plot No. 10, Aparajitha Colony, Ameerpet, Hyderabad, Telangana&nbsp;-&nbsp;500016</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl shadow-card p-8 space-y-5"
          >
            <input required type="text" placeholder="Your Name" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input required type="email" placeholder="Your Email" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <textarea required rows={4} placeholder="Your Message" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button type="submit" className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-red-brand-dark transition-colors">
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Phone, Mail, MapPin } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="gradient-steel py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-primary-foreground/80">
        <div>
          <h3 className="font-heading font-bold text-primary-foreground text-lg mb-3">SGI Logistics</h3>
          <p className="text-sm leading-relaxed">Integrated logistics solutions with 25+ years of expertise. Moving your business forward, every day.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm hover:text-primary-foreground transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-3">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm">
              <Phone size={14} className="mt-0.5 shrink-0 text-primary-foreground" />
              <span>
                <a href="tel:9494922080" className="hover:text-primary-foreground transition-colors">9494922080</a>,{" "}
                <a href="tel:9849356197" className="hover:text-primary-foreground transition-colors">9849356197</a>
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <Mail size={14} className="mt-0.5 shrink-0 text-primary-foreground" />
              <a href="mailto:contact.sgilogistics@gmail.com" className="hover:text-primary-foreground transition-colors">contact.sgilogistics@gmail.com</a>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary-foreground" />
              <span>6-3-852/2/B4, Plot No. 10, Aparajitha Colony, Ameerpet, Hyderabad, Telangana - 500016</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-3">Business Hours</h4>
          <p className="text-sm">24 / 7 — Always operational</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} SGI Logistics. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

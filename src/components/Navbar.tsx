// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const links = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
//       <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
//         <a href="#home" className="flex items-center gap-2">
//           {/* <div className="w-9 h-9 rounded-lg gradient-steel flex items-center justify-center">
//             <span className="text-primary-foreground font-heading font-extrabold text-sm">SGI</span>
//           </div> */}
//           <span className="font-heading font-bold text-lg text-foreground">
//             SGI <span className="text-steel">Logistics</span>
//           </span>
//         </a>

//         {/* Desktop */}
//         <div className="hidden md:flex items-center gap-8">
//           {links.map((l) => (
//             <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
//               {l.label}
//             </a>
//           ))}
//           <a href="#contact" className="px-5 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-red-brand-dark transition-colors">
//             Get Quote
//           </a>
//         </div>

//         {/* Mobile toggle */}
//         <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="md:hidden overflow-hidden bg-card border-b border-border"
//           >
//             <div className="flex flex-col gap-4 px-6 py-6">
//               {links.map((l) => (
//                 <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground font-medium">
//                   {l.label}
//                 </a>
//               ))}
//               <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm text-center">
//                 Get Quote
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // ✅ Smooth scroll with offset
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        
        {/* LOGO */}
        <button onClick={() => handleScroll("home")} className="flex items-center gap-2">
          <span className="font-bold text-lg text-slate-900">
            SGI <span className="text-red-600">Logistics</span>
          </span>
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleScroll(l.href)}
              className="text-sm font-medium text-slate-600 hover:text-red-600 transition"
            >
              {l.label}
            </button>
          ))}

          <button
            onClick={() => handleScroll("contact")}
            className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition"
          >
            Get Quote
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-200"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleScroll(l.href)}
                  className="text-slate-800 font-medium text-left"
                >
                  {l.label}
                </button>
              ))}

              <button
                onClick={() => handleScroll("contact")}
                className="px-5 py-2 rounded-lg bg-red-600 text-white font-semibold text-sm text-center"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
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

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-bold text-xl tracking-tight text-slate-900">
              SGI <span className="text-blue-800 font-semibold italic">Logistics</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-lg bg-red-600 text-white font-bold text-sm hover:bg-red-700 shadow-lg shadow-red-200 transition-all"
            >
              Get Quote
            </a>
          </div>

          {/* MOBILE TOGGLE - Enhanced for Touch */}
          <button 
            className="md:hidden p-2 -mr-2 text-slate-900 focus:outline-none" 
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} strokeWidth={2.5} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110] md:hidden"
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[120] shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-50">
                <span className="font-bold text-lg text-slate-900">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-slate-600"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 text-lg font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-all"
                  >
                    {l.label}
                    <ChevronRight size={18} className="text-slate-300" />
                  </a>
                ))}
              </div>

              <div className="mt-auto p-6 border-t border-slate-50">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 bg-red-600 text-white font-bold text-center rounded-xl shadow-lg shadow-red-200"
                >
                  Get a Free Quote
                </a>
                <p className="text-center text-slate-400 text-xs mt-6">
                  Available 24/7 for your logistics needs.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
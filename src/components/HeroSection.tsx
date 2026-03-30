
// // // import React, { useEffect, useRef } from 'react';
// // // import { motion } from "framer-motion";
// // // import { Clock, Globe, Award } from "lucide-react";
// // // import heroImg from "@/assets/hero-logistics.jpg"; // Keep your local asset

// // // const stats = [
// // //   { icon: Award, label: "25+ Years", desc: "Experience" },
// // //   { icon: Clock, label: "24/7", desc: "Service" },
// // //   { icon: Globe, label: "Global", desc: "Coverage" },
// // // ];

// // // const LogisticsHero = () => {
// // //   const canvasRef = useRef<HTMLDivElement>(null);
// // //   const layersRef = useRef<HTMLDivElement[]>([]);

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     if (!canvas) return;

// // //     const handleMouseMove = (e: MouseEvent) => {
// // //       const x = (window.innerWidth / 2 - e.pageX) / 25;
// // //       const y = (window.innerHeight / 2 - e.pageY) / 25;
// // //       canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

// // //       layersRef.current.forEach((layer, index) => {
// // //         if (!layer) return;
// // //         const depth = (index + 1) * 20;
// // //         const moveX = x * (index + 1) * 0.3;
// // //         const moveY = y * (index + 1) * 0.3;
// // //         layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
// // //       });
// // //     };

// // //     // Entrance Animation
// // //     canvas.style.opacity = '0';
// // //     canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    
// // //     const timeout = setTimeout(() => {
// // //       canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
// // //       canvas.style.opacity = '1';
// // //       canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
// // //     }, 300);

// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => {
// // //       window.removeEventListener('mousemove', handleMouseMove);
// // //       clearTimeout(timeout);
// // //     };
// // //   }, []);

// // //   return (
// // //     <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
// // //       <style>{`
// // //         .viewport-3d { perspective: 2000px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: absolute; inset: 0; }
// // //         .canvas-3d { position: relative; width: 900px; height: 550px; transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
// // //         .layer { position: absolute; inset: 0; border: 1px solid rgba(255, 255, 255, 0.1); background-size: cover; background-position: center; transition: transform 0.5s ease; border-radius: 8px; }
// // //         .layer-1 { background-image: url('${heroImg}'); filter: brightness(0.8); }
// // //         .layer-2 { background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200'); opacity: 0.4; mix-blend-mode: overlay; }
// // //         .layer-3 { background-image: url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200'); opacity: 0.2; mix-blend-mode: screen; }
// // //         .contours { position: absolute; width: 150%; height: 150%; top: -25%; left: -25%; background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 60px, rgba(255,255,255,0.03) 61px, transparent 62px); transform: translateZ(100px); pointer-events: none; }
// // //       `}</style>

// // //       {/* 3D Background Layer */}
// // //       <div className="viewport-3d">
// // //         <div className="canvas-3d" ref={canvasRef}>
// // //           <div className="layer layer-1" ref={(el) => (layersRef.current[0] = el!)}></div>
// // //           <div className="layer layer-2" ref={(el) => (layersRef.current[1] = el!)}></div>
// // //           <div className="layer layer-3" ref={(el) => (layersRef.current[2] = el!)}></div>
// // //           <div className="contours"></div>
// // //         </div>
// // //       </div>

// // //       {/* Content Overlay */}
// // //       <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col items-start pointer-events-none">
// // //         <motion.div
// // //           initial={{ opacity: 0, x: -50 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           className="max-w-3xl pointer-events-auto"
// // //         >
// // //           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6 drop-shadow-2xl">
// // //             Integrated Logistics <br />
// // //             <span className="text-red-500">Solutions</span>
// // //           </h1>
// // //           <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl bg-black/20 backdrop-blur-sm p-2 rounded">
// // //             25+ Years of Expertise in Door-to-Door, Air, Ocean & Temperature-Controlled Logistics
// // //           </p>
          
// // //           <div className="flex flex-wrap gap-4 mb-14">
// // //             <a href="#contact" className="px-7 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all transform hover:-translate-y-1">
// // //               Get a Quote
// // //             </a>
// // //             <a href="#contact" className="px-7 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 backdrop-blur-md transition-all">
// // //               Contact Us
// // //             </a>
// // //           </div>
// // //         </motion.div>

// // //         {/* Stats Section */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8, delay: 0.4 }}
// // //           className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl gap-4 pointer-events-auto"
// // //         >
// // //           {stats.map(({ icon: Icon, label, desc }) => (
// // //             <div key={label} className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-red-500/50 transition-colors">
// // //               <Icon className="mb-2 text-red-500" size={24} />
// // //               <p className="font-bold text-white text-lg">{label}</p>
// // //               <p className="text-gray-400 text-sm">{desc}</p>
// // //             </div>
// // //           ))}
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default LogisticsHero;
// "use client";

// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Clock, Globe, Award } from "lucide-react";
// import heroImg from "@/assets/hero-logistics.jpg";

// const stats = [
//   { icon: Award, label: "25+ Years", desc: "Experience" },
//   { icon: Clock, label: "24/7", desc: "Service" },
//   { icon: Globe, label: "Global", desc: "Coverage" },
// ];

// const LogisticsHero = () => {
//   const canvasRef = useRef<HTMLDivElement>(null);
//   const layersRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (window.innerWidth / 2 - e.pageX) / 25;
//       const y = (window.innerHeight / 2 - e.pageY) / 25;

//       canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

//       layersRef.current.forEach((layer, index) => {
//         if (!layer) return;
//         const depth = (index + 1) * 20;
//         const moveX = x * (index + 1) * 0.3;
//         const moveY = y * (index + 1) * 0.3;

//         layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
//       });
//     };

//     canvas.style.opacity = "0";
//     canvas.style.transform = "rotateX(90deg) rotateZ(0deg) scale(0.8)";

//     const timeout = setTimeout(() => {
//       canvas.style.transition =
//         "all 2.5s cubic-bezier(0.16, 1, 0.3, 1)";
//       canvas.style.opacity = "1";
//       canvas.style.transform = "rotateX(55deg) rotateZ(-25deg) scale(1)";
//     }, 300);

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       clearTimeout(timeout);
//     };
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center">
      
//       <style>{`
//         .viewport-3d {
//           perspective: 2000px;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: absolute;
//           inset: 0;
//         }

//         .canvas-3d {
//           position: relative;
//           width: 900px;
//           height: 550px;
//           transform-style: preserve-3d;
//         }

//         .layer {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           border-radius: 12px;
//         }

//         /* Main image */
//         .layer-1 {
//           background-image: url('${heroImg}');
//           filter: brightness(0.95);
//         }

//         /* Light overlay instead of dark */
//         .layer-2 {
//           background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200');
//           opacity: 0.15;
//         }

//         .layer-3 {
//           background-image: url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200');
//           opacity: 0.1;
//         }
//       `}</style>

//       {/* 3D Background */}
//       <div className="viewport-3d">
//         <div className="canvas-3d" ref={canvasRef}>
//           <div className="layer layer-1" ref={(el) => (layersRef.current[0] = el!)}></div>
//           <div className="layer layer-2" ref={(el) => (layersRef.current[1] = el!)}></div>
//           <div className="layer layer-3" ref={(el) => (layersRef.current[2] = el!)}></div>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col items-start">
        
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl"
//         >
//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6">
//             Integrated Logistics <br />
//             <span className="text-red-600">Solutions</span>
//           </h1>

//           <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl">
//             25+ Years of Expertise in Door-to-Door, Air, Ocean & Temperature-Controlled Logistics
//           </p>

//           <div className="flex flex-wrap gap-4 mb-14">
//             <a
//               href="#contact"
//               className="px-7 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all"
//             >
//               Get a Quote
//             </a>

//             <a
//               href="#contact"
//               className="px-7 py-3 rounded-lg border border-slate-300 text-slate-800 font-semibold hover:bg-slate-100 transition-all"
//             >
//               Contact Us
//             </a>
//           </div>
//         </motion.div>

//         {/* STATS */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl gap-4"
//         >
//           {stats.map(({ icon: Icon, label, desc }) => (
//             <div
//               key={label}
//               className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition"
//             >
//               <Icon className="mb-2 text-red-500" size={24} />
//               <p className="font-bold text-slate-900 text-lg">{label}</p>
//               <p className="text-slate-500 text-sm">{desc}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default LogisticsHero;
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Globe, Award, MessageCircle } from "lucide-react";

// Replace with your actual asset path
const heroImg = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200";

const stats = [
  { icon: Award, label: "25+ Years", desc: "Experience" },
  { icon: Clock, label: "24/7", desc: "Service" },
  { icon: Globe, label: "Global", desc: "Coverage" },
];

const LogisticsHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 30;
      const y = (window.innerHeight / 2 - e.pageY) / 30;
      canvas.style.transform = `rotateX(${50 + y}deg) rotateZ(${-20 + x}deg)`;
    };

    // Initial animation state
    canvas.style.transform = "rotateX(70deg) rotateZ(0deg) translateY(100px)";
    canvas.style.opacity = "0";

    const timeout = setTimeout(() => {
      canvas.style.transition = "all 1.5s cubic-bezier(0.2, 1, 0.3, 1)";
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(55deg) rotateZ(-25deg)";
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden pt-20">
      {/* Header Simulation */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md">
        <div className="text-2xl font-bold text-slate-900">
          SGI <span className="text-blue-900 font-medium">Logistics</span>
        </div>
        <div className="space-y-1.5 cursor-pointer">
          <div className="w-6 h-0.5 bg-slate-900"></div>
          <div className="w-6 h-0.5 bg-slate-900"></div>
          <div className="w-6 h-0.5 bg-slate-900"></div>
        </div>
      </nav>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-xl pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl font-semibold text-slate-700 leading-snug mb-8"
          >
            25+ Years of Expertise in Door-to-Door, Air, Ocean & Temperature-Controlled Logistics
          </motion.h1>

          <div className="flex gap-4 mb-12">
            <button className="px-8 py-4 bg-[#E11D48] text-white font-bold rounded-xl shadow-lg shadow-red-200 hover:bg-red-700 transition-all">
              Get a Quote
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-800 font-bold rounded-xl hover:bg-slate-50 transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* STATS CARDS - Refined to match image */}
        <div className="flex flex-col gap-4 max-w-sm pb-20">
          {stats.map(({ icon: Icon, label, desc }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * idx }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-start gap-1"
            >
              <Icon className="text-red-500 mb-2" size={28} />
              <h3 className="text-2xl font-extrabold text-slate-900">{label}</h3>
              <p className="text-slate-500 font-medium">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3D Background Image Perspective */}
      <div className="absolute top-1/4 right-[-10%] w-[120%] h-[600px] pointer-events-none perspective-[2000px] z-10 opacity-60">
        <div 
          ref={canvasRef}
          className="w-full h-full bg-cover bg-center rounded-[40px] shadow-2xl transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-[40px]" />
        </div>
      </div>

      {/* WhatsApp Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#22C55E] p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <MessageCircle className="text-white fill-current" size={32} />
        </div>
      </div>
    </section>
  );
};

export default LogisticsHero;
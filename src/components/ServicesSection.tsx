// // // import { motion } from "framer-motion";
// // // import { Truck, Thermometer, Plane, Ship } from "lucide-react";

// // // const services = [
// // //   { icon: Truck, title: "Door-to-Door Logistics", desc: "End-to-end delivery from origin to destination with full tracking and transparency." },
// // //   { icon: Thermometer, title: "Reefer Containers", desc: "Temperature-controlled logistics for sensitive and perishable goods worldwide." },
// // //   { icon: Plane, title: "Air Freight", desc: "Fast and secure air cargo services for time-critical shipments globally." },
// // //   { icon: Ship, title: "Ocean Freight", desc: "Cost-effective global shipping via optimized sea routes and carriers." },
// // // ];

// // // const ServicesSection = () => (
// // //   <section id="services" className="py-20 lg:py-28 bg-muted">
// // //     <div className="container mx-auto px-4 lg:px-8 text-center">
// // //       <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">What We Offer</p>
// // //       <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground mb-12">Our Services</h2>
// // //       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {services.map(({ icon: Icon, title, desc }, i) => (
// // //           <motion.div
// // //             key={title}
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5, delay: i * 0.1 }}
// // //             className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-left"
// // //           >
// // //             <div className="w-14 h-14 rounded-xl gradient-steel flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
// // //               <Icon className="text-primary-foreground" size={26} />
// // //             </div>
// // //             <h3 className="font-heading font-bold text-foreground text-lg mb-2">{title}</h3>
// // //             <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   </section>
// // // );

// // // export default ServicesSection;
// // "use client";

// // import React, { useState } from 'react';
// // import { Truck, Thermometer, Plane, Ship } from "lucide-react";
// // import { ServiceCard } from "@/components/ui/service-cards";

// // const services = [
// //   { icon: Truck, title: "Door-to-Door", desc: "End-to-end delivery from origin to destination with full tracking and transparency." },
// //   { icon: Thermometer, title: "Reefer Containers", desc: "Temperature-controlled logistics for sensitive and perishable goods worldwide." },
// //   { icon: Plane, title: "Air Freight", desc: "Fast and secure air cargo services for time-critical shipments globally." },
// //   { icon: Ship, title: "Ocean Freight", desc: "Cost-effective global shipping via optimized sea routes and carriers." },
// // ];

// // const ServicesSection = () => {
// //   // We handle up to 4 items now, so we need 4 position states
// //   const [positions, setPositions] = useState(["front", "middle", "back", "hidden"]);

// //   const handleShuffle = () => {
// //     setPositions((prev) => {
// //       const newPositions = [...prev];
// //       const last = newPositions.pop();
// //       if (last) newPositions.unshift(last);
// //       return newPositions;
// //     });
// //   };

// //   return (
// //     <section id="services" className="py-24 bg-slate-950 overflow-hidden min-h-[800px] flex items-center">
// //       <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
// //         {/* Left Side: Content */}
// //         <div className="text-left space-y-6">
// //           <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">What We Offer</p>
// //           <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
// //             Integrated Solutions <br /> For Global Trade
// //           </h2>
// //           <p className="text-slate-400 text-lg max-w-md">
// //             Our specialized fleet and global network ensure your cargo reaches its destination safely, on time, and within budget.
// //           </p>
// //           <div className="pt-4">
// //             <button 
// //               onClick={handleShuffle}
// //               className="px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-indigo-400 transition-colors"
// //             >
// //               Explore Next Service
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Side: Shuffle Cards */}
// //         <div className="relative h-[450px] w-full flex justify-center lg:justify-start lg:pl-12">
// //           {services.map((service, index) => (
// //             <ServiceCard
// //               key={service.title}
// //               {...service}
// //               handleShuffle={handleShuffle}
// //               position={positions[index]}
// //               index={index}
// //             />
// //           ))}
// //         </div>
        
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesSection;
// "use client";

// import React, { useState } from "react";
// import { Truck, Thermometer, Plane, Ship } from "lucide-react";
// import { ServiceCard } from "@/components/ui/service-cards";
// import door from "@/assets/services/door-to-door.jpg";
// import reefer from "@/assets/services/reefer.jpg";
// import air from "@/assets/services/air-freight.jpg";
// import ocean from "@/assets/services/ocean.jpg";
// // ✅ Add image for each service
// const services = [
//   {
//     icon: Truck,
//     title: "Door-to-Door",
//     desc: "End-to-end delivery from origin to destination with full tracking and transparency.",
//     image: door,
//   },
//   {
//     icon: Thermometer,
//     title: "Reefer Containers",
//     desc: "Temperature-controlled logistics for sensitive and perishable goods worldwide.",
//     image: reefer,
//   },
//   {
//     icon: Plane,
//     title: "Air Freight",
//     desc: "Fast and secure air cargo services for time-critical shipments globally.",
//     image: air,
//   },
//   {
//     icon: Ship,
//     title: "Ocean Freight",
//     desc: "Cost-effective global shipping via optimized sea routes and carriers.",
//     image: ocean,
//   },
// ];

// const ServicesSection = () => {
//   const [positions, setPositions] = useState([
//     "front",
//     "middle",
//     "back",
//     "hidden",
//   ]);

//   const handleShuffle = () => {
//     setPositions((prev) => {
//       const newPositions = [...prev];
//       const last = newPositions.pop();
//       if (last) newPositions.unshift(last);
//       return newPositions;
//     });
//   };

//   return (
//     <section
//       id="services"
//       className="py-24 bg-gradient-to-b from-slate-950 to-blue-950 overflow-hidden min-h-[800px] flex items-center"
//     >
//       <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="text-left space-y-6">
//           <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
//             What We Offer
//           </p>

//           <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
//             Integrated Logistics <br /> Solutions
//           </h2>

//           <p className="text-slate-300 text-lg max-w-md">
//             With 25+ years of expertise, we deliver reliable, fast, and
//             temperature-controlled logistics solutions across air, ocean, and
//             land.
//           </p>

//           <div className="pt-4">
//             <button
//               onClick={handleShuffle}
//               className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
//             >
//               Explore Next Service
//             </button>
//           </div>
//         </div>

//         {/* RIGHT CARDS */}
//         <div className="relative h-[450px] w-full flex justify-center lg:justify-start lg:pl-12">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={service.title}
//               {...service}
//               handleShuffle={handleShuffle}
//               position={positions[index]}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
"use client";

import React, { useState } from "react";
import { Truck, Thermometer, Plane, Ship } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-cards";

// ✅ Image imports (correct)
import door from "@/assets/services/door-to-door.jpg";
import reefer from "@/assets/services/reefer.jpg";
import air from "@/assets/services/air-freight.jpg";
import ocean from "@/assets/services/ocean.jpg";

const services = [
  {
    icon: Truck,
    title: "Door-to-Door",
    desc: "End-to-end delivery from origin to destination with full tracking and transparency.",
    image: door,
  },
  {
    icon: Thermometer,
    title: "Reefer Containers",
    desc: "Temperature-controlled logistics for sensitive and perishable goods worldwide.",
    image: reefer,
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Fast and secure air cargo services for time-critical shipments globally.",
    image: air,
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "Cost-effective global shipping via optimized sea routes and carriers.",
    image: ocean,
  },
];

const ServicesSection = () => {
  const [positions, setPositions] = useState([
    "front",
    "middle",
    "back",
    "hidden",
  ]);

  const handleShuffle = () => {
    setPositions((prev) => {
      const newPositions = [...prev];
      const last = newPositions.pop();
      if (last) newPositions.unshift(last);
      return newPositions;
    });
  };

  return (
    <section
      id="services"
      className="py-24 bg-white overflow-hidden min-h-[800px] flex items-center"
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* 🔥 LEFT CONTENT */}
        <div className="text-left space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
            What We Offer
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Integrated Logistics <br /> Solutions
          </h2>

          <p className="text-slate-600 text-lg max-w-md">
            With 25+ years of expertise, we deliver reliable, fast, and
            temperature-controlled logistics solutions across air, ocean, and land.
          </p>

          <div className="pt-4">
            <button
              onClick={handleShuffle}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
            >
              Explore Next Service
            </button>
          </div>
        </div>

        {/* 🔥 RIGHT CARDS */}
        <div className="relative h-[450px] w-full flex justify-center lg:justify-start lg:pl-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              handleShuffle={handleShuffle}
              position={positions[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
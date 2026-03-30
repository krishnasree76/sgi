// "use client";

// import * as React from 'react';
// import { motion } from 'framer-motion';
// import { LucideIcon } from 'lucide-react';
// import { cn } from "@/lib/utils";

// interface ServiceCardProps {
//   handleShuffle: () => void;
//   title: string;
//   desc: string;
//   icon: LucideIcon;
//   position: string;
//   index: number;
// }

// export function ServiceCard({ handleShuffle, title, desc, icon: Icon, position }: ServiceCardProps) {
//   const dragRef = React.useRef(0);
//   const isFront = position === "front";

//   return (
//     <motion.div
//       style={{
//         zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
//       }}
//       animate={{
//         rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
//         x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
//         scale: position === "front" ? 1 : 0.95
//       }}
//       drag={isFront ? "x" : false}
//       dragElastic={0.35}
//       dragConstraints={{ left: 0, right: 0 }}
//       onDragStart={(e: any) => {
//         dragRef.current = e.clientX || e.touches?.[0].clientX;
//       }}
//       onDragEnd={(e: any) => {
//         const endX = e.clientX || e.changedTouches?.[0].clientX;
//         if (dragRef.current - endX > 100) {
//           handleShuffle();
//         }
//         dragRef.current = 0;
//       }}
//       transition={{ duration: 0.35, type: "spring", stiffness: 150, damping: 20 }}
//       className={cn(
//         "absolute left-0 top-0 flex h-[420px] w-[320px] flex-col justify-between select-none rounded-2xl border border-white/10 p-8 shadow-2xl backdrop-blur-xl transition-colors",
//         isFront ? "cursor-grab active:cursor-grabbing bg-slate-800/90" : "bg-slate-900/40",
//       )}
//     >
//       <div className="space-y-6">
//         <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
//           <Icon className="text-indigo-400" size={32} />
//         </div>
//         <div className="space-y-2">
//           <h3 className="text-2xl font-bold text-white">{title}</h3>
//           <p className="text-slate-400 leading-relaxed">{desc}</p>
//         </div>
//       </div>
      
//       <div className="flex items-center justify-between border-t border-white/10 pt-4">
//         <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Logistics Core</span>
//         {isFront && (
//           <span className="text-[10px] text-slate-500 animate-pulse">Swipe Left to Shuffle →</span>
//         )}
//       </div>
//     </motion.div>
//   );
// };
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  handleShuffle: () => void;
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string; // ✅ NEW
  position: string;
  index: number;
}

export function ServiceCard({
  handleShuffle,
  title,
  desc,
  icon: Icon,
  image,
  position,
}: ServiceCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex:
          position === "front" ? "3" : position === "middle" ? "2" : "1",
      }}
      animate={{
        rotate:
          position === "front"
            ? "-4deg"
            : position === "middle"
            ? "0deg"
            : "4deg",
        x:
          position === "front"
            ? "0%"
            : position === "middle"
            ? "35%"
            : "70%",
        scale: position === "front" ? 1 : 0.92,
      }}
      drag={isFront ? "x" : false}
      dragElastic={0.35}
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={(e: any) => {
        dragRef.current = e.clientX || e.touches?.[0].clientX;
      }}
      onDragEnd={(e: any) => {
        const endX = e.clientX || e.changedTouches?.[0].clientX;
        if (dragRef.current - endX > 100) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{
        duration: 0.35,
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
      className={cn(
        "absolute left-0 top-0 h-[420px] w-[320px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer",
        isFront && "cursor-grab active:cursor-grabbing"
      )}
    >
      {/* 🔥 Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 Overlay (Theme based) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />

      {/* 🔥 Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
        
        {/* TOP ICON */}
        <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center backdrop-blur-md border border-red-400/20">
          <Icon className="text-red-400" size={28} />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-xs uppercase tracking-widest text-red-400">
            SGI Logistics
          </span>

          {isFront && (
            <span className="text-[10px] text-slate-400 animate-pulse">
              Swipe →
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
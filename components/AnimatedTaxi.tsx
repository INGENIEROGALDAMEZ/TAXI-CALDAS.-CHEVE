import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedTaxi = () => {
  return (
    <div className="relative w-64 h-32 md:w-96 md:h-48 overflow-hidden">
      {/* Motion wrapper to make the taxi drive in */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="w-full h-full relative"
      >
        <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-2xl">
          {/* Body */}
          <path d="M10,60 L20,40 L50,40 L70,20 L130,20 L150,40 L190,40 L190,70 L10,70 Z" fill="#F7C948" stroke="#F7C948" strokeWidth="2" />
          
          {/* Roof Light (Taxi Sign) */}
          <rect x="90" y="10" width="30" height="10" rx="2" fill="#111" />
          <text x="94" y="18" fontFamily="sans-serif" fontSize="6" fill="#F7C948" fontWeight="bold">TAXI</text>
          
          {/* Windows */}
          <path d="M55,42 L72,25 L100,25 L100,42 Z" fill="#111" />
          <path d="M105,42 L105,25 L125,25 L145,42 Z" fill="#111" />
          
          {/* Stripe */}
          <rect x="10" y="55" width="180" height="4" fill="#111" />
          <rect x="10" y="56" width="180" height="2" fill="#F7C948" rx="1" />
          
          {/* Wheels (Animated) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            style={{ originX: "40px", originY: "70px" }}
          >
             <circle cx="40" cy="70" r="12" fill="#111" />
             <circle cx="40" cy="70" r="6" fill="#333" />
             <rect x="38" y="60" width="4" height="20" fill="#666" rx="1" />
             <rect x="30" y="68" width="20" height="4" fill="#666" rx="1" />
          </motion.g>

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            style={{ originX: "160px", originY: "70px" }}
          >
             <circle cx="160" cy="70" r="12" fill="#111" />
             <circle cx="160" cy="70" r="6" fill="#333" />
             <rect x="158" y="60" width="4" height="20" fill="#666" rx="1" />
             <rect x="150" y="68" width="20" height="4" fill="#666" rx="1" />
          </motion.g>
        </svg>

        {/* Speed lines */}
        <motion.div 
           className="absolute top-1/2 -left-10 w-20 h-0.5 bg-taxi-yellow opacity-50"
           animate={{ x: [0, -100], opacity: [0.5, 0] }}
           transition={{ repeat: Infinity, duration: 0.5 }}
        />
        <motion.div 
           className="absolute top-1/4 -left-16 w-32 h-0.5 bg-white opacity-20"
           animate={{ x: [0, -150], opacity: [0.2, 0] }}
           transition={{ repeat: Infinity, duration: 0.7, delay: 0.1 }}
        />
      </motion.div>
    </div>
  );
};
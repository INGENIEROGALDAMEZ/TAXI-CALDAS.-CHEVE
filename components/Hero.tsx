import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Phone } from 'lucide-react';
import { AnimatedTaxi } from './AnimatedTaxi';
import { HERO_VIDEO_URL } from '../constants';

export const Hero = () => {
  // Configuración de difusión en negro (0.0 a 1.0)
  const [overlayOpacity] = useState(0.6); 

  const scrollToRates = () => {
    const el = document.getElementById('rates');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        {/* Fallback color if video fails */}
        <div className="absolute inset-0 bg-neutral-900" />
      </video>

      {/* Black Overlay (Difusión) */}
      <div 
        className="absolute inset-0 z-10 bg-black" 
        style={{ opacity: overlayOpacity }} 
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full pt-20">
        
        {/* Left Text */}
        <div className="text-left max-w-2xl space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-taxi-yellow font-bold tracking-widest text-sm uppercase mb-2 block">
              Servicio Premium 24/7
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Galicia <span className="text-taxi-yellow">Lux</span> Taxi
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-light"
          >
            Experimenta el transporte clásico con la eficiencia moderna.
            Elegancia en cada kilómetro por toda Galicia.
          </motion.p>

          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex gap-4"
          >
            <button className="bg-taxi-yellow text-taxi-black font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors flex items-center gap-2">
              <Phone size={20} />
              Llamar Ahora
            </button>
            <button 
              onClick={scrollToRates}
              className="border border-white/30 text-white py-3 px-8 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Ver Tarifas
            </button>
          </motion.div>
        </div>

        {/* Right Animated Taxi */}
        <div className="mt-12 md:mt-0 relative">
          <AnimatedTaxi />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-20 text-white/50 cursor-pointer"
        onClick={scrollToRates}
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
};
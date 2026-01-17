import React from 'react';
import { motion } from 'framer-motion';
import { CITIES } from '../constants';
import { MapPin } from 'lucide-react';

export const Map = () => {
  return (
    <section className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Cobertura <span className="text-taxi-yellow">Nacional</span>,<br/>
              Corazón en <span className="text-taxi-yellow">Galicia</span>.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Operamos en toda la península con nuestra red de colaboradores premium. 
              Sin embargo, nuestra propia flota está estratégicamente posicionada en las principales ciudades de Galicia para garantizar tiempos de respuesta mínimos.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-taxi-yellow/30 pb-2 inline-block">
                Puntos Principales
              </h4>
              <ul className="space-y-2">
                {CITIES.filter(c => c.isGalicia).map(city => (
                  <li key={city.name} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-taxi-yellow animate-pulse" />
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="lg:col-span-2 relative h-[500px] bg-taxi-black rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            {/* Map Grid Background */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ 
                   backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }} 
            />

            {/* Simulated Spain Shape (Abstract) */}
            <div className="absolute inset-0 m-8 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                    <path d="M20,10 L70,10 L90,40 L80,90 L40,95 L10,80 L5,30 Z" fill="#333" />
                </svg>
            </div>

            {/* City Markers */}
            {CITIES.map((city) => (
              <motion.div
                key={city.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: `${city.y}%`, left: `${city.x}%` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Radar Ripple Effect for Galicia */}
                {city.isGalicia && (
                   <>
                    <motion.div 
                      className="absolute -inset-4 rounded-full border border-taxi-yellow/50"
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <motion.div 
                      className="absolute -inset-8 rounded-full border border-taxi-yellow/30"
                      animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    />
                   </>
                )}

                <div className={`relative flex flex-col items-center`}>
                    <MapPin 
                        size={city.isGalicia ? 32 : 24} 
                        className={`${city.isGalicia ? 'text-taxi-yellow fill-taxi-yellow' : 'text-gray-600'} transition-colors duration-300`} 
                    />
                    <span className={`mt-2 text-xs font-bold ${city.isGalicia ? 'text-white' : 'text-gray-500'} bg-black/80 px-2 py-1 rounded backdrop-blur-sm`}>
                        {city.name}
                    </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
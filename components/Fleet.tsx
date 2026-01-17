import React from 'react';
import { motion } from 'framer-motion';
import { FLEET } from '../constants';
import { Users, Briefcase } from 'lucide-react';

export const Fleet = () => {
  return (
    <section className="py-24 bg-taxi-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-taxi-gray/20 -skew-x-12 transform origin-top-right translate-x-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Nuestra <span className="text-taxi-yellow">Flota</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vehículos seleccionados para garantizar tu comodidad y seguridad. 
            Desde el clásico urbano hasta el confort ejecutivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-taxi-gray rounded-xl overflow-hidden border border-white/5 hover:border-taxi-yellow/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-taxi-gray to-transparent z-10" />
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-taxi-yellow text-taxi-black text-xs font-bold px-2 py-1 rounded">
                      x{car.priceFactor} Tarifa
                    </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-12">{car.description}</p>
                
                <div className="flex items-center justify-between text-gray-300 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-taxi-yellow" />
                    <span>{car.passengers} Pasajeros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-taxi-yellow" />
                    <span>{car.luggage} Maletas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
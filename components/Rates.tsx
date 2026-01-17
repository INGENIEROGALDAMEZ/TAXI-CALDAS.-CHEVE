import React from 'react';
import { TARIFFS } from '../constants';
import { Clock, Navigation } from 'lucide-react';

export const Rates = () => {
  return (
    <section id="rates" className="py-24 bg-taxi-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Tarifas <span className="text-taxi-yellow">Oficiales</span>
          </h2>
          <p className="text-gray-400">Transparencia total en cada trayecto. Sin sorpresas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARIFFS.map((tariff) => (
            <div key={tariff.id} className="bg-neutral-800/50 p-8 rounded-2xl border border-white/5 hover:border-taxi-yellow/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{tariff.name}</h3>
              <p className="text-sm text-gray-400 mb-6">{tariff.description}</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-gray-300">Bajada de Bandera</span>
                  <span className="text-2xl font-bold text-taxi-yellow">€{tariff.baseFare.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="flex items-center gap-2 text-gray-300">
                    <Navigation size={16} /> Precio / Km
                  </span>
                  <span className="text-xl font-bold text-white">€{tariff.pricePerKm.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center pb-2">
                  <span className="flex items-center gap-2 text-gray-300">
                    <Clock size={16} /> Hora de espera
                  </span>
                  <span className="text-xl font-bold text-white">€{tariff.waitingTime.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
                * Tarifas sujetas a regulación oficial. Los precios pueden variar ligeramente dependiendo del tráfico y suplementos especiales (equipaje, mascotas). Todos los precios incluyen IVA.
            </p>
        </div>
      </div>
    </section>
  );
};
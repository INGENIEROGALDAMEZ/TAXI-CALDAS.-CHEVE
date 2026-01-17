import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
           <h3 className="text-2xl font-serif font-bold mb-4">Galicia <span className="text-taxi-yellow">Lux</span> Taxi</h3>
           <p className="text-gray-500 text-sm">
             Redefiniendo el transporte personal en Galicia. Servicio 24 horas, 365 días al año.
           </p>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h4 className="font-bold text-taxi-yellow mb-4 uppercase text-sm tracking-wider">Contacto</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2"><Phone size={16} /> +34 900 000 000</li>
            <li className="flex items-center gap-2"><Mail size={16} /> reservas@galicialux.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Santiago de Compostela, Galicia</li>
          </ul>
        </div>

        {/* Links */}
        <div className="col-span-1">
          <h4 className="font-bold text-taxi-yellow mb-4 uppercase text-sm tracking-wider">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="col-span-1">
           <h4 className="font-bold text-taxi-yellow mb-4 uppercase text-sm tracking-wider">Síguenos</h4>
           <div className="flex gap-4">
             <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-taxi-yellow hover:text-taxi-black transition-colors"><Instagram size={20} /></a>
             <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-taxi-yellow hover:text-taxi-black transition-colors"><Facebook size={20} /></a>
             <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-taxi-yellow hover:text-taxi-black transition-colors"><Twitter size={20} /></a>
           </div>
        </div>

      </div>
      <div className="text-center mt-12 pt-8 border-t border-white/5 text-xs text-gray-600">
        © {new Date().getFullYear()} Galicia Lux Taxi. Todos los derechos reservados.
      </div>
    </footer>
  );
};
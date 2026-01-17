import { CarType, Tariff, CityLocation } from './types';

export const HERO_VIDEO_URL = "https://media.istockphoto.com/id/1346587783/video/night-traffic-in-barcelona-view-from-the-car.mp4?s=mp4-640x640-is&k=20&c=Kq-8Xy-i7JqWzFkQ5X6eJqWzFkQ5X6eJqWzFkQ5X6e="; 
// Using a placeholder video URL. In production, this would be a high-res asset.

export const FLEET: CarType[] = [
  {
    id: 'standard',
    name: 'Standard Taxi',
    description: 'La opción clásica. Confortable, seguro y eficiente para moverse por la ciudad.',
    priceFactor: 1.0,
    image: 'https://picsum.photos/id/111/600/400', // Vintage car placeholder
    passengers: 4,
    luggage: 2
  },
  {
    id: 'executive',
    name: 'Black Executive',
    description: 'Viaja con estilo y máxima discreción. Vehículos de alta gama color negro.',
    priceFactor: 1.5,
    image: 'https://picsum.photos/id/133/600/400', // Luxury car placeholder
    passengers: 3,
    luggage: 3
  },
  {
    id: 'van',
    name: 'XL Van',
    description: 'Ideal para grupos o viajes al aeropuerto con mucho equipaje.',
    priceFactor: 1.8,
    image: 'https://picsum.photos/id/183/600/400', // Van placeholder
    passengers: 7,
    luggage: 6
  }
];

export const TARIFFS: Tariff[] = [
  {
    id: 'day',
    name: 'Tarifa 1 (Diurna)',
    baseFare: 3.50,
    pricePerKm: 1.15,
    waitingTime: 22.00,
    description: 'Lunes a Viernes de 06:00 a 22:00'
  },
  {
    id: 'night',
    name: 'Tarifa 2 (Nocturna/Festivos)',
    baseFare: 4.20,
    pricePerKm: 1.40,
    waitingTime: 28.00,
    description: 'Noches, fines de semana y festivos'
  },
  {
    id: 'airport',
    name: 'Suplemento Aeropuerto',
    baseFare: 5.50,
    pricePerKm: 0,
    waitingTime: 0,
    description: 'Suplemento fijo salida/llegada aeropuertos de Galicia'
  }
];

// Simplified coordinates for visualization
export const CITIES: CityLocation[] = [
  // Galicia
  { name: 'A Coruña', x: 15, y: 10, isGalicia: true },
  { name: 'Santiago', x: 14, y: 18, isGalicia: true },
  { name: 'Vigo', x: 13, y: 25, isGalicia: true },
  { name: 'Lugo', x: 22, y: 15, isGalicia: true },
  { name: 'Ourense', x: 20, y: 22, isGalicia: true },
  // Rest of Spain (Reference)
  { name: 'Madrid', x: 50, y: 45, isGalicia: false },
  { name: 'Barcelona', x: 85, y: 30, isGalicia: false },
  { name: 'Sevilla', x: 35, y: 75, isGalicia: false },
  { name: 'Bilbao', x: 60, y: 10, isGalicia: false },
  { name: 'Valencia', x: 70, y: 55, isGalicia: false },
];
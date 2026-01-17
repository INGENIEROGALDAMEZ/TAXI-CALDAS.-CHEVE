export interface CarType {
  id: string;
  name: string;
  description: string;
  priceFactor: number; // Multiplier for base rate
  image: string;
  passengers: number;
  luggage: number;
}

export interface Tariff {
  id: string;
  name: string;
  baseFare: number;
  pricePerKm: number;
  waitingTime: number; // per hour
  description: string;
}

export interface CityLocation {
  name: string;
  x: number; // Percentage 0-100 on map container
  y: number; // Percentage 0-100 on map container
  isGalicia: boolean;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}
import { GoogleGenAI } from "@google/genai";
import { TARIFFS, FLEET } from '../constants';

// Initialize Gemini Client
// IMPORTANT: In a real production app, never expose API keys in client-side code if possible.
// This assumes the environment variable is injected by the bundler/runtime.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Lo siento, la configuración de IA no está disponible en este momento (Falta API Key).";
  }

  try {
    const tariffInfo = TARIFFS.map(t => `${t.name}: Base €${t.baseFare}, €${t.pricePerKm}/km`).join('; ');
    const fleetInfo = FLEET.map(f => `${f.name} (${f.passengers} pas, x${f.priceFactor} precio)`).join('; ');

    const systemPrompt = `
      Eres el asistente virtual inteligente de "Galicia Lux Taxi", una línea de taxis premium en España, especializada en Galicia.
      
      Información de Tarifas: ${tariffInfo}
      Información de Flota: ${fleetInfo}
      
      Tu tono es profesional, cortés y eficiente. 
      Responde preguntas sobre estimados de precios (haz cálculos aproximados basados en kilómetros si el usuario da distancias), tipos de coches y cobertura en Galicia.
      No confirmes reservas reales, solo di que pueden llamar al número de central para reservar.
      Responde siempre en Español.
      Mantén las respuestas breves y útiles.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hubo un error al conectar con el asistente. Por favor intenta más tarde.";
  }
};
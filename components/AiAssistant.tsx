import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Bot, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "¡Hola! Soy el asistente virtual de Galicia Lux Taxi. ¿En qué puedo ayudarte hoy? Puedo estimar tarifas o informarte sobre nuestra flota." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: MessageRole.USER, text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await getGeminiResponse(userMsg.text);
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "Lo siento, tuve un problema. Intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 rounded-full shadow-2xl p-4 flex items-center justify-center transition-colors ${isOpen ? 'bg-transparent pointer-events-none' : 'bg-taxi-yellow text-taxi-black'}`}
        style={{ opacity: isOpen ? 0 : 1 }}
      >
        <MessageSquare size={28} fill="currentColor" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] z-50 glass-panel rounded-2xl overflow-hidden flex flex-col shadow-2xl ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="bg-taxi-yellow p-4 flex justify-between items-center text-taxi-black">
              <div className="flex items-center gap-2">
                <Bot size={24} />
                <span className="font-bold font-serif">Asistente Inteligente</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-900/90">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.role === MessageRole.USER 
                        ? 'bg-taxi-yellow text-taxi-black rounded-tr-none' 
                        : 'bg-neutral-800 text-white border border-white/10 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-neutral-800 p-3 rounded-lg rounded-tl-none flex gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-neutral-900 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pregunta precios o servicios..."
                className="flex-1 bg-neutral-800 border border-white/20 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-taxi-yellow transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-taxi-yellow text-taxi-black p-2 rounded-full hover:bg-yellow-300 disabled:opacity-50 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
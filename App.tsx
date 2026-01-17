import React from 'react';
import { Hero } from './components/Hero';
import { Rates } from './components/Rates';
import { Fleet } from './components/Fleet';
import { Map } from './components/Map';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-taxi-black text-white font-sans selection:bg-taxi-yellow selection:text-taxi-black">
      <Hero />
      <Rates />
      <Fleet />
      <Map />
      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;
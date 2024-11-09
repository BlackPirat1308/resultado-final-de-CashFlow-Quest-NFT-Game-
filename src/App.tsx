import React from 'react';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { GamePreview } from './components/GamePreview';
import { Education } from './components/Education';
import { Roadmap } from './components/Roadmap';
import { Whitepaper } from './components/Whitepaper';
import { PreRegister } from './components/PreRegister';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900">
      <Header />
      <main className="container mx-auto px-4">
        <GamePreview />
        <Features />
        <Education />
        <Roadmap />
        <Whitepaper />
        <PreRegister />
      </main>
      <Footer />
    </div>
  );
}

export default App;
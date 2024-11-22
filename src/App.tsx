import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { SignUpForm } from './components/SignUpForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950">
        <Navigation />
        <Hero />
      </div>
      <main>
        <HowItWorks />
        <Features />
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Bot } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <Bot className="h-8 w-8 text-blue-400" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            AgentAIWorker
          </span>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">How It Works</a>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-blue-500/10 text-blue-400 font-medium hover:bg-blue-500/20 transition-all duration-300 border border-blue-500/20">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
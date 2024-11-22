import React from 'react';
import { Bot, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-xl">
                <Bot className="h-8 w-8 text-blue-400" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                AgentAIWorker
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-md">
              Revolutionizing data collection and analysis with next-generation AI agent technology.
            </p>
            {/* <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Product</h3>
              <ul className="space-y-4">
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
                {/* <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 mt-16 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AgentAIWorker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <div className="relative z-10">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full mb-8 border border-blue-500/20">
          <Bot className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-medium text-blue-400">Intelligent Agent Technology</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Automate Web Data <br />Collection & Analysis
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-400 leading-relaxed">
          Deploy intelligent agents to scrape, analyze, and report web data. 
          Transform your data workflow with AI-powered automation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href='#contact' className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-lg font-bold text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center space-x-2">
            <span>Get Early Access</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          {/* <button className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
            <span>Watch Demo</span>
            <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
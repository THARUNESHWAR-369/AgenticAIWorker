import React from 'react';
import { Calendar, Search, Database, FileSpreadsheet, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Calendar className="h-8 w-8 text-blue-400" />,
    title: "Smart Scheduling",
    description: "Set up intelligent data collection tasks with our advanced scheduling system."
  },
  {
    icon: <Search className="h-8 w-8 text-blue-400" />,
    title: "AI-Powered Collection",
    description: "Our agents use machine learning to collect and process data with precision."
  },
  {
    icon: <Database className="h-8 w-8 text-blue-400" />,
    title: "Secure Storage",
    description: "Enterprise-grade database infrastructure for reliable data management."
  },
  {
    icon: <FileSpreadsheet className="h-8 w-8 text-blue-400" />,
    title: "Smart Reports",
    description: "Generate actionable insights with AI-enhanced reporting capabilities."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            How AgentAIWorker Operates
          </h2>
          <p className="text-xl text-gray-400">
            Our intelligent agents work seamlessly together to automate your data collection and analysis workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="text-center p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300">
                <div className="inline-block p-4 bg-blue-500/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-400/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
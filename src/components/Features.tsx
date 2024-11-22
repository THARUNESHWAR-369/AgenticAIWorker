import React from 'react';
import { RefreshCw, MessageSquare, Shield, Zap, Code, BarChart } from 'lucide-react';

const features = [
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Recursive Operations",
    description: "Build complex data collection workflows with smart recursive operations and scheduling."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Agent Communication",
    description: "Enable seamless collaboration between multiple AI agents for complex tasks."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security measures to protect your valuable data."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Real-time Processing",
    description: "Process and analyze data in real-time with our high-performance engine."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "API Integration",
    description: "Easy integration with your existing tools through our comprehensive API."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Gain deeper insights with our AI-powered analytics and visualization tools."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to automate your data collection and analysis workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300">
              <div className="mb-6 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
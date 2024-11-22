import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { push, ref, set } from 'firebase/database';
import { db } from '../lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetForm = () => {
    setEmail('');
    setName('');
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Save feedback in Firebase
      const feedbackRef = ref(db, "AgentAIWorker/pre-signup");
      const newDataRef = push(feedbackRef);
      await set(newDataRef, {
        name: name,
        email: email,
      });

      // Reset form and show confirmation
      resetForm();
      setIsSubmitted(true);

      // Hide confirmation after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section id='contact' className="py-24 bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950">
      <AnimatePresence mode='wait'>
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-8"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your pre-signup request has been received. We'll be in touch soon!
            </p>
          </motion.div>
        ) : (
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Join the Future of Data Collection
              </h2>
              <p className="text-xl mb-12 text-gray-400">
                Be among the first to experience the power of AI-driven data collection.
                Sign up for early access today!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl text-gray-300 bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow placeholder-gray-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-xl text-gray-300 bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow placeholder-gray-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Join Waitlist</span>
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
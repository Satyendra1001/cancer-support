'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Search, MessageCircle } from 'lucide-react';

export default function CancerSupportHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-900 flex flex-col">
      
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-purple-800 tracking-wide">CancerSupport</h1>
        <Button className="rounded-full px-6 bg-purple-700 hover:bg-purple-800 text-white">Join Community</Button>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 px-6 py-20 text-center flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-purple-800 mb-6 leading-tight">
             You&apos;re Not Alone <br /> We&apos;re In This Together
	</h2>

        <p className="text-lg max-w-xl text-gray-600 mb-8">
          Join a trusted support system of survivors, caregivers, and top hospitals. Find answers, talk to others, and get the care you deserve.
        </p>
        <Button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 text-lg rounded-full">
          Get Support Now
        </Button>
      </motion.section>

      {/* Search Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mx-auto my-12 p-6 bg-white shadow-2xl rounded-3xl"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-800">
          <Search className="w-5 h-5" />
          Find Hospitals Near You
        </h3>
        <Input placeholder="Enter city or hospital name..." className="mb-4 rounded-xl" />
        <Button className="bg-purple-700 text-white w-full py-2 rounded-xl">Search</Button>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full bg-white py-12 px-4"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">What Our Warriors Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'Aarav', msg: 'This platform gave me the courage to fight through the darkest days.', icon: '💪' },
            { name: 'Meera', msg: 'I found the best hospital and doctors here. Life changing.', icon: '🏥' },
            { name: 'Rahul', msg: 'Finally a space where people understand me. Thank you.', icon: '❤️' },
          ].map((t, i) => (
            <Card key={i} className="rounded-2xl shadow-lg p-4">
              <CardContent>
                <p className="text-xl mb-2">{t.icon} {t.name}</p>
                <p className="text-gray-600">{t.msg}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Chat Prompt */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-purple-700 text-white text-center py-16 px-6 rounded-t-3xl mt-12"
      >
        <h3 className="text-3xl font-bold mb-4">Live Chat Support</h3>
        <p className="mb-6 text-lg">Talk to survivors, doctors, and mental health coaches in real-time.</p>
        <Button variant="secondary" className="bg-white text-purple-800 px-6 py-3 rounded-full flex items-center gap-2">
          <MessageCircle size={20} />
          Open Chat
        </Button>
      </motion.section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm">
        Made with ❤️ by Satyendra | © 2025 CancerSupport
      </footer>
    </div>
  );
}


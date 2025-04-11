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
      <header className="w-full px-4 md:px-6 py-4 flex items-center justify-between shadow-sm bg-white">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-800 tracking-wide">CancerSupport</h1>
        <Button className="rounded-full px-4 sm:px-6 bg-purple-700 hover:bg-purple-800 text-white text-sm sm:text-base">Join Community</Button>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 px-4 md:px-6 py-16 md:py-20 text-center flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-purple-800 mb-6 leading-tight">
          You&apos;re Not Alone <br /> We&apos;re In This Together
        </h2>

        <p className="text-base sm:text-lg max-w-xl text-gray-600 mb-6 sm:mb-8 px-2">
          Join a trusted support system of survivors, caregivers, and top hospitals. Find answers, talk to others, and get the care you deserve.
        </p>
        <Button className="bg-pink-600 hover:bg-pink-700 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full">
          Get Support Now
        </Button>
      </motion.section>

      {/* Search Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mx-auto my-10 sm:my-12 p-4 sm:p-6 bg-white shadow-2xl rounded-3xl"
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 text-purple-800">
          <Search className="w-5 h-5" />
          Find Hospitals Near You
        </h3>
        <Input placeholder="Enter city or hospital name..." className="mb-4 rounded-xl text-sm sm:text-base" />
        <Button className="bg-purple-700 text-white w-full py-2 rounded-xl text-sm sm:text-base">
          Search
        </Button>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full bg-white py-10 sm:py-12 px-4"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-purple-800">What Our Warriors Say</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'Aarav', msg: 'This platform gave me the courage to fight through the darkest days.', icon: '💪' },
            { name: 'Meera', msg: 'I found the best hospital and doctors here. Life changing.', icon: '🏥' },
            { name: 'Rahul', msg: 'Finally a space where people understand me. Thank you.', icon: '❤️' },
          ].map((t, i) => (
            <Card key={i} className="rounded-2xl shadow-lg p-4 sm:p-6">
              <CardContent>
                <p className="text-lg sm:text-xl mb-2">{t.icon} {t.name}</p>
                <p className="text-gray-600 text-sm sm:text-base">{t.msg}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Chat Prompt (Placeholder for now) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-purple-700 text-white text-center py-14 sm:py-16 px-4 sm:px-6 rounded-t-3xl mt-12"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Live Chat Support</h3>
        <p className="mb-6 text-base sm:text-lg">Talk to survivors, doctors, and mental health coaches in real-time.</p>
        <Button variant="secondary" className="bg-white text-purple-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2">
          <MessageCircle size={20} />
          Open Chat
        </Button>
        <p className="text-sm mt-4 opacity-70">(Real-time chat coming soon!)</p>
      </motion.section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-500 text-xs sm:text-sm">
        Made with ❤️ by Satyendra | © 2025 CancerSupport
      </footer>
    </div>
  );
}



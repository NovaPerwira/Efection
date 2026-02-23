'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle, Zap, ArrowRight } from 'lucide-react';

export default function Footer() {
  // Data Link Sosmed
  const socialLeft = [
    { name: '@efection_instiki', icon: <Instagram size={18} />, link: '#' },
    { name: 'ecsi@instiki.ac.id', icon: <Mail size={18} />, link: 'mailto:ecsi@instiki.ac.id' },
    { name: '(+62) 896-7042-9724 (Ayu)', icon: <MessageCircle size={18} />, link: '#' },
  ];

  return (
    // Wrapper utama menggunakan background gelap senada dengan halaman
    <footer className="relative w-full bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8 font-sans overflow-hidden">
      
      {/* Background Decor (Konsisten dengan section sebelumnya) */}
       <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src="images/Hero/seamless3.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* === CTA Banner Section (Dark Glassmorphism) === */}
        <section className="relative overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/10 px-6 py-16 md:py-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          
          {/* Efek Glow Abstrak Emas & Coklat */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
            <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[150%] rounded-[100%] bg-gradient-to-r from-[#FEDB73]/20 to-transparent blur-3xl transform rotate-12"></div>
            <div className="absolute -bottom-[50%] -right-[10%] w-[50%] h-[100%] rounded-[100%] bg-gradient-to-l from-[#C09B6F]/20 to-transparent blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
                style={{ fontFamily: 'Grenze, serif' }}
              >
                Ready to Join the <span className="text-[#FEDB73] italic">Competition?</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Access the guidebook and secure your spot in the Regional or Story Writing competitions today.
              </p>
            </div>
            
            {/* Tombol Registrasi */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full pt-4">
              {/* Tombol Secondary (Dark Glass) */}
              <motion.a
                href="https://drive.google.com/drive/folders/1qrJfH5YMzKgjMeXhJKwfhIyVfWQ8D2Fq?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Learn More
                <ArrowRight size={18} />
              </motion.a>

              {/* Tombol Primary (Gold) */}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSevBO-Wm3H_U2zQRjZt63FFl6pGCAYKxUw63WOwnAwvl7WTcA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-[#FEDB73] text-black px-6 py-3 rounded-full font-semibold shadow-[0_10px_30px_rgba(254,219,115,0.2)] hover:bg-[#ffe594] transition-colors"
              >
                Register (Regional)
              </motion.a>

              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnS_mIXivrGGbYp2DFvacLxVK_TCZp6QzKlITBkZZtfSHcpw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-[#FEDB73] text-black px-6 py-3 rounded-full font-semibold shadow-[0_10px_30px_rgba(254,219,115,0.2)] hover:bg-[#ffe594] transition-colors"
              >
                Register (Story Writing)
              </motion.a>
            </div>
          </div>
        </section>

        {/* === Footer Bawah (Kontak Sosmed) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8 pb-8">
          
          {/* Kolom Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-7 w-7 text-[#FEDB73] fill-current" />
              <span 
                className="text-3xl md:text-4xl text-white tracking-wide"
                style={{ fontFamily: 'Grenze, serif' }}
              >
                Contact Us!
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-sm">
              Reach out to us if you have any questions regarding the competitions, registration, or partnerships. We're here to help!
            </p>
          </div>

          {/* Kolom Link Sosmed */}
          <div className="flex flex-col md:items-end space-y-5">
            <h3 className="text-lg font-medium text-white w-full md:text-right">Connect with us</h3>
            <ul className="space-y-4 w-full flex flex-col md:items-end text-sm text-gray-400">
              {socialLeft.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.link} className="flex items-center md:flex-row-reverse gap-4 group w-fit">
                    {/* Icon container */}
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 transition-all duration-300 group-hover:bg-[#FEDB73] group-hover:text-black group-hover:border-[#FEDB73] group-hover:shadow-[0_0_20px_rgba(254,219,115,0.4)]">
                      {item.icon}
                    </span>
                    {/* Text */}
                    <span className="font-medium group-hover:text-[#FEDB73] transition-colors duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-white/10 pt-8 mt-4 flex justify-center items-center">
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            &copy; 2026 English Festival Competition. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
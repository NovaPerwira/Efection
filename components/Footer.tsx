'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Instagram,
  Mail,
  Globe,
  MessageCircle,
  Facebook,
  Twitter,
} from 'lucide-react';

const quickLinks = [
  { name: 'Timeline', href: '/#timeline' },
  { name: 'Competitions', href: '/#comp' },
  { name: 'About Us', href: '/#aboutus' },
  { name: 'Register', href: '/#register' },
  { name: 'Contact', href: '/#footer' },
];

export default function Footer() {
  const socials = [
    { icon: <Instagram size={22} />, link: 'https://www.instagram.com/ecsi.instiki/' },
    { icon: <Instagram size={22} />, link: 'https://www.instagram.com/efection_instiki/' },
    { icon: <Mail size={22} />, link: 'mailto:ecsi@instiki.ac.id' },
  ];

  return (
    <footer id="footer" className="relative w-full mt-32 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1814] via-[#120f0c] to-black pointer-events-none" />

      {/* Soft Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FEDB73]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">

        {/* ================== CLOSING STATEMENT ================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: 'Grenze, serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
            }}
          >
            Where Voices Rise Beyond Borders
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#FEDB73] to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-[#FEDB73]" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#FEDB73] to-transparent" />
          </div>
        </motion.div>

        {/* ================== GRID SECTION ================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">

          {/* BRAND */}
          <div>
            <h3
              className="text-[#FEDB73] mb-4"
              style={{ fontFamily: 'Grenze, serif', fontSize: '28px' }}
            >
              EFECTION IV
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              An international English festival competition hosted by INSTIKI.
              Empowering students to compete, connect, and grow globally.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white mb-6 font-semibold tracking-wider uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FEDB73] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & SOCIALS */}
          <div>
            <h4 className="text-white mb-6 font-semibold tracking-wider uppercase text-sm">
              Contact
            </h4>

            <p className="text-gray-400 text-sm mb-4">
              Instiki Campus, Denpasar
            </p>

            <p className="text-gray-400 text-sm mb-4">
              ecsi@instiki.ac.id
            </p>

            <p className="text-gray-400 text-sm mb-8">
              (+62) 896-7042-9724 (Ayu)
            </p>

            <div className="flex gap-4">
              {socials.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ scale: 1.15 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-black hover:bg-[#FEDB73] hover:border-[#FEDB73] transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* ================== BOTTOM BAR ================== */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} EFECTION IV — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
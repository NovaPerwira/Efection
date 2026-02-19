import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Mail, Globe, MessageCircle, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  // Data Link Sosmed Kiri
  const socialLeft = [
    { name: '@efection_instiki', icon: <Instagram size={28} />, link: '#' },
    { name: 'ecsi@instiki.ac.id', icon: <Mail size={28} />, link: 'mailto:ecsi@instiki.ac.id' },
    { name: '(+62) 896-7042-9724 (Ayu)', icon: <MessageCircle size={28} />, link: '#' },
  ];

  // Data Link Sosmed Tengah
  const socialRight = [
  ];

  return (
<footer className="relative w-full mt-[-80px] z-20 overflow-hidden">

  {/* Background Wave */}
  <div className="absolute -rotate-3 -top-16 left-1/2 -translate-x-1/2 w-[180%] h-[180%] z-0 pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        fill="#d59d58"
        fillOpacity="1"
        d="M0,64L120,53.3C240,43,480,21,720,32C960,43,1200,85,1320,106.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>
  </div>

  {/* Content */}
  <div className="relative z-10 w-full pt-24 md:pt-32 pb-16 px-6 md:px-12 flex justify-center">
    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12">

      {/* LEFT SECTION */}
      <div className="md:col-span-8">

        {/* Heading (Clamped) */}
        <h2
          className="text-black mb-8 font-sans tracking-tight"
          style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
        >
          Contact Us!
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">

          {/* Column 1 */}
          <ul className="space-y-4">
            {socialLeft.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="flex items-center gap-4 group">
                  <span className="text-black transition-transform group-hover:scale-110 group-hover:text-[#FEDB73]">
                    {item.icon}
                  </span>
                  <span className="text-black text-base sm:text-lg font-medium group-hover:underline break-all">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Column 2 */}
          <ul className="space-y-4">
            {socialRight.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="flex items-center gap-4 group">
                  <span className="text-black transition-transform group-hover:scale-110 group-hover:text-[#FEDB73]">
                    {item.icon}
                  </span>
                  <span className="text-black text-base sm:text-lg font-medium group-hover:underline break-all">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* RIGHT SECTION (Buttons) */}
      <div className="md:col-span-4 flex flex-col items-stretch md:items-end gap-4">

        {/* Learn More */}
        <motion.a
          href="https://drive.google.com/drive/folders/1qrJfH5YMzKgjMeXhJKwfhIyVfWQ8D2Fq?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-800 transition-colors w-full sm:w-auto md:w-64 text-center"
          style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}
        >
          Learn More
        </motion.a>

        {/* Register Regional */}
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSevBO-Wm3H_U2zQRjZt63FFl6pGCAYKxUw63WOwnAwvl7WTcA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FEDB73] text-black px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#ffe594] transition-colors w-full sm:w-auto md:w-64 text-center"
          style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}
        >
          Register Now (Regional)
        </motion.a>

        {/* Register Story Writing */}
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfnS_mIXivrGGbYp2DFvacLxVK_TCZp6QzKlITBkZZtfSHcpw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FEDB73] text-black px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#ffe594] transition-colors w-full sm:w-auto md:w-64 text-center"
          style={{ fontSize: "clamp(14px, 2.5vw, 18px)" }}
        >
          Register Now (Story Writing)
        </motion.a>

      </div>

    </div>
  </div>
</footer>
  );
}
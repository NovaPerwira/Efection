import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Mail, Globe, MessageCircle, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  // Data Link Sosmed Kiri
  const socialLeft = [
    { name: '@efection_instiki', icon: <Instagram size={28} />, link: '#' },
    { name: 'ecsi@instiki.ac.id', icon: <Mail size={28} />, link: 'mailto:ecsi@instiki.ac.id' },
    { name: '@ecsi_instiki', icon: <Globe size={28} />, link: '#' },
  ];

  // Data Link Sosmed Tengah
  const socialRight = [
    { name: '@ecsi_instiki', icon: <MessageCircle size={28} />, link: '#' },
    { name: '@ecsi_instiki', icon: <Facebook size={28} />, link: '#' },
    { name: '@ecsi_instiki', icon: <Twitter size={28} />, link: '#' },
  ];

  return (
    <footer className="relative overflow-x-hidden w-full mt-[-100px] z-20">

      {/* --- DIV KHUSUS BACKGROUND --- 
          Ubah 'h-full' menjadi pixel (misal h-[500px]) jika ingin tinggi fix, 
          atau biarkan h-full agar mengikuti konten.
      */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-[140%] z-0 pointer-events-none "
        style={{
          backgroundImage: "url('/images/footer.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* --- CONTENT WRAPPER --- 
          Gunakan relative & z-10 agar konten muncul DI ATAS background 
      */}
      <div className="relative z-10 w-full pt-32 pb-16 px-6 md:px-12 flex justify-center items-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          {/* --- KOLOM KIRI & TENGAH (CONTACT INFO) --- */}
          <div className="md:col-span-8 flex flex-col md:flex-row gap-10 md:gap-20">

            <div className="w-full">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-8 font-sans tracking-tight">
                Contact Us!
              </h2>

              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                {/* Kolom Sosmed 1 */}
                <ul className="space-y-4">
                  {socialLeft.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.link} className="flex items-center gap-4 group">
                        <span className="text-black transition-transform group-hover:scale-110 group-hover:text-[#FEDB73]">
                          {item.icon}
                        </span>
                        <span className="text-black text-lg font-medium group-hover:underline">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Kolom Sosmed 2 */}
                <ul className="space-y-4">
                  {socialRight.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.link} className="flex items-center gap-4 group">
                        <span className="text-black transition-transform group-hover:scale-110 group-hover:text-[#FEDB73]">
                          {item.icon}
                        </span>
                        <span className="text-black text-lg font-medium group-hover:underline">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* --- KOLOM KANAN (BUTTONS) --- */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end gap-4 mt-6 md:mt-0">
            {/* Tombol Learn More */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-gray-800 transition-colors w-48 md:w-56"
            >
              Learn More
            </motion.button>

            {/* Tombol Register */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FEDB73] text-black px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-[#ffe594] transition-colors w-48 md:w-56"
            >
              Register Now
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}
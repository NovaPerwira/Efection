'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { ArrowRight, MapPin, Menu, X, ChevronDown, Facebook, Instagram, Twitter } from 'lucide-react';

// --- Komponen Utama ---

const App = () => {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden font-sans selection:bg-orange-600 selection:text-white">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <EventSection />
      <Footer />
    </div>
  );
};

// --- Navbar (Responsive & Blur) ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-serif font-bold text-black">N</div>
          <span className="text-xl font-bold tracking-widest uppercase">Nusantara.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
          {['Beranda', 'Filosofi', 'Destinasi', 'Acara'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="hover:text-orange-500 transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X className="text-orange-500" /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="flex flex-col gap-6 p-8 text-center">
          {['Beranda', 'Filosofi', 'Destinasi', 'Acara'].map((item) => (
            <a key={item} href="#" className="text-lg font-medium tracking-widest uppercase hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

// --- Hero Section (Updated Parallax Logic) ---

const HeroSection = () => {
  const containerRef = useRef(null);
  
  // Menggunakan useScroll relative terhadap container ini
  // Container height dibuat lebih tinggi (200vh) untuk memberikan ruang scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 1100, damping: 30, restDelta: 0.001 });

  // 1. Background Logic:
  // Scale: 1 -> 1.3 (Zoom In)
  // Y: Tetap 0 (Fixed position karena container sticky, tidak kita gerakkan dengan transform)
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.3]);
  
  // 2. Content (Text) Logic:
  // Y: 0 -> -600 (Bergerak ke ATAS, menjauhi layar saat discroll)
  // Opacity: Fade out saat setengah scroll
  const textY = useTransform(smoothProgress, [0, 0.5], [0, -1000]);
  const textOpacity = useTransform(smoothProgress, [0, 0.8], [2, 0]);

  // 3. Silhouette Logic:
  // Opacity: Menghilang cukup cepat
  // Scale: Sedikit membesar agar dramatis
  const silhouetteOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const silhouetteScale = useTransform(smoothProgress, [0, 0.5], [1, 1.1]);
  // Kita biarkan silhouette posisinya tetap atau sedikit naik mengikuti flow
  const silhouetteY = useTransform(smoothProgress, [0, 0.5], [0, -100]); 

  // 4. Overlay Gelap: Transisi ke section berikutnya
  const overlayOpacity = useTransform(smoothProgress, [0.6, 1], [0.3, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-black">
      
      {/* Sticky Container: Memastikan elemen tetap di viewport selama scroll di parent */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* Layer Background (Zoom Only, Position Fixed visually) */}
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1768310481123-9c8e4e6fc61a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Candi Borobudur Landscape" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay Tetap */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
          {/* Dynamic Overlay untuk transisi */}
          <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black" />
        </motion.div>

        {/* Layer Text Content (Moves UP) */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 pb-20 md:pb-0"
        >
          <RevealText>
            <span className="block text-orange-500 font-bold tracking-[0.4em] text-sm md:text-base mb-6 uppercase">
              The Soul of Indonesia
            </span>
          </RevealText>
          
          <RevealText delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-white mb-6 leading-[0.9]">
              Effection<br/><span className="italic font-light text-white/90">IV</span>
            </h1>
          </RevealText>

          <RevealText delay={0.4}>
            <p className="max-w-md md:max-w-xl mx-auto text-white/80 text-sm md:text-lg font-light leading-relaxed mb-8">
              Jelajahi keindahan budaya yang tak lekang oleh waktu, di mana tradisi bertemu dengan keagungan alam.
            </p>
          </RevealText>

          <RevealText delay={0.6}>
             <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 opacity-60"
             >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ChevronDown />
             </motion.div>
          </RevealText>
        </motion.div>

        {/* Layer Silhouette (Fades Out) */}
        <motion.div 
          style={{ opacity: silhouetteOpacity, scale: silhouetteScale, y: silhouetteY }}
          className="absolute bottom-0 left-0 right-0 h-[40vh] md:h-[60vh] z-30 pointer-events-none flex items-end justify-center"
        >
          <div className="relative w-full h-full max-w-7xl mx-auto">
             <img 
               src="https://images.unsplash.com/photo-1629814408013-41e988c5201d?q=80&w=2070&auto=format&fit=crop"
               alt="Siluet Wayang"
               className="w-full h-full object-contain object-bottom md:object-right-bottom drop-shadow-2xl brightness-0 contrast-125"
               style={{
                 maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)'
               }}
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- Intro Section (Next Section) ---

const IntroSection = () => {
  return (
    <section className="bg-[#0a0a0a] relative z-40 py-24 md:py-32 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
          <FadeIn direction="right" className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1516475429286-465d815a0df7?q=80&w=1543&auto=format&fit=crop" 
              alt="Penari Bali" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </FadeIn>
          {/* Ornament Box */}
          <FadeIn delay={0.2} className="absolute -bottom-10 -left-10 w-2/3 h-1/2 border border-orange-500/30 -z-0 hidden md:block" />
        </div>

        <div className="space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Warisan<br/>
              <span className="text-orange-500 italic">Leluhur</span> Kita
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="w-20 h-[2px] bg-white/20 mb-8" />
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Indonesia bukan hanya sekadar kepulauan, melainkan untaian cerita yang terukir dalam setiap gerakan tari, alunan gamelan, dan pahatan candi. Kami mengajak Anda menyelami kedalaman filosofi yang menyatukan manusia, alam, dan pencipta.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
             <ul className="space-y-4 mt-6">
                {[
                  "Harmoni Spiritual dan Alam",
                  "Seni Pertunjukan Mendunia",
                  "Arsitektur Penuh Makna"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
             </ul>
          </FadeIn>

          <FadeIn delay={0.6}>
            <button className="mt-8 px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-4 tracking-widest uppercase text-xs font-bold">
              Pelajari Sejarah <ArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- Gallery Section ---

const GallerySection = () => {
  const galleries = [
    { title: "Batik", sub: "Mahakarya Kain", img: "https://images.unsplash.com/photo-1585848762744-884639943586?q=80&w=2000&auto=format&fit=crop" },
    { title: "Gamelan", sub: "Alunan Jiwa", img: "https://images.unsplash.com/photo-1626245367018-09593259ce24?q=80&w=2000&auto=format&fit=crop" },
    { title: "Wayang", sub: "Bayangan Hidup", img: "https://images.unsplash.com/photo-1599577239385-e51c8e14620f?q=80&w=2000&auto=format&fit=crop" }
  ];

  return (
    <section className="bg-neutral-900 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif">Koleksi Budaya</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-400 max-w-sm text-sm">Menampilkan ragam keindahan visual yang menjadi identitas bangsa di mata dunia.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleries.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
              <p className="text-orange-500 text-xs uppercase tracking-widest">{item.sub}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Event Section ---

const EventSection = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
         <FadeIn>
            <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif mb-12">Jadwal Pagelaran</h2>
         </FadeIn>
         
         <div className="space-y-4">
            {[
              { date: "12 OKT", title: "Festival Kraton Nusantara", loc: "Yogyakarta" },
              { date: "25 NOV", title: "Pagelaran Wayang Kulit", loc: "Solo, Jawa Tengah" },
              { date: "10 DES", title: "Tari Kecak Uluwatu", loc: "Bali" }
            ].map((event, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group flex flex-col md:flex-row items-center justify-between p-8 border border-white/10 hover:border-orange-500/50 hover:bg-white/5 transition-all duration-300 cursor-pointer rounded-lg">
                   <div className="flex flex-col md:flex-row items-center gap-8 mb-4 md:mb-0">
                      <span className="text-xl font-bold text-orange-500 tracking-wider">{event.date}</span>
                      <h3 className="text-2xl font-serif group-hover:text-orange-400 transition-colors">{event.title}</h3>
                   </div>
                   <div className="flex items-center gap-4 text-sm text-gray-500 uppercase tracking-widest">
                      {event.loc}
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </div>
              </FadeIn>
            ))}
         </div>
      </div>
    </section>
  );
};

// --- Footer ---

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold">Nusantara.</h2>
            <p className="text-gray-400 max-w-sm font-light">
              Misi kami adalah melestarikan dan memperkenalkan kekayaan budaya Indonesia kepada dunia melalui pengalaman digital yang imersif.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-orange-500 text-xs uppercase tracking-widest">Menu</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Beranda</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tentang Kami</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kontak</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-orange-500 text-xs uppercase tracking-widest">Sosial</h4>
            <div className="flex gap-4">
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Facebook} />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nusantara Culture. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all">
    <Icon className="w-4 h-4" />
  </a>
);

// --- Animation Components (Reusable) ---

// FadeIn Component dengan dukungan animasi Out (saat scroll menjauh)
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  
  // Menggunakan viewport margin agar animasi tidak terlalu cepat trigger di tepi layar
  const isInView = useInView(ref, { 
    margin: "0px 0px -100px 0px",
    once: false // PENTING: animate out saat scroll ke atas/bawah menjauh
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : 0, 
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        delay: delay, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// RevealText untuk efek teks muncul per karakter/kata bisa ditambahkan, 
// tapi di sini kita pakai masking sederhana
const RevealText = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -50px 0px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default App;
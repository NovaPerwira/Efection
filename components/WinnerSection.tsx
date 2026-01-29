'use client'

import Image from 'next/image'

type SideImageProps = {
  src: string
  className?: string
  rotate?: string // Tambahan untuk sedikit rotasi agar lebih natural
}

export default function WinnerSection() {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-[#3b352d] flex flex-col items-center justify-center">
      
      {/* === BACKGROUND LAYERS === */}
      
      {/* 1. Base Pattern (Floral/Damask) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          // Ganti dengan pattern batik/floral yang sesuai jika ada
          src="/images/1.jpg" 
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Vertical Stripes Overlay (CSS Gradient) */}
      {/* Ini membuat efek garis-garis vertikal hijau/gelap seperti di desain */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
            background: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0, 50, 0, 0.2) 40px, rgba(0, 50, 0, 0.2) 80px)'
        }}
      ></div>

      {/* 3. Vignette (Gelap di pinggir) */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none"></div>


      {/* === CENTER CONTENT === */}
      <div className="relative z-10 text-center flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-serif text-[#f5f1ea] drop-shadow-lg mb-12 tracking-wide">
          Are You Ready to be our <br />
          <span className="italic font-bold text-white">Winner ?</span>
        </h2>

        {/* Center Frame (Mystery Box) */}
        <div className="relative group cursor-pointer">
            {/* The Frame Container */}
            <div className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] bg-[#e3cd9c] relative shadow-2xl transform transition-transform duration-500 hover:scale-105">
                
                {/* CSS Wood Frame Border */}
                <div className="absolute inset-0 border-[16px] border-[#5d4037] border-ridge shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-20 pointer-events-none"></div>
                
                {/* Inner Pattern/Content */}
                <div className="absolute inset-4 bg-[#d4c39c] flex items-center justify-center overflow-hidden">
                    {/* Background Pattern dalam frame */}
                     <Image
                        src="/images/subHero/border.webp"
                        alt="Inner Pattern"
                        fill
                        className="object-cover opacity-20"
                    />

                    {/* Mystery Question Mark (Silhouette) */}
                    <div className="relative z-10 text-[#5d4037] opacity-60 font-serif text-[180px] font-bold select-none mix-blend-multiply">
                        ?
                    </div>
                </div>
            </div>

            {/* Shine Effect pada Frame (Opsional) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"></div>
        </div>
      </div>


      {/* === FLOATING SIDE IMAGES === */}
      {/* Kita gunakan absolute positioning relative terhadap section utama */}
      
      {/* Kiri Atas */}
      <SideImage 
        src="/images/subHero/psrt 1.webp" 
        className="top-10 left-4 md:left-10 lg:left-20 scale-75 md:scale-90"
        rotate="-rotate-2"
      />

      {/* Kiri Bawah */}
      <SideImage 
        src="/images/subHero/psrt 4.webp" 
        className="bottom-10 left-8 md:left-16 lg:left-32 scale-90 md:scale-100"
        rotate="rotate-3"
      />

      {/* Kanan Atas */}
      <SideImage 
        src="/images/subHero/psrt 2.webp" 
        className="top-16 right-4 md:right-10 lg:right-24 scale-75 md:scale-90"
        rotate="rotate-2"
      />

      {/* Kanan Bawah */}
      <SideImage 
        src="/images/subHero/psrt 3.webp" 
        className="bottom-14 right-8 md:right-16 lg:right-36 scale-90 md:scale-100"
        rotate="-rotate-3"
      />

    </section>
  )
}

// Komponen Frame Kecil untuk Sisi
function SideImage({ src, className, rotate = 'rotate-0' }: SideImageProps) {
  return (
    <div className={`hidden lg:block absolute z-20 ${className} ${rotate} hover:z-30 transition-all duration-300 hover:scale-110`}>
      {/* Ukuran Frame */}
      <div className="w-[180px] h-[220px] bg-[#2a1d15] relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* CSS Wood Frame Border */}
        {/* border-t-[#785645] memberikan efek cahaya dari atas pada kayu */}
        <div className="absolute inset-0 border-[10px] border-[#5d4037] border-t-[#785645] border-l-[#6b4c3e] border-b-[#3e2b24] border-r-[#3e2b24] shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] z-20 pointer-events-none"></div>

        {/* Image Container */}
        <div className="absolute inset-[10px] bg-black">
             <Image
                src={src}
                alt="Contestant"
                fill
                className="object-cover"
            />
        </div>
      </div>
    </div>
  )
}
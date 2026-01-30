'use client'

import Image from 'next/image'

type SideImageProps = {
  src: string
  className?: string
  rotate?: string 
}

export default function WinnerSection() {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-[#3b352d] flex flex-col items-center justify-center">
      
      {/* === BACKGROUND LAYERS === */}
      
      {/* 1. Base Pattern (Floral/Damask) */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          // Ganti dengan pattern batik/floral yang sesuai jika ada
          src="/images/Hero/bg.png" 
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

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
        <div className="relative  cursor-pointer">
            {/* The Frame Container */}
            <div className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] relative transform transition-transform duration-500 hover:scale-105">
                
                {/* CSS Wood Frame Border */}
                <div className="absolute inset-0 z-20 pointer-events-none"></div>
                
                {/* Inner Pattern/Content */}
                <div className="absolute inset-4 flex items-center justify-center overflow-hidden">
                    {/* Background Pattern dalam frame */}
                     <Image
                        src="/images/subHero/border.webp"
                        alt="Inner Pattern"
                        fill
                        className="object-cover opacity-100"
                    />

                 
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
        className="top-10 left-0 scale-75 md:scale-90"
        rotate="-rotate-2"
      />

      {/* Kiri Bawah */}
      <SideImage 
        src="/images/subHero/psrt 4.webp" 
        className="bottom-10 left-0  scale-90 md:scale-100"
        rotate="rotate-3"
      />

      {/* Kanan Atas */}
      <SideImage 
        src="/images/subHero/psrt 2.webp" 
        className="top-16 right-10 scale-75 md:scale-90"
        rotate="rotate-2"
      />

      {/* Kanan Bawah */}
      <SideImage 
        src="/images/subHero/psrt 3.webp" 
        className="bottom-14 right-10 md:right-16 lg:right-36 scale-90 md:scale-100"
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
      <div className="w-[180px] h-[220px] relative ">
        
        {/* CSS Wood Frame Border */}
        {/* border-t-[#785645] memberikan efek cahaya dari atas pada kayu */}
        <div className="absolute inset-0 z-20 pointer-events-none"></div>

        {/* Image Container */}
        <div className="absolute inset-[10px] ">
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
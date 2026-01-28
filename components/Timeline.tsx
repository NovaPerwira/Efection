import React from 'react';

// Tipe data untuk setiap event di timeline
interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  position: 'top' | 'bottom'; // Menentukan posisi node (puncak atau lembah gelombang)
  isSpecial?: boolean; // Untuk highlight khusus seperti "D-Day"
}

const events: TimelineEvent[] = [
  {
    id: 1,
    title: "Early Bird",
    description: "Lorem ipsum dolor sit amet, consectetur",
    position: 'top',
  },
  {
    id: 2,
    title: "Normal Wave",
    description: "Lorem ipsum dolor sit amet, consectetur",
    position: 'bottom',
  },
  {
    id: 3,
    title: "Late Bird",
    description: "Lorem ipsum dolor sit amet, consectetur",
    position: 'top',
  },
  {
    id: 4,
    title: "Adjudication",
    description: "Lorem ipsum dolor sit amet, consectetur",
    position: 'bottom',
  },
  {
    id: 5,
    title: "D-Day",
    description: "Lorem ipsum dolor sit amet, consectetur",
    position: 'top',
    isSpecial: true,
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#dcc499] flex flex-col items-center justify-center p-10 font-serif overflow-hidden relative">
      
      {/* Judul Utama */}
      <h1 className="text-5xl font-bold text-white drop-shadow-md mb-20 z-10 font-serif">
        Our Timeline
      </h1>

      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        
        {/* === LAYER 1: SVG Background Wave (Jalan Berlekuk) === */}
        {/* Kita menggunakan SVG absolute agar bisa responsif melebar sesuai container */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none drop-shadow-xl" 
          viewBox="0 0 1000 400" 
          preserveAspectRatio="none"
        >
          {/* Path utama (warna coklat tua) */}
          <path 
            d="M -10,150 
               C 150,150 150,300 250,300 
               S 350,150 500,150 
               S 650,300 750,300 
               S 850,150 1010,150" 
            fill="none" 
            stroke="#4a3b2a" 
            strokeWidth="120" 
            strokeLinecap="round"
          />
        </svg>

        {/* === LAYER 2: Node & Konten === */}
        {/* Container ini menumpuk item di atas SVG menggunakan Grid/Flex atau Absolute manual */}
        <div className="absolute inset-0 w-full h-full">
          {events.map((event, index) => {
            // Hitung posisi horizontal (left) berdasarkan index
            // Kita bagi 100% dengan jumlah item agar tersebar rata
            const leftPos = `${(index * 20) + 10}%`; 
            
            // Tentukan posisi vertikal berdasarkan tipe 'top' atau 'bottom'
            // Sesuaikan nilai ini agar pas dengan lekukan SVG
            const topPos = event.position === 'top' ? '30%' : '65%';

            return (
              <div 
                key={event.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ left: leftPos, top: topPos }}
              >
                
                {/* Deskripsi Atas (Jika posisi node di top) */}
                {event.position === 'top' && (
                  <div className="mb-4 text-center w-48 animate-fade-in-down">
                     <p className="text-sm text-gray-800 italic mb-1">"{event.description}"</p>
                     {/* Garis penunjuk */}
                     <div className="h-8 w-0.5 bg-yellow-200 mx-auto"></div>
                  </div>
                )}

                {/* Lingkaran Node */}
                <div 
                  className={`
                    flex items-center justify-center rounded-full shadow-lg border-4 border-opacity-50 transition-transform hover:scale-110 duration-300
                    ${event.isSpecial 
                      ? 'w-32 h-32 bg-[#ff9f75] border-[#ffccbc] text-black' // Style khusus D-Day
                      : 'w-28 h-28 bg-[#fdd870] border-[#feeeb3] text-black'} // Style normal
                  `}
                >
                  <span className={`text-center font-bold leading-tight ${event.isSpecial ? 'text-2xl font-black' : 'text-lg'}`}>
                    {event.title}
                  </span>
                </div>

                {/* Deskripsi Bawah (Jika posisi node di bottom) */}
                {event.position === 'bottom' && (
                  <div className="mt-4 text-center w-48 animate-fade-in-up">
                     {/* Garis penunjuk */}
                     <div className="h-8 w-0.5 bg-yellow-200 mx-auto mb-1"></div>
                     <p className="text-sm text-gray-800 italic">"{event.description}"</p>
                  </div>
                )}
                
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Hiasan background texture (Opsional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-scales.png")' }}>
      </div>
    </div>
  );
};

export default Timeline;
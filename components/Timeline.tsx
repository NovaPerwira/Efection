'use client';

import React from 'react';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  position: 'top' | 'bottom';
  isSpecial?: boolean;
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

export default function Timeline() {
  return (
    <section className="bg-[#C09B6F] relative min-h-screen overflow-hidden">

      {/* TILED BACKGROUND */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: "url('/images/timeline/bg_overlay.png')",
          backgroundSize: '280px 280px',
        }}
      />
      <div className="absolute inset-0 bg-[#C09B6F]/20" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-md mb-20">
          Our Timeline
        </h1>

        {/* TIMELINE WRAPPER */}
        <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center">

          {/* SVG WAVE */}
        <svg
          className="absolute inset-x-0 top-1/2 -translate-y-1/2
                    w-full h-[420px]
                    pointer-events-none drop-shadow-xl"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="
              M -10,150
              C 150,150 150,300 250,300
              S 350,150 500,150
              S 650,300 750,300
              S 850,150 1010,150
            "
            fill="none"
            stroke="#3a2c1f"
            strokeWidth="120"
            strokeLinecap="round"
          />
        </svg>
        
          {/* NODES */}
          <div className="absolute inset-0 w-full h-full">
            {events.map((event, index) => {
              const leftPos = `${(index + 1) * (100 / (events.length + 1))}%`;
              const topPos = event.position === 'top' ? '30%' : '65%';

              return (
                <div
                  key={event.id}
                  className="group absolute flex flex-col items-center
                             transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: leftPos, top: topPos }}
                >

                  {/* TOP DESCRIPTION */}
                  {event.position === 'top' && (
                    <div
                      className="
                        mb-4 text-center w-48
                        opacity-100 md:opacity-0
                        md:group-hover:opacity-100
                        scale-100 md:scale-95
                        md:group-hover:scale-100
                        transition-all duration-300
                      "
                    >
                      <p className="text-sm text-gray-800 italic mb-1">
                        "{event.description}"
                      </p>
                      <div className="h-8 w-0.5 bg-yellow-200 mx-auto" />
                    </div>
                  )}

                  {/* NODE */}
                  <div
                    className={`
                      flex items-center justify-center rounded-full shadow-lg
                      border-4 border-opacity-50 transition-transform duration-300
                      group-hover:scale-110
                      ${
                        event.isSpecial
                          ? 'w-32 h-32 bg-[#ff9f75] border-[#ffccbc]'
                          : 'w-28 h-28 bg-[#fdd870] border-[#feeeb3]'
                      }
                    `}
                  >
                    <span
                      className={`text-center font-bold leading-tight ${
                        event.isSpecial ? 'text-2xl font-black' : 'text-lg'
                      }`}
                    >
                      {event.title}
                    </span>
                  </div>

                  {/* BOTTOM DESCRIPTION */}
                  {event.position === 'bottom' && (
                    <div
                      className="
                        mt-4 text-center w-48
                        opacity-100 md:opacity-0
                        md:group-hover:opacity-100
                        scale-100 md:scale-95
                        md:group-hover:scale-100
                        transition-all duration-300
                      "
                    >
                      <div className="h-8 w-0.5 bg-yellow-200 mx-auto mb-1" />
                      <p className="text-sm text-gray-800 italic">
                        "{event.description}"
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

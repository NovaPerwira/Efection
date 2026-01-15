'use client'

import Image from 'next/image'

export default function EffectionIVSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3b352d]">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1.jpg"
          alt="Background Pattern"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-[#f5f1ea]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#b38a3a] text-sm px-4 py-1 rounded-full mb-8">
          <span className="text-xs">⚡</span>
          <span className="font-medium">#1 Voices of Society</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest mb-6">
          EFFECTION IV
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm md:text-base text-[#e2ddd4] leading-relaxed mb-14">
          Exploring Culture, Identity, and Change in a <br className="hidden md:block" />
          Globalized World
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-10 md:gap-16 mb-20">
          <Stat value="1K+" label="Peserta" />
          <Stat value="30K+" label="Peserta" />
          <Stat value="4.9 ★" label="Rating Peserta" />
        </div>
      </div>

      {/* Side framed images */}
      <SideImage
        src="/images/1.jpg"
        className="top-16 left-6"
      />
      <SideImage
        src="/images/1.jpg"
        className="bottom-20 left-10"
      />
      <SideImage
        src="/images/1.jpg"
        className="top-20 right-6"
      />
      <SideImage
        src="/images/1.jpg"
        className="bottom-24 right-10"
      />
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-xl md:text-2xl font-semibold">{value}</p>
      <p className="text-xs md:text-sm text-[#d4cec4]">{label}</p>
    </div>
  )
}

function SideImage({ src, className }) {
  return (
    <div
      className={`hidden lg:block absolute z-20 w-36 xl:w-44 ${className}`}
    >
      <div className="relative">
        {/* Frame */}
        <Image
          src="/images/1.jpg"
          alt="Frame"
          width={220}
          height={320}
          className="absolute inset-0 z-10"
        />

        {/* Photo */}
        <Image
          src={src}
          alt="Speaker"
          width={200}
          height={300}
          className="relative z-0 object-cover rounded-sm"
        />
      </div>
    </div>
  )
}

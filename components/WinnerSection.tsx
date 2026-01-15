'use client'

import Image from 'next/image'

export default function WinnerSection() {
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center text-[#f5f1ea]">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-16">
          Are Ready to be our <br />
          <span className="italic">Winner ?</span>
        </h2>

        {/* Center Frame */}
        <div className="relative mx-auto w-48 md:w-56">
          {/* Frame */}
          <Image
            src="/images/1.jpg"
            alt="Frame"
            width={260}
            height={360}
            className="relative z-10"
          />

          {/* Mystery */}
          <Image
            src="/images/1.jpg"
            alt="Mystery"
            width={200}
            height={300}
            className="absolute inset-0 m-auto z-0 opacity-80"
          />
        </div>
      </div>

      {/* Side Images */}
      <SideImage
        src="/images/1.jpg"
        className="top-14 left-6"
      />
      <SideImage
        src="/images/1.jpg"
        className="bottom-20 left-10"
      />
      <SideImage
        src="/images/1.jpg"
        className="top-16 right-6"
      />
      <SideImage
        src="/images/1.jpg"
        className="bottom-20 right-10"
      />
    </section>
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

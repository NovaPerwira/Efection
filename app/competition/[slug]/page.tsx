'use client';

import Image from "next/image";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

/* ================= DATA ================= */

const competitions = {
  "middle-storytelling": {
    title: "Story telling",
    subtitle: "Middle School (Regional)",
    price: "IDR. 75,000",
    dateDay: "24",
    dateMonth: "May 2026",
    image: "/images/competitions/STORYTELLING_SMP.png",
    imageWidth: 350,
    imageHeight: 200,
    description:
      "The Middle School Storytelling Competition is being introduced for the first time at EFECTION IV. Participants will orally present a story in English before the judges, with assessment focusing on pronunciation, expression, confidence, and overall storytelling performance.",
  },

  "high-storytelling": {
    title: "Story telling",
    subtitle: "High School (Regional)",
    price: "IDR. 85,000",
    dateDay: "24",
    dateMonth: "May 2026",
    image: "/images/competitions/STORYTELLING_SMA.png",
    imageWidth: 480,
    imageHeight: 350,
    description:
      "The High School Storytelling Competition has been consistently held since 2019. Participants will deliver an English story, emphasizing strong storytelling techniques, clear pronunciation, and effective communicative delivery.",
  },

  "middle-speech": {
    title: "Speech",
    subtitle: "Middle School (Regional)",
    price: "IDR. 75,000",
    dateDay: "17",
    dateMonth: "May 2026",
    image: "/images/competitions/SPEECH_SMP.png",
    imageWidth: 500,
    imageHeight: 340,
    description:
      "The Middle School Speech Competition is newly introduced at EFECTION IV. Participants will present a structured speech in English based on the designated theme and competition guidelines.",
  },

  "high-speech": {
    title: "Speech",
    subtitle: "High School (Regional)",
    price: "IDR. 85,000",
    dateDay: "17",
    dateMonth: "May 2026",
    image: "/images/competitions/SPEECH_SMA.png",
    imageWidth: 500,
    imageHeight: 340,
    description:
      "The High School Speech Competition is a recurring program at EFECTION. Participants will deliver an English speech with emphasis on organization, content development, language proficiency, and persuasive delivery.",
  },

  "university-debate": {
    title: "Debate",
    subtitle: "Varsity (Regional)",
    price: "IDR. 300,000",
    dateDay: "17 & 24",
    dateMonth: "May 2026",
    image: "/images/competitions/DEBATE.png",
    imageWidth: 580,
    imageHeight: 340,
    description:
      "The Varsity Debate Competition is being held for the first time at EFECTION IV and will follow the British Parliamentary format. Participants will compete in teams, debating assigned motions in English in accordance with the established debate system and rules.",
  },

  "open-story-writing": {
    title: "Story Writing",
    subtitle: "Open Category",
    price: {
      early: "8",
      regular: "10",
      late: "12",
    },
    dateDay: "31",
    dateMonth: "May 2026",
    image: "/images/competitions/STORYWRITING.png",
    imageWidth: 500,
    imageHeight: 380,
    description:
      "The Story Writing Competition invites participants to compose an original story in English based on the provided theme. Entries will be evaluated on creativity, originality, coherence, and effective use of language.",
  },
};

/* ================= PAGE ================= */

export default function CompetitionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = competitions[slug as keyof typeof competitions];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Competition not found
      </div>
    );
  }

  const isOpenStory = slug === "open-story-writing";

  return (
    <section className="relative min-h-screen bg-[#C09B6F] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url('/images/Hero/seamless3.webp')" }}
      />
      <div className="absolute inset-0 bg-[#2a241e]/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-30 md:py-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* IMAGE COLUMN */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-[#F4D35E] rounded-full shadow-2xl" />
              <Image
                src={data.image}
                alt={data.title}
                width={data.imageWidth}
                height={data.imageHeight}
                className="relative z-10 object-contain max-w-[80%] h-auto"
              />
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h1
              style={{ fontFamily: "Grenze, serif" }}
              className="text-white leading-tight drop-shadow-lg"
            >
              <span className="block text-[clamp(60px,6vw,90px)]">
                {data.title}
              </span>
            </h1>

            <p
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              className="text-[#F4D35E] mt-3 text-lg sm:text-xl"
            >
              ● {data.subtitle}
            </p>

            {/* MOBILE DATE */}
            <div className="mt-6 lg:hidden flex items-center justify-center gap-4">
              <div
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                className="text-[#F4D35E] font-bold text-5xl leading-none"
              >
                {data.dateDay}
              </div>

              <div className="w-[3px] h-10 bg-[#F4D35E] rounded-full" />

              <div className="flex flex-col items-center">
                <div
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  className="bg-[#F4D35E] px-4 py-2 rounded-xl text-black text-lg shadow-lg"
                >
                  {data.dateMonth}
                </div>

                {isOpenStory && (
                  <span className="text-sm text-white/90 font-medium mt-2 text-center">
                    Announcement Date
                  </span>
                )}
              </div>
            </div>

            <p
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              className="mt-6 text-white/90 text-base sm:text-lg leading-relaxed text-justify"
            >
              {data.description}
            </p>

            {/* PRICE */}
            <div className="mt-10">
              {isOpenStory ? (
                <div className="relative w-full max-w-3xl mx-auto">
                  {/* Line */}
                  <div className="absolute top-6 left-0 right-0 flex items-center px-[6%]">
                    <div className="relative w-full h-[2px] bg-gradient-to-r from-[#F4D35E]/20 via-[#F4D35E]/60 to-[#F4D35E]/20 rounded-full">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                        <div className="w-3 h-3 border-t-2 border-r-2 border-[#F4D35E]/60 rotate-45" />
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    {["early", "regular", "late"].map((tier) => (
                      <div
                        key={tier}
                        className="group flex-1 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-3 cursor-pointer"
                      >
                        <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          {tier === "early" && (
                            <div className="absolute w-16 h-16 rounded-full bg-[#F4D35E]/50 blur-xl transition-all duration-300 group-hover:bg-[#F4D35E]/40 group-hover:blur-2xl" />
                          )}

                          <div className="w-12 h-12 rounded-full border-2 border-[#F4D35E] bg-[#2a241e] shadow-lg group-hover:shadow-[0_0_40px_rgba(244,211,94,0.8)] transition-all duration-300 z-10 flex items-center justify-center">
                            <div className="w-4 h-4 bg-[#F4D35E] rounded-full transition-all duration-300 group-hover:scale-125" />
                          </div>
                        </div>

                        <p className="mt-5 text-[#F4D35E] font-semibold text-lg tracking-wide capitalize">
                          {tier === "early" ? "Early Bird" : tier}
                        </p>

                        <p className="text-white text-xl font-bold mt-1 transition-all duration-300 group-hover:scale-110 group-hover:text-[#F4D35E]">
                          ${data.price[tier as keyof typeof data.price]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                typeof data.price === "string" && (
                    <div className="text-[#F4D35E] font-bold text-[clamp(40px,4vw,50px)] drop-shadow-md">
                      {data.price}
                    </div>
                  )
              )}
            </div>

            {!isOpenStory && (
              <div className="block md:hidden w-4/6 mx-auto h-[6px] bg-[#F4D35E] my-4 rounded-full" />
            )}

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center lg:justify-start items-stretch sm:items-center w-full sm:w-auto">
              <a
                href="https://drive.google.com/drive/folders/1qrJfH5YMzKgjMeXhJKwfhIyVfWQ8D2Fq?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F1F1F1]/10 border border-[#F1F1F1] text-[#F1F1F1] px-8 py-4 rounded-xl text-2xl backdrop-blur-sm hover:bg-[#F4D35E]/50 transition font-[var(--font-plus-jakarta)] inline-block"
              >
                Learn More!
              </a>

              <a
                href={
                  isOpenStory
                    ? "https://docs.google.com/forms/d/e/1FAIpQLSfnS_mIXivrGGbYp2DFvacLxVK_TCZp6QzKlITBkZZtfSHcpw/viewform"
                    : "https://docs.google.com/forms/d/e/1FAIpQLSevBO-Wm3H_U2zQRjZt63FFl6pGCAYKxUw63WOwnAwvl7WTcA/viewform"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F4D35E] px-8 py-4 rounded-xl text-2xl shadow-[0_6px_0_rgba(0,0,0,0.3)] hover:translate-y-[-3px] transition font-[var(--font-plus-jakarta)]"
              >
                Register!
              </a>
            </div>
          </div>

          {/* DESKTOP DATE COLUMN */}
          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:col-span-2 text-center">
            {isOpenStory && (
              <span className="block text-white/90 font-semibold tracking-wide mb-4 text-[20px]">
                Announcement
              </span>
            )}

            <div className="text-[#F4D35E] font-bold text-[clamp(42px,5vw,90px)] leading-none">
              {data.dateDay}
            </div>

            <div className="w-2/3 mx-auto h-[6px] bg-[#F4D35E] my-4 rounded-full" />

            <div className="bg-[#F4D35E] px-4 py-2 rounded-xl text-black text-lg shadow-lg">
              {data.dateMonth}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </section>
  );
} 

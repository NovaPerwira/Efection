'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


/* ================= DATA ================= */

const competitions = {

  /* ================= STORYTELLING ================= */

  "middle-storytelling": {
    title: "Storytelling",
    subtitle: "Middle School (Regional)",
    price: "IDR. 75,000",
    dateDay: "24",
    dateMonth: "May 2026",
    image: "/images/competitions/STORYTELLING_SMP.png",
    imageWidth: 350,imageHeight: 200,
    description:
      "The SMP Story Telling Competition is held for the first time at EFECTION IV. Participants will orally deliver an English story before the judges, focusing on pronunciation, expression, and storytelling performance.",
  },

  "high-storytelling": {
    title: "Storytelling",
    subtitle: "High School (Regional)",
    price: "IDR. 85,000",
    dateDay: "24",
    dateMonth: "May 2026",
    image: "/images/competitions/STORYTELLING_SMA.png",
    imageWidth: 480,imageHeight: 350,
    description:
      "The SMA Story Telling Competition has been regularly held since 2019. Participants will deliver an English story, emphasizing storytelling skills and communicative delivery.",
  },

  /* ================= SPEECH ================= */

  "middle-speech": {
    title: "Speech",
    subtitle: "Middle School (Regional)",
    price: "IDR. 75,000",
    dateDay: "31",
    dateMonth: "May 2026",
    image: "/images/competitions/SPEECH_SMP.png",
    imageWidth: 500,imageHeight: 340,
    description:
      "The SMP Speech Competition is introduced for the first time at EFECTION IV. Participants will deliver a structured English speech based on the given theme and competition rules.",
  },

  "high-speech": {
    title: "Speech",
    subtitle: "High School (Regional)",
    price: "IDR. 85,000",
    dateDay: "31",
    dateMonth: "May 2026",
    image: "/images/competitions/SPEECH_SMA.png",
    imageWidth: 500,imageHeight: 340,
    description:
      "The SMA Speech Competition is a regularly held competition. Participants will deliver an English speech focusing on structure, content, and persuasive delivery.",
  },

  /* ================= DEBATE ================= */

  "university-debate": {
    title: "Debate",
    subtitle: "University",
    price: "IDR. 350,000",
    dateDay: "24-31",
    dateMonth: "May 2026",
    image: "/images/competitions/DEBATE.png",
    imageWidth: 580,imageHeight: 340,
    description:
      "The University Debate Competition is held for the first time at EFECTION IV using the British Parliamentary format. Participants will debate in teams in English based on the assigned motions and debate system.",
  },

  /* ================= STORY WRITING ================= */

  "open-story-writing": {
    title: "Story Writing",
    subtitle: "Open Category",
    price: "IDR. 50,000",
    dateDay: "24-31",
    dateMonth: "May 2026",
    image: "/images/competitions/STORYWRITING.png",
    imageWidth: 500,imageHeight: 380,
    description:
      "The Story Writing Competition invites participants to write an original story in English based on the given theme. Creativity, originality, and language use will be evaluated.",
  },

};

/* ================= PAGE ================= */

export default function CompetitionDetailPage() {

  const params = useParams();
  const slug = params.slug as string;

  const data =
    competitions[slug as keyof typeof competitions];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Competition not found
      </div>
    );
  }

  return (

    <section className="relative min-h-screen bg-[#C09B6F] overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('/images/aboutus/bg_overlay.png')",
        }}
      />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* GRID 12 KOLOM */}
        <div className="grid grid-cols-12 gap-8 items-center mt-10">

         {/* IMAGE AREA */}
          <div className="col-span-12 md:col-span-5 flex justify-center">

            {/* FIXED CONTAINER */}
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">

              {/* CIRCLE */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#F4D35E]
                  rounded-full
                  shadow-xl
                "
              />

              {/* IMAGE */}
              <Image
                src={data.image}
                alt={data.title}
                width={data.imageWidth}
                height={data.imageHeight}
                className="relative z-10 object-contain"
              />

            </div>

          </div>


          {/* CONTENT AREA */}
          <div className="col-span-12 md:col-span-5">

            {/* TITLE */}
            <h1
              className="
              font-[var(--font-grenze)]
              text-[80px]
              text-white
              leading-none
              drop-shadow-lg
              "
            >
              {data.title}
            </h1>


            {/* SUBTITLE */}
            <p
              className="
              text-yellow-300
              text-2xl
              mt-3
              font-[var(--font-plus-jakarta)]
              "
            >
              ● {data.subtitle}
            </p>


            {/* DESCRIPTION */}
            <p
              className="
              mt-6
              text-black
              text-xl
              leading-relaxed
              max-w-md
              font-[var(--font-plus-jakarta)]
              "
            >
              {data.description}
            </p>


            {/* PRICE */}
            <div
              className="
              mt-10
              text-yellow-400
              text-5xl
              font-bold
              drop-shadow
              font-[var(--font-plus-jakarta)]
              "
            >
              {data.price}
            </div>


            {/* BUTTONS */}
            <div className="flex gap-6 mt-10">

              <button
                className="
                bg-yellow-300
                px-8 py-4
                rounded-xl
                text-2xl
                shadow-[0_6px_0_rgba(0,0,0,0.3)]
                hover:translate-y-[-3px]
                transition
                font-[var(--font-plus-jakarta)]
                "
              >
                Learn More!
              </button>


              <button
                className="
                bg-yellow-300
                px-8 py-4
                rounded-xl
                text-2xl
                shadow-[0_6px_0_rgba(0,0,0,0.3)]
                hover:translate-y-[-3px]
                transition
                font-[var(--font-plus-jakarta)]
                "
              >
                Register!
              </button>
            </div>
          </div>


          {/* DATE AREA */}
          <div className="col-span-12 md:col-span-2 text-center">

            <div
              className="
              text-yellow-400
              text-[100px]
              leading-none
              font-bold
              font-[var(--font-plus-jakarta)]
              "
            >
              {data.dateDay}
            </div>


            <div className="w-full h-[6px] bg-yellow-400 my-4 rounded-full" />


            <div
              className="
              bg-yellow-300
              px-4 py-3
              rounded-lg
              text-2xl
              shadow-md
              font-[var(--font-plus-jakarta)]
              "
            >
              {data.dateMonth}
            </div>

          </div>


        </div>

      </div>

    </section>
    
  );
}



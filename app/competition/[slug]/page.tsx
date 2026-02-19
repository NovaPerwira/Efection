'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

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
      "The Middle School Storytelling Competition is being introduced for the first time at EFECTION IV. Participants will orally present a story in English before the judges, with assessment focusing on pronunciation, expression, confidence, and overall storytelling performance."
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
      "The High School Storytelling Competition has been consistently held since 2019. Participants will deliver an English story, emphasizing strong storytelling techniques, clear pronunciation, and effective communicative delivery."
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
      "The Middle School Speech Competition is newly introduced at EFECTION IV. Participants will present a structured speech in English based on the designated theme and competition guidelines.",
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
      "The High School Speech Competition is a recurring program at EFECTION. Participants will deliver an English speech with emphasis on organization, content development, language proficiency, and persuasive delivery.",
  },

  /* ================= DEBATE ================= */

  "university-debate": {
    title: "Debate",
    subtitle: "Varsity (Regional)",
    price: "IDR. 300,000",
    dateDay: "24 & 31",
    dateMonth: "May 2026",
    image: "/images/competitions/DEBATE.png",
    imageWidth: 580,imageHeight: 340,
    description:
      "The Varsity Debate Competition is being held for the first time at EFECTION IV and will follow the British Parliamentary format. Participants will compete in teams, debating assigned motions in English in accordance with the established debate system and rules.",
  },

  /* ================= STORY WRITING ================= */

  "open-story-writing": {
    title: "Story Writing",
    subtitle: "Open Category",
    price: "USD 8/10/12",
    dateDay: "24-31",
    dateMonth: "May 2026",
    image: "/images/competitions/STORYWRITING.png",
    imageWidth: 500,imageHeight: 380,
    description:
      "The Story Writing Competition invites participants to compose an original story in English based on the provided theme. Entries will be evaluated on creativity, originality, coherence, and effective use of language.",
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

const isOpenStory = slug === "open-story-writing";  

  return (

    <section className="relative min-h-screen bg-[#C09B6F] overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('/images/Hero/seamless3.png')",
        }}
      />
      <div className="absolute inset-0 bg-[#2a241e]/50 z-0 pointer-events-none" />
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
              text-[#F4D35E]
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
              text-justify
              font-[var(--font-plus-jakarta)]
              "
            >
              {data.description}
            </p>


            {/* PRICE */}
            <div
              className="
              mt-10
              text-[#F4D35E]
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

              <a
                href="https://drive.google.com/drive/folders/1qrJfH5YMzKgjMeXhJKwfhIyVfWQ8D2Fq?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-[#F4D35E]
                  px-8 py-4
                  rounded-xl
                  text-2xl
                  shadow-[0_6px_0_rgba(0,0,0,0.3)]
                  hover:translate-y-[-3px]
                  transition
                  font-[var(--font-plus-jakarta)]
                  inline-block
                "
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
                className="
                  bg-[#F4D35E]
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
              </a>
            </div>
          </div>


          {/* DATE AREA */}
          <div className="col-span-12 md:col-span-2 text-center">

            <div
              className="
              text-[#F4D35E]
              text-[100px]
              leading-none
              font-bold
              font-[var(--font-plus-jakarta)]
              "
            >
              {data.dateDay}
            </div>


            <div className="w-full h-[6px] bg-[#F4D35E] my-4 rounded-full" />


            <div
              className="
              bg-[#F4D35E]
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
      <Footer />
    </section>
    
  );
}



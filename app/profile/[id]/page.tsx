"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-white text-black overflow-x-hidden">

      {/* TOP WHITE HEADER */}
      <div className="w-full bg-white flex items-center justify-between px-4 md:px-6 py-4 shadow-sm">
        <Image src="/logo-left.png" width={90} height={50} alt="Left Logo" className="w-20 md:w-28" />
        <Image src="/logo-right.png" width={90} height={50} alt="Right Logo" className="w-20 md:w-28" />
      </div>

      {/* ORANGE HERO */}
      <div className="relative w-full bg-gradient-to-r from-orange-400 to-red-500 h-[220px] md:h-[260px] flex items-center justify-between px-4 md:px-10">

        {/* LEFT CONTACT */}
        <div className="flex gap-4 md:gap-6 text-white text-xs md:text-sm font-medium flex-wrap md:flex-nowrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/email.png" alt="email" width={18} height={18} />
            <span className="hidden sm:block">Email</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/phone.png" alt="phone" width={18} height={18} />
            <span className="hidden sm:block">Phone</span>
          </div>
        </div>

        {/* RIGHT BTN */}
        <button className="border border-white text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
          Download My Resume
        </button>

        {/* PERFECT PROFILE OVERLAP */}
        <div className="absolute left-1/2 md:-bottom-20 -bottom-16 -translate-x-1/2">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-[5px] md:border-[6px] border-white shadow-xl overflow-hidden bg-white">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* TOP-LEFT BACK BUTTON */}
      <div className="w-full flex justify-start px-4 md:px-6 mt-10">
        <button
          onClick={() => router.back()}
          className="text-orange-600 font-medium underline text-sm hover:text-orange-800"
        >
          ← Back
        </button>
      </div>

      {/* SPACER */}
      <div className="h-20"></div>

      {/* INTRO */}
      <div className="text-center mt-4 px-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Saksham Arora</h1>
        <p className="text-gray-600 mt-1 text-sm md:text-base">Male | 25 | He/Him</p>

        <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full text-sm">
          Watch my Visual Resume
        </button>
      </div>

      {/* SKILL NAV PILLS */}
      <div className="flex justify-center mt-10 px-4">
        <div className="bg-white border shadow-sm px-6 py-3 rounded-full flex gap-6 md:gap-10 text-xs md:text-sm text-gray-700 overflow-x-auto whitespace-nowrap">
          <span>Core Skills & Technical Proficiencies</span>
          <span>Professional Journey & Internship Roles</span>
          <span>Case Insights & Key Projects</span>
          <span>Learning & Academic Milestones</span>
          <span>Endorsements from Mentors & Peers</span>
        </div>
      </div>

      {/* ABOUT */}
      <div className="max-w-4xl mx-auto text-center mt-12 text-gray-700 leading-relaxed px-6 text-sm md:text-base">
        <p>
          I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024–2026),
          with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience,
          including boosting system scalability by 30% and earning the Rise Insta Award at Infosys
          for enhancing backend efficiency by 25%.
        </p>
        <br />
        <p>
          I have developed Python-based analytics tools during internships and drove a 20% rise in
          donations through strategic social media campaigns. Certified in SQL, Python, Java, and IoT,
          I have also delivered impactful projects like a ReactJS prototype for accessibility and a
          QR-based attendance system. My achievements in national contests showcase both my technical
          expertise and creative problem-solving.
        </p>
      </div>

      {/* SKILLS ICON GRID */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8 max-w-5xl mx-auto mt-12 opacity-60 px-6">
        {[
          { icon: "/ps.png", title: "Photoshop", subtitle: "Design" },
          { icon: "/js.png", title: "JavaScript", subtitle: "Frontend" },
          { icon: "/css.png", title: "CSS", subtitle: "Styling" },
          { icon: "/html.png", title: "HTML", subtitle: "Markup" },
          { icon: "/python.png", title: "Python", subtitle: "Data" },
          { icon: "/excel.png", title: "Excel", subtitle: "Sheets" },
          { icon: "/word.png", title: "Word", subtitle: "Docs" },
          { icon: "/ppt.png", title: "PowerPoint", subtitle: "Slides" },
        ].map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image src={s.icon} width={35} height={35} alt={s.title} className="w-8 md:w-10" />
            <p className="font-semibold text-xs md:text-sm mt-2">{s.title}</p>
            <p className="text-xs text-gray-600">{s.subtitle}</p>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <div className="max-w-6xl mx-auto mt-20 px-4 md:px-6">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-xl md:text-2xl font-semibold">Case Insights & Key Projects</h2>

          <div className="flex gap-3">
            <button className="px-4 py-1 border rounded-full text-sm">Case Studies</button>
            <button className="px-4 py-1 border rounded-full text-sm">Projects</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-10">
          {[
            { img: "/ondc.png", title: "ONDC Case Study" },
            { img: "/jal.png", title: "Jal Jeevan Mission" },
            { img: "/finance.png", title: "FinEasy Case Study" },
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4">
              <Image
                src={p.img}
                alt={p.title}
                width={400}
                height={240}
                className="rounded mb-4 w-full h-auto"
              />
              <p className="font-medium">{p.title}</p>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      {/* VISUAL RESUME */}
      <div className="max-w-5xl mx-auto mt-24 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Visual Resume</h2>

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <Image src="/video-preview.jpg" width={1200} height={700} alt="Video" className="w-full h-auto" />

          {/* YOUTUBE BADGE */}
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-1 rounded-full text-sm flex items-center gap-2">
            <Image src="/youtube.png" width={20} height={20} alt="yt" />
            YouTube
          </div>

          {/* BUTTON */}
          <button className="absolute bottom-4 right-4 bg-white/90 px-5 py-2 rounded-full text-sm font-medium">
            Watch the Full Video
          </button>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-10 rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with Saksham Arora</h2>

          <button className="bg-white text-orange-500 px-6 py-2 rounded-full text-sm font-medium">
            Download My Resume
          </button>
        </div>

        {/* FOOTER LINKS */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Image src="/email.png" width={16} height={16} alt="email" /> Email
          </div>
          <div className="flex items-center gap-1">
            <Image src="/phone.png" width={16} height={16} alt="phone" /> Phone
          </div>
          <div className="flex items-center gap-1">
            <Image src="/github.png" width={16} height={16} alt="github" /> GitHub
          </div>
          <div className="flex items-center gap-1">
            <Image src="/linkedin.png" width={16} height={16} alt="linkedin" /> LinkedIn
          </div>
        </div>

        <div className="w-full border-t mt-6"></div>

        <p className="text-center text-gray-500 text-lg mt-6 mb-10">
          <span className="text-1xl align-middle">®</span> 2024 MAHE B'LURU
        </p>

      </div>
    </div>
  );
}

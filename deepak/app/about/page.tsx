"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Mic,
  Film,
  Bike,
  MapPin,
  Calendar,
} from "lucide-react";
import { PhotoCollageFrame, PhotoCardItem } from "@/components/PhotoCollageFrame";

export default function AboutPage() {
  // Section 01 Portrait Stack Photos
  const portraitPhotos: PhotoCardItem[] = [
    {
      id: "deepak-portrait",
      src: "/images/about/deepak-portrait.jpg",
      caption: "Deepak Kumar Majhi — Building & Engineering",
      tag: "01 // PORTRAIT",
      rotation: 0,
      offsetX: 0,
      offsetY: 0,
      fannedRotation: -2,
      fannedX: 0,
      fannedY: -8,
      aspect: "aspect-[3/4]",
    },
    {
      id: "deepak-candid",
      src: "/images/about/deepak-candid.jpg",
      caption: "Candid Workspace & Systems Setup",
      tag: "02 // WORKSPACE",
      rotation: -6,
      offsetX: -22,
      offsetY: -16,
      fannedRotation: -12,
      fannedX: -55,
      fannedY: -35,
      aspect: "aspect-[4/3]",
    },
    {
      id: "deepak-camera",
      src: "/images/about/deepak-camera.jpg",
      caption: "Behind the Lens / Field Photography",
      tag: "03 // FIELDWORK",
      rotation: 5,
      offsetX: 22,
      offsetY: 18,
      fannedRotation: 10,
      fannedX: 55,
      fannedY: 35,
      aspect: "aspect-[4/3]",
    },
  ];

  // Section 02 Memory Stack Photos (Unified, no toggle buttons)
  const memoryPhotos: PhotoCardItem[] = [
    {
      id: "hackfest-stage",
      src: "/images/memories/summit-2.jpg",
      caption: "HackFest Bhubaneswar 2026 & AI Impact Summit",
      tag: "01 // STAGE",
      rotation: -4,
      offsetX: -18,
      offsetY: -12,
      fannedRotation: -11,
      fannedX: -55,
      fannedY: -30,
      aspect: "aspect-[4/3]",
    },
    {
      id: "team-19-sprint",
      src: "/images/memories/summit-1.jpg",
      caption: "Team-19 Sprint & Systems Development",
      tag: "02 // TEAM-19",
      rotation: 2,
      offsetX: 16,
      offsetY: -10,
      fannedRotation: 9,
      fannedX: 45,
      fannedY: -25,
      aspect: "aspect-[4/3]",
    },
    {
      id: "team-lounge",
      src: "/images/memories/summit-4.jpg",
      caption: "Team Collaboration & Strategy",
      tag: "03 // COLLABORATION",
      rotation: -2,
      offsetX: -8,
      offsetY: 15,
      fannedRotation: -6,
      fannedX: -30,
      fannedY: 30,
      aspect: "aspect-[4/3]",
    },
  ];

  // Section 05 Photography Accordion Viewfinder Cards
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  const photographyShots = [
    {
      id: "shot-01",
      path: "/images/photography/shot-01.jpg",
      title: "Tree Squirrel in Morning Light",
      location: "Wildlife & Nature Moment",
      iso: "ISO 100",
      aperture: "f/2.8",
      shutter: "1/500s",
      focal: "50mm",
    },
    {
      id: "shot-02",
      path: "/images/photography/shot-02.jpg",
      title: "Monsoon Dewdrops on Rose",
      location: "Macro Botanical Geometry",
      iso: "ISO 200",
      aperture: "f/1.8",
      shutter: "1/320s",
      focal: "35mm",
    },
    {
      id: "shot-03",
      path: "/images/photography/shot-03.jpg",
      title: "Little Monks in Martial Formation",
      location: "Art & Motion Study",
      iso: "ISO 400",
      aperture: "f/2.8",
      shutter: "1/200s",
      focal: "28mm",
    },
    {
      id: "shot-04",
      path: "/images/photography/shot-04.jpg",
      title: "Three Wise Monkeys Perspective",
      location: "Sculptural Reflections",
      iso: "ISO 400",
      aperture: "f/2.0",
      shutter: "1/160s",
      focal: "50mm",
    },
    {
      id: "shot-05",
      path: "/images/photography/shot-05.jpg",
      title: "Twilight Dusk & Tree Silhouettes",
      location: "Golden Hour Atmosphere",
      iso: "ISO 100",
      aperture: "f/4.0",
      shutter: "1/800s",
      focal: "85mm",
    },
  ];

  return (
    <div className="w-full bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto border-x border-[#192434]/[0.08]">
        {/* ========================================================= */}
        {/* SECTION 01 // HERO GREETING & OVERLAPPING PORTRAIT FRAME */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#192434]/10">
          {/* Left Column: Greeting & Narrative */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
            <div className="mb-4">

            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-light tracking-tight leading-[1.12] text-[#192434]">
              Hi, my name is Deepak.
              <br />
              <span className="text-[#0B46A3] font-normal">
                Nice to meet you.
              </span>
            </h1>
            {/* Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#F4F7FA] bg-[#192434] hover:bg-[#0B46A3] transition-all shadow-sm cursor-pointer"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F4F7FA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="https://www.linkedin.com/in/deepakmajhihello/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#192434] bg-white border border-[#192434]/25 hover:border-[#0B46A3] hover:text-[#0B46A3] transition-all cursor-pointer"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0B46A3] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Overlapping 3-Photo Frame */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-[#192434]/10 flex flex-col items-center justify-center bg-[#192434]/[0.015]">
            <PhotoCollageFrame photos={portraitPhotos} />
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 02 // MY STORY & FIELD MEMORIES (SWAPPED SIDES)  */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#192434]/10">
          {/* Left Column: Photo Stack (No toggle, clean single memory frame) */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#192434]/10 flex items-center justify-center bg-[#192434]/[0.015]">
            <PhotoCollageFrame photos={memoryPhotos} />
          </div>

          {/* Right Column: Authentic Story Narrative */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-6">
            <div>


              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#192434] uppercase tracking-tight leading-tight">
                Curious by nature, builder by habit.
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#192434]/80 font-light leading-relaxed">
              <p>
                My path into technology didn’t start with memorizing textbook
                algorithms—it started with sheer curiosity about how software
                quietly coordinates the world around us. That drive led me to start
                building early: turning raw ideas into functional systems,
                experimenting with language models, and creating software that
                solves concrete problems rather than existing as theoretical code.
              </p>
              <p>
                I believe engineers grow fastest outside four walls. Traveling to{" "}
                <strong className="font-medium text-[#192434]">
                  New Delhi for the AI Impact Summit
                </strong>{" "}
                offered a direct look at defense automation, robotics, and
                large-scale engineering dialogues. At the same time, teaming up
                with close peers at{" "}
                <strong className="font-medium text-[#192434]">
                  HackFest Bhubaneswar 2026
                </strong>{" "}
                and Google Developer Group sprints showed me the electricity of
                shipping resilient prototypes under high-pressure clocks.
              </p>
              <p>
                Right now, I am challenging myself with a{" "}
                <strong className="font-medium text-[#0B46A3]">
                  60-day unscripted public speaking log
                </strong>
                —recording daily 10-to-15-minute raw reflections on AI,
                science, and engineering. It forces me to strip away buzzwords,
                stress-test my understanding, and articulate complex concepts
                with genuine clarity.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 03 // PHILOSOPHY & ICEBERG (IMAGE + EXPLANATION)   */}
        {/* ========================================================= */}
        <section className="border-b border-[#192434]/10">
          <div className="p-6 sm:p-10 lg:px-14 py-8 border-b border-[#192434]/10">

            <h2 className="text-2xl sm:text-3xl font-light text-[#192434] uppercase tracking-tight">
              The Elements of Building
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#192434]/10">
            {/* Left Column: Attached Iceberg Image */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex items-center justify-center bg-white">
              <div className="relative w-full max-w-[400px] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/iceberg.jpg"
                  alt="The Elements of Building Iceberg"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column: Layered Depth Explanation */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5 bg-[#F4F7FA]">
              <div className="space-y-4">
                {/* 1. Surface */}
                <div className="space-y-0.5 border-l-2 border-[#0B46A3] pl-3.5">
                  <h3 className="text-sm font-medium text-[#192434]">
                    Surface
                  </h3>
                  <p className="text-xs text-[#192434]/75 font-light leading-relaxed">
                    User Interface, Visual Design System, Components, Content, Typography, Color, Motion, Design Strategy
                  </p>
                </div>

                {/* 2. Skeleton */}
                <div className="space-y-0.5 border-l-2 border-[#192434]/25 pl-3.5">
                  <h3 className="text-sm font-medium text-[#192434]">
                    Skeleton
                  </h3>
                  <p className="text-xs text-[#192434]/75 font-light leading-relaxed">
                    Wireframes
                  </p>
                </div>

                {/* 3. Structure */}
                <div className="space-y-0.5 border-l-2 border-[#192434]/25 pl-3.5">
                  <h3 className="text-sm font-medium text-[#192434]">
                    Structure
                  </h3>
                  <p className="text-xs text-[#192434]/75 font-light leading-relaxed">
                    Information Architecture, User flows
                  </p>
                </div>

                {/* 4. Scope */}
                <div className="space-y-0.5 border-l-2 border-[#192434]/25 pl-3.5">
                  <h3 className="text-sm font-medium text-[#192434]">
                    Scope
                  </h3>
                  <p className="text-xs text-[#192434]/75 font-light leading-relaxed">
                    Requirements, Prioritization, Roadmaps
                  </p>
                </div>

                {/* 5. Strategy */}
                <div className="space-y-0.5 border-l-2 border-[#192434]/25 pl-3.5">
                  <h3 className="text-sm font-medium text-[#192434]">
                    Strategy
                  </h3>
                  <p className="text-xs text-[#192434]/75 font-light leading-relaxed">
                    Value Proposition, User Research, Concept Development, Design Process, Validation, Prototyping
                  </p>
                </div>

                {/* 6. Touchpoint */}
                <div className="space-y-0.5 border-l-2 border-[#192434]/25 pl-3.5">
                  <h3 className="text-sm font-medium text-[#192434]">
                    Touchpoint
                  </h3>
                  <p className="text-xs text-[#192434]/75 font-light leading-relaxed">
                    Customer Support, Marketing, PR, Privacy
                  </p>
                </div>
              </div>

              {/* Attribution */}
              <div className="pt-3 border-t border-[#192434]/10 text-[11px] font-mono text-[#192434]/50">
                Illustration based on the book &apos;The Elements of User Experience&apos; by Jesse James Garrett
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 04 // OFFLINE MODE BENTO */}
        {/* ========================================================= */}
        <section className="border-b border-[#192434]/10">
          <div className="p-6 sm:p-10 lg:px-14 py-8 border-b border-[#192434]/10">

            <h2 className="text-2xl sm:text-3xl font-light text-[#192434] uppercase tracking-tight">
              What I do in my free time.
            </h2>
          </div>

          {/* 2x2 Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#192434]/10">
            {/* Bento Card 1: Photography */}
            <div className="p-6 sm:p-8 space-y-3 hover:bg-white/40 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[#0B46A3]/30 bg-[#0B46A3]/5 flex items-center justify-center text-[#0B46A3]">
                  <Camera className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#192434]">
                  Digital &amp; Street Photography
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#192434]/75 font-light leading-relaxed">
                Capturing geometry in urban architecture, directional morning
                light, and candid human expressions around Odisha. Photography
                sharpens how I think about layout, negative space, and visual rhythm.
              </p>
            </div>

            {/* Bento Card 2: Unscripted Speaking */}
            <div className="p-6 sm:p-8 space-y-3 hover:bg-white/40 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[#0B46A3]/30 bg-[#0B46A3]/5 flex items-center justify-center text-[#0B46A3]">
                  <Mic className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#192434]">
                  60-Day Unscripted Speaking Logs
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#192434]/75 font-light leading-relaxed">
                Turning on the camera every day to speak for 10 to 15 minutes
                unscripted about technical breakthroughs, cognitive models,
                and lessons from building. It trains presence, removes filler,
                and builds natural conviction.
              </p>
            </div>

            {/* Bento Card 3: Cinema & Mystery Thrillers */}
            <div className="p-6 sm:p-8 space-y-3 hover:bg-white/40 transition-colors border-t md:border-t border-[#192434]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[#0B46A3]/30 bg-[#0B46A3]/5 flex items-center justify-center text-[#0B46A3]">
                  <Film className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#192434]">
                  Cinema &amp; Mystery Thrillers
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#192434]/75 font-light leading-relaxed">
                Nothing beats watching tight narrative mysteries and
                psychological thrillers on the big screen. I admire stories that
                respect the audience’s intelligence—tight pacing, hidden
                clues, and unexpected reveals.
              </p>
            </div>

            {/* Bento Card 4: Scooter Rides & Chai */}
            <div className="p-6 sm:p-8 space-y-3 hover:bg-white/40 transition-colors border-t md:border-t border-[#192434]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[#0B46A3]/30 bg-[#0B46A3]/5 flex items-center justify-center text-[#0B46A3]">
                  <Bike className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-[#192434]">
                  Evening Scooter Rides &amp; Chai
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#192434]/75 font-light leading-relaxed">
                After intense build sessions and screen marathons, winding down
                means jumping on a scooter with friends, grabbing tea at roadside
                stalls, and having unfiltered conversations under the evening sky.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 05 // A PEEK THROUGH MY LENS (VIEWFINDER DECK)     */}
        {/* ========================================================= */}
        <section className="p-6 sm:p-10 lg:p-14 space-y-6">
          <div className="border-b border-[#192434]/10 pb-4">

            <h2 className="text-2xl sm:text-3xl font-light text-[#192434] uppercase tracking-tight">
              A small peek into my photography.
            </h2>
          </div>

          {/* Interactive Single-Row Accordion Viewfinder Deck */}
          <div className="w-full h-[360px] sm:h-[420px] flex flex-col md:flex-row gap-2 sm:gap-3">
            {photographyShots.map((shot, idx) => {
              const isSelected = activePhotoIdx === idx;
              return (
                <div
                  key={shot.id}
                  onClick={() => setActivePhotoIdx(idx)}
                  onMouseEnter={() => setActivePhotoIdx(idx)}
                  className={`relative cursor-pointer transition-all duration-500 ease-out border border-[#192434]/20 bg-[#0D131D] overflow-hidden ${isSelected
                    ? "md:flex-[3] flex-1 border-[#0B46A3] shadow-lg ring-1 ring-[#0B46A3]/40"
                    : "md:flex-1 flex-[0.7] opacity-80 hover:opacity-100"
                    }`}
                >
                  {/* Actual Photo Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.path}
                    alt={shot.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient Overlay for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45 pointer-events-none" />

                  {/* Viewfinder Rule-of-Thirds Gridlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-25">
                    <div className="w-full h-full grid grid-cols-3 grid-rows-3 border border-white/20">
                      <div className="border-r border-b border-white/20" />
                      <div className="border-r border-b border-white/20" />
                      <div className="border-b border-white/20" />
                      <div className="border-r border-b border-white/20" />
                      <div className="border-r border-b border-white/20" />
                      <div className="border-b border-white/20" />
                      <div className="border-r border-b border-white/20" />
                      <div className="border-r border-b border-white/20" />
                      <div />
                    </div>
                  </div>

                  {/* Camera Corner Reticles (+) */}
                  <span className="absolute top-2 left-2 text-[11px] font-mono text-white/90 font-bold z-10">
                    +
                  </span>
                  <span className="absolute top-2 right-2 text-[11px] font-mono text-white/90 font-bold z-10">
                    +
                  </span>
                  <span className="absolute bottom-2 left-2 text-[11px] font-mono text-white/90 font-bold z-10">
                    +
                  </span>
                  <span className="absolute bottom-2 right-2 text-[11px] font-mono text-white/90 font-bold z-10">
                    +
                  </span>

                  {/* Viewfinder Content Container */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between p-3 select-none text-white">
                    {/* Top HUD Telemetry */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-white/90">
                      <span className="font-semibold text-[#60A5FA] px-1.5 py-0.5 bg-black/50 border border-white/20">
                        0{idx + 1}
                      </span>
                      <span className="truncate pl-2 text-[10px] bg-black/40 px-1.5 py-0.5 border border-white/10">
                        {shot.focal} • {shot.aperture}
                      </span>
                    </div>

                    {/* Bottom HUD Specs */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-white/90 pt-1 border-t border-white/20 bg-black/50 px-2.5 py-1 backdrop-blur-xs">
                      <span>{shot.shutter}</span>
                      <span className="text-[#60A5FA] font-medium">{shot.iso}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

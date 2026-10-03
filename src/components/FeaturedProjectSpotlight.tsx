import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, MapPin, Instagram, Dumbbell, Users, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import asFitnessImg from '../assets/images/as_fitness_gym_hero_1791020755105.jpg';

interface FeaturedProjectSpotlightProps {
  onOpenCaseStudy: () => void;
}

export const FeaturedProjectSpotlight: React.FC<FeaturedProjectSpotlightProps> = ({
  onOpenCaseStudy,
}) => {
  const [activeGymTab, setActiveGymTab] = useState<'programs' | 'facilities' | 'trainers' | 'schedule'>('programs');

  const gymPrograms = [
    {
      title: 'Hypertrophy & Strength Training',
      level: 'All Fitness Levels',
      desc: 'Progressive overload protocols, calibrated Olympic bar sets, heavy dumbbell stations, and dedicated power racks.',
      focus: 'Muscle hypertrophy & structural strength',
    },
    {
      title: 'Functional & High-Intensity Conditioning',
      level: 'Intermediate to Advanced',
      desc: 'Dynamic kettlebell circuits, battle ropes, plyometrics, and stamina conditioning for athletic cardiovascular output.',
      focus: 'Endurance, stamina & metabolic rate',
    },
    {
      title: 'Body Recomposition & Fat Loss',
      level: 'Beginner to Advanced',
      desc: 'Custom macro-guided nutrition templates paired with resistance training and steady-state recovery cardio.',
      focus: 'Caloric balance & body toning',
    },
    {
      title: 'One-on-One Elite Coaching',
      level: 'Personalized Coaching',
      desc: 'Dedicated private trainer assessing biomechanics, form refinement, injury prevention, and weekly progress accountability.',
      focus: 'Direct mentorship & form mastery',
    },
  ];

  const gymFacilities = [
    { name: 'Heavy Free Weights Zone', desc: 'Dumbbells ranging from 2.5kg to 50kg, certified Olympic barbells, and adjustable benches.' },
    { name: 'Isolated Machine Circuit', desc: 'Biomechanically engineered plate-loaded pin machines for precise muscle stimulation.' },
    { name: 'Dedicated Cardio Deck', desc: 'High-grade commercial treadmills, air bikes, rowing machines, and stair climbers.' },
    { name: 'Functional Turf & Calisthenics', desc: 'Sprint sled track, pull-up rigs, suspension trainers, and stretching recovery mats.' },
  ];

  const trainers = [
    { name: 'Head Strength Coach', spec: 'Biomechanics & Hypertrophy', exp: 'Certified S&C Specialist' },
    { name: 'Senior Functional Coach', spec: 'HIIT & Mobility Conditioning', exp: 'Certified Athletic Trainer' },
    { name: 'Female Fitness Specialist', spec: 'Posture, Core & Toning', exp: 'Certified Personal Trainer' },
  ];

  const schedules = [
    { time: '06:00 AM - 07:00 AM', name: 'Morning Strength & Power', coach: 'Head Coach' },
    { time: '07:30 AM - 08:30 AM', name: 'Functional HIIT Circuit', coach: 'Conditioning Team' },
    { time: '05:30 PM - 06:30 PM', name: 'Hypertrophy Masterclass', coach: 'Head Coach' },
    { time: '07:00 PM - 08:00 PM', name: 'Evening Conditioning & Core', coach: 'Functional Coach' },
  ];

  return (
    <section id="featured-project" className="py-24 bg-[#0a0a0f] border-t border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Featured Project Case Study</span>
              <span>·</span>
              <span className="text-zinc-400">Client Project</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-display">
              AS Fitness Fusion
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 mt-2">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Akola, Maharashtra</span>
              </span>
              <span>·</span>
              <span>Fitness & Gym Digital Presence</span>
              <span>·</span>
              <span className="text-amber-300 font-medium">A prominent fitness project from Akola</span>
            </div>
          </div>

          <button
            onClick={onOpenCaseStudy}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-amber-400/10"
          >
            <span>View AS Fitness Fusion Project</span>
            <span>→</span>
          </button>
        </div>

        {/* Visual Showcase Card with Real Generated Interior Image */}
        <div className="rounded-3xl bg-[#0f0f18] border border-white/[0.08] overflow-hidden shadow-2xl mb-12">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-900">
            <img
              src={asFitnessImg}
              alt="AS Fitness Fusion Gym Interior in Akola"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Dark gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f18] via-[#0f0f18]/40 to-transparent" />

            {/* Overlaid Title & Quick Specs */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-amber-400/30">
                  Akola Fitness Landmark
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-display">
                  Digital Portal & Member Acquisition
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hi%20Tanishq,%20I%20am%20interested%20in%20a%20fitness%20website%20like%20AS%20Fitness%20Fusion.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold inline-flex items-center gap-1.5 backdrop-blur-md transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>
          </div>

          {/* Structured Challenge & Approach Breakdown */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-b border-white/[0.06]">
            {/* The Challenge */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-amber-400" />
                <h4 className="text-sm uppercase tracking-wider text-zinc-400 font-semibold">
                  The Challenge
                </h4>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Gyms in tier-2 cities like Akola often rely solely on scattered Instagram stories or word-of-mouth. Prospective gym-goers wanting to verify equipment quality, trainer credentials, class timings, and membership options frequently face friction, leading to lost inquiries.
              </p>
            </div>

            {/* The Approach */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-emerald-400" />
                <h4 className="text-sm uppercase tracking-wider text-zinc-400 font-semibold">
                  The Approach
                </h4>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                We designed a dedicated digital experience structured around visceral proof of the training floor, transparent program curriculum, trainer credibility, and an immediate WhatsApp action path where users can claim a complimentary day trial in two taps.
              </p>
            </div>
          </div>

          {/* Interactive Live Gym Experience Simulation */}
          <div className="p-6 sm:p-8 bg-[#0b0b12]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white font-display">
                  Interactive Gym Experience Simulator
                </h4>
                <p className="text-xs text-zinc-400">
                  Explore how members interact with programs, facilities, trainers, and schedules.
                </p>
              </div>

              {/* Segmented Tab Control */}
              <div className="flex items-center gap-1 p-1 bg-zinc-900/90 rounded-xl border border-white/5">
                {(['programs', 'facilities', 'trainers', 'schedule'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveGymTab(tab)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors capitalize ${
                      activeGymTab === tab
                        ? 'bg-amber-400 text-black shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab 1: Programs */}
            {activeGymTab === 'programs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gymPrograms.map((prog) => (
                  <div
                    key={prog.title}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/30 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-2">
                      <span className="flex items-center gap-1.5">
                        <Dumbbell className="w-3.5 h-3.5" />
                        <span>Program</span>
                      </span>
                      <span className="text-zinc-400 font-normal">{prog.level}</span>
                    </div>
                    <h5 className="text-base font-bold text-white mb-2">{prog.title}</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-3">{prog.desc}</p>
                    <div className="text-[11px] text-zinc-300 font-medium pt-2 border-t border-white/5 flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>{prog.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Facilities */}
            {activeGymTab === 'facilities' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gymFacilities.map((fac) => (
                  <div
                    key={fac.name}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  >
                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Gym Facility</span>
                    </div>
                    <h5 className="text-base font-bold text-white mb-2">{fac.name}</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">{fac.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Trainers */}
            {activeGymTab === 'trainers' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {trainers.map((tr) => (
                  <div
                    key={tr.name}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">{tr.name}</h5>
                    <p className="text-xs text-amber-400/90 font-medium mb-1">{tr.spec}</p>
                    <p className="text-[11px] text-zinc-400">{tr.exp}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Schedule */}
            {activeGymTab === 'schedule' && (
              <div className="space-y-2.5">
                {schedules.map((sc) => (
                  <div
                    key={sc.time}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] gap-2 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="font-semibold text-white text-sm">{sc.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-400">
                      <span>Led by: <strong className="text-zinc-200">{sc.coach}</strong></span>
                      <span className="font-mono text-amber-300">{sc.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Direct Onboarding Actions */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Gym Location: Akola, Maharashtra (Central location with easy parking)</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${PROFILE_INFO.phoneClean}?text=Hello%20AS%20Fitness%20Fusion,%20I%20would%20like%20to%20book%20a%20free%20trial%20session.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Trial Booking</span>
                </a>

                <button
                  onClick={onOpenCaseStudy}
                  className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
                >
                  Full Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

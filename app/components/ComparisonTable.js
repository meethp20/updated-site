"use client";
import { Check, X, Minus } from "lucide-react";
import { motion } from "framer-motion";

const comparisonData = [
  {
    criterion: "Cost",
    lime: { text: "Fixed & Transparent ($)", positive: true },
    agency: { text: "$$$$ (High Overhead & Retainers)", positive: false },
    freelancer: { text: "$$ (Variable / Hourly)", negative: true },
  },
  {
    criterion: "Speed",
    lime: { text: "4 Weeks Guaranteed", positive: true },
    agency: { text: "3-6 Months average", positive: false },
    freelancer: { text: "Unpredictable timeline", negative: true },
  },
  {
    criterion: "Team",
    lime: { text: "Full Product Team (PM + Dev + Design)", positive: true },
    agency: { text: "Account Managers + Outsourced Devs", positive: false },
    freelancer: { text: "One person doing everything", negative: true },
  },
  {
    criterion: "Quality Assurance",
    lime: { text: "Rigorous Testing Included", positive: true },
    agency: { text: "Billable extra hours", positive: false },
    freelancer: { text: "You are the tester", negative: true },
  },
  {
    criterion: "Communication",
    lime: { text: "Daily Slack Updates", positive: true },
    agency: { text: "Weekly formal emails", positive: false },
    freelancer: { text: "Ghosting is common", negative: true },
  },
  {
    criterion: "Post-Launch",
    lime: { text: "30 Days Support Included", positive: true },
    agency: { text: "Expensive Maintenance Contract", positive: false },
    freelancer: { text: "Hourly rate applies", negative: true },
  },
];

export default function ComparisonTable() {
  return (
    <motion.section
      id="comparison"
      className="relative py-16 md:py-20 bg-gray-50 px-4 md:px-6 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Decorative Background Blobs - top-left to bottom-right */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-coolvetica tracking-wide text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Compare the
            </span>{" "}
            <span className="inline-block px-2 py-1 rounded-full bg-lime-400 text-black shadow-sm shadow-lime-400/40">
              value.
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Where <span className="font-semibold text-gray-900">Lime Green Studio</span> wins on
            speed, cost, and focus.
          </p>
        </div>

        {/* Single responsive table (shrunk for mobile) */}
        <div className="relative overflow-x-auto pb-6 md:pb-8">
          <div className="min-w-[700px] md:min-w-0">
            {/* Column Headers (Outside the card) */}
            <div className="grid grid-cols-[170px_1fr_1fr_1fr] gap-2.5 mb-4 px-3 md:grid-cols-[190px_1fr_1fr_1fr] md:gap-3.5 md:mb-6 md:px-5 items-center">
              <div /> {/* Empty for criterion column */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/60 bg-white/70 px-5 py-2 shadow-sm shadow-lime-400/30">
                  <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-lime-400 opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500 shadow-[0_0_14px_rgba(190,242,100,0.95)]" />
                  </span>
                  <span className="font-coolvetica text-base md:text-lg tracking-wide font-bold text-gray-900 leading-none">
                    Lime Green Studio
                  </span>
                  <span className="hidden md:inline-flex items-center rounded-full bg-lime-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-lime-700">
                    Best value
                  </span>
                </div>
              </div>
              <div className="font-coolvetica text-sm md:text-lg tracking-wide font-bold text-gray-400/80 flex items-center justify-start leading-none">
                Typical agency
              </div>
              <div className="font-coolvetica text-sm md:text-lg tracking-wide font-bold text-gray-400/80 flex items-center justify-start leading-none">
                Freelancer
              </div>
            </div>

            {/* The Main Card */}
            <div className="bg-white rounded-[1.5rem] md:rounded-[1.75rem] shadow-sm border border-gray-100 overflow-hidden">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[170px_1fr_1fr_1fr] md:grid-cols-[190px_1fr_1fr_1fr] border-b border-gray-100 last:border-0 group"
                >
                  {/* Criterion Column (Sidebar style) */}
                  <div
                    className={`p-3.5 md:p-5 bg-gray-50 text-gray-700 font-semibold text-base md:text-lg flex items-center ${
                      index === 0 ? "rounded-tl-[2rem]" : ""
                    } ${
                      index === comparisonData.length - 1
                        ? "rounded-bl-[2rem]"
                        : ""
                    }`}
                  >
                    {row.criterion}
                  </div>

                  {/* Lime Value */}
                  <div className="p-3.5 md:p-5 flex items-center gap-2.5 text-gray-900 font-medium bg-white group-hover:bg-lime-50/30 transition-colors">
                    <Check className="w-5 h-5 text-lime-500 shrink-0 stroke-[3]" />
                    <span className="text-sm md:text-base">{row.lime.text}</span>
                  </div>

                  {/* Agency Value */}
                  <div className="p-3.5 md:p-5 flex items-center gap-2.5 text-gray-500 bg-white">
                    {row.agency.positive ? (
                      <Check className="w-5 h-5 text-lime-500 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                    <span className="text-sm md:text-base">{row.agency.text}</span>
                  </div>

                  {/* Freelancer Value */}
                  <div className="p-3.5 md:p-5 flex items-center gap-2.5 text-gray-500 bg-white">
                    {row.freelancer.positive ? (
                      <Check className="w-5 h-5 text-lime-500 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-orange-400 shrink-0" />
                    )}
                    <span className="text-sm md:text-base">
                      {row.freelancer.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

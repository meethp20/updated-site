"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Code, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Discovery & Research",
    description:
      "We dive deep into your market, analyzing competitors and identifying opportunities to ensure a solid foundation.",
    icon: Search,
    week: "Week 1",
  },
  {
    id: "2",
    title: "Development",
    description:
      "Our engineers build your product using scalable, modern tech stacks, focusing on performance and reliability.",
    icon: Code,
    week: "Week 2",
  },
  {
    id: "3",
    title: "Testing & Launch",
    description:
      "Rigorous beta testing ensures a bug-free experience before we deploy your product to the world.",
    icon: Rocket,
    week: "Week 3",
  },
  {
    id: "4",
    title: "Growth Strategy",
    description:
      "We don't just launch; we execute a data-driven marketing plan to acquire your first users and scale.",
    icon: BarChart3,
    week: "Week 4",
  },
];

const Process = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setActiveCardIndex(null);
        return;
      }

      const viewportHeight = window.innerHeight;
      const centerLine = viewportHeight / 2;
      // Narrow band so highlight only when the card passes the true middle
      const activationRange = viewportHeight * 0.2;

      let closestIndex = null;
      let minDistance = Infinity;

      steps.forEach((_, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerLine - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (minDistance <= activationRange && closestIndex !== null) {
        setActiveCardIndex(closestIndex);
      } else {
        setActiveCardIndex(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="process"
      className="relative w-full py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-4xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 text-lime-600 font-semibold tracking-wide uppercase text-xs md:text-sm"
          >
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
            Our Process
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-coolvetica tracking-wide font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.05]"
          >
            From concept to{" "}
            <span className="relative inline-block">
              market‑ready
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-lime-300/40 -rotate-1 rounded-full -z-10" />
            </span>{" "}
            in 4 weeks.
          </motion.h2>

          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            A simple, four-step path from idea to launch — with strategy,
            build, testing, and growth baked in.
          </p>
        </div>

        {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const isActive = activeCardIndex === index;
            return (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                animate={isActive ? { y: -8 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className={`group relative bg-white rounded-[2.5rem] p-8 shadow-sm transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col justify-between min-h-[320px] ${
                  isActive
                    ? "md:shadow-sm md:hover:shadow-xl shadow-xl shadow-lime-500/10"
                    : "md:hover:shadow-xl md:hover:shadow-lime-500/10"
                }`}
              >
                {/* Card Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header: Icon & Week */}
                  <div className="flex justify-between items-center">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-lime-50 transition-all duration-500 flex items-center justify-center text-lime-600 ${
                        isActive
                          ? "md:group-hover:bg-lime-400 md:group-hover:scale-110 md:group-hover:text-white bg-lime-400 scale-110 text-white"
                          : "md:group-hover:bg-lime-400 md:group-hover:scale-110 md:group-hover:text-white"
                      }`}
                    >
                      <step.icon size={26} strokeWidth={2} />
                    </div>
                    <span
                      className={`px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "md:group-hover:bg-gray-900 md:group-hover:text-white bg-gray-900 text-white"
                          : "md:group-hover:bg-gray-900 md:group-hover:text-white"
                      }`}
                    >
                      {step.week}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <h3
                      className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${
                        isActive
                          ? "md:group-hover:text-lime-600 text-lime-600"
                          : "md:group-hover:text-lime-600"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bottom visuals */}

                {/* Decorative Big Number */}
                <div
                  className={`absolute -bottom-10 -right-8 text-[12rem] font-bold text-gray-200/60 pointer-events-none transition-colors duration-500 select-none leading-none ${
                    isActive
                      ? "md:group-hover:text-lime-200/50 text-lime-200/50"
                      : "md:group-hover:text-lime-200/50"
                  }`}
                >
                  {step.id}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

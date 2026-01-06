"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ck from "../../public/screenshots/ck.png";
import align from "../../public/screenshots/align.png";
import rmp from "../../public/screenshots/rmp.png";
import tc from "../../public/screenshots/tc.png";

import { useEffect, useState } from "react";

export default function Hero() {
  const images = [align, rmp, tc, ck];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      const handleLoad = () => setLoaded(true);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const marqueeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen md:mx-auto flex items-center justify-center">
      {/* Outer subtle border */}
      <div className="relative flex flex-col items-center justify-start w-full md:mx-7 h-screen md:h-[95vh] md:border border-gray-300 md:rounded-3xl bg-white/70 backdrop-blur-sm overflow-hidden">
        {/* Elliptical Hugging Gradient */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[150%] z-2 animate-hero-gradient-rise h-[150%] bg-[radial-gradient(circle_at_99%_1%,_#ffffff_50%,_#D8FF00_70%,_#ABFF00_90%)] md:bg-[radial-gradient(circle_at_50%_1%,_#ffffff_50%,_#D8FF00_70%,_#ABFF00_90%)]"></div>
        </div>

        <div className="absolute inset-0 bg-noise z-5 pointer-events-none" />

        {/* Fade to dark for Lottie transition */}
        <div className="hidden md:block pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-32 z-10 bg-gradient-to-b from-transparent to-[#0b1220]" />

        {/* Hero Content with bg-noise */}
        <motion.div
          className={`relative z-10 w-full text-left md:text-center px-6 md:px-12 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-8
            transition-opacity duration-700 ease-out`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-coolvetica tracking-wide text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal mb-3 md:mb-4"
            variants={textVariants}
          >
            Solving Problems
            <br className="" /> by Shipping{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-1 md:px-5 md:py-2 inline-block font-bold rounded-lg shadow-lg">
              Products
            </span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-700/70 font-sans mb-8"
            variants={textVariants}
          >
            We take your idea from <span className="font-semibold">0 to 1</span>{" "}
            in just <span className="font-semibold italic">4 weeks</span>
          </motion.p>

          <motion.div variants={textVariants}>
            <a
              href="#start-shipping"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black bg-lime-400 rounded-full shadow-lg shadow-lime-400/30 hover:bg-lime-500 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Start Shipping
            </a>
          </motion.div>
        </motion.div>

        {/* Mobile Marquee - Visible only on mobile */}
        <motion.div
          className="relative z-50 flex md:hidden items-center justify-center flex-1 w-full overflow-hidden"
          variants={marqueeVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...images, ...images, ...images].map((img, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  className="w-[440px] h-auto rounded-2xl shadow-2xl"
                  src={img}
                  alt={`screenshot ${index}`}
                  priority={index < 4}
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
                  }}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Desktop Stacked Images - Hidden on mobile */}
        <div className="relative z-50 md:-translate-y-5 lg:translate-y-0 md:scale-120 lg:scale-105 hidden md:flex items-end justify-center flex-1 w-full ">
          {/* Container for all stacked images */}
          <div className="relative flex items-end justify-center w-full h-full">
            {/* Left Image (wing) - starts stacked in center */}
            <div className="absolute animate-wing-left">
              <Image
                className="w-[340px] lg:w-[450px] xl:w-[520px] h-auto rounded-xl md:rounded-2xl shadow-2xl"
                src={rmp}
                alt="screenshot of rmp"
                priority
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                }}
              />
            </div>

            {/* Center Image (main) */}
            <div className="relative z-10 animate-pop-up">
              <Image
                className="w-[380px] lg:w-[550px] xl:w-[650px] h-auto rounded-xl md:rounded-2xl shadow-2xl"
                src={align}
                alt="screenshot of align"
                priority
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                }}
              />
            </div>

            {/* Right Image (wing) - starts stacked in center */}
            <div className="absolute animate-wing-right">
              <Image
                className="w-[340px] lg:w-[450px] xl:w-[520px] h-auto rounded-xl md:rounded-2xl shadow-2xl"
                src={tc}
                alt="screenshot of tc"
                priority
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

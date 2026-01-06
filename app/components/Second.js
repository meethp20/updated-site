"use client";
import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import One from "@/public/onecard.png";
import Image from "next/image";
import Two from "@/public/twocard.png";
import Three from "@/public/threecard.png";
import Four from "@/public/fourcard.png";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

function Second() {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@limegreen.studio";
  };

  return (
    <motion.div
      className="w-full font-display bg-white py-12 md:py-16 px-4 md:px-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Decorative Background Blobs - Top Right & Bottom Left */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-200/40 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-200/40 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Headline */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-coolvetica tracking-wide text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            {/* <ScrollBoldHeadingWords text="
            Clients from all around the world <br/>
             trust us to bring their ideas to life  from
            <span className=font-bold" /> */}
            <ScrollReveal>
              Clients from all around the world <br />
              trust us to bring their ideas to life from zero to reality
            </ScrollReveal>
          </h2>
        </div>

        {/* Cards Section with proper spacing */}
        {/* Cards Section with proper spacing */}
        <div className="mb-10 md:mb-14 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ScrollVelocityContainer>
            <ScrollVelocityRow baseVelocity={5} direction={-1} className="py-4">
              <Image
                src={One}
                alt="Card"
                className="w-[300px] mx-[30px] inline-block rounded-lg object-cover"
              />
              <Image
                src={Two}
                alt="Card"
                className="w-[300px] mx-[30px] inline-block rounded-lg object-cover"
              />
              <Image
                src={Three}
                alt="Card"
                className="w-[300px] mx-[30px] inline-block rounded-lg object-cover"
              />
              <Image
                src={Four}
                alt="Card"
                className="w-[300px] mx-[30px] inline-block rounded-lg object-cover"
              />
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={handleEmailClick}
            className="group relative flex items-center rounded-full bg-black h-16 pl-8 pr-20"
          >
            {/* Text */}
            <span className="font-coolvetica tracking-wide text-white text-lg font-medium">
              More about us
            </span>

            {/* Right Circle */}
            <span className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5 text-black" />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Second;

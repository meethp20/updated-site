"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import lemon from "../../public/lemon.png";
import * as EmailValidator from "email-validator";
import ContactButton from "@/components/ui/ContactButton";

export default function StartShippingSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleContactClick = (e) => {
    if (!email || !EmailValidator.validate(email)) {
      e.preventDefault();
      setError(true);
      // Optional: alert if needed, but visual feedback is better
      // alert("Please enter a valid email address.");
    } else {
      setError(false);
    }
  };

  return (
    <section
      id="start-shipping"
      className="relative bg-white w-full py-0 md:py-16 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Decorative Background Blobs - top-right to bottom-left */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <motion.div
        className="w-full md:max-w-7xl md:mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative w-full md:rounded-3xl min-h-[700px] md:min-h-[600px] overflow-hidden"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Image - Full coverage */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={lemon}
              alt="Lemon tree with fresh lemons"
              fill
              className="object-cover md:rounded-3xl"
              priority
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-20 px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-20 lg:py-24 max-w-2xl flex items-center min-h-[700px] md:min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 md:space-y-8 w-full text-center md:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-coolvetica tracking-wide text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Start Shipping
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-2 md:space-y-3"
              >
                <p className="text-white/95 text-lg sm:text-xl md:text-xl font-light">
                  Turn your ideas into Products.
                </p>
                <p className="text-white/95 text-lg sm:text-xl md:text-xl font-light">
                  Stop sleeping over it and start shipping
                </p>
              </motion.div>

              {/* Contact Interface */}
              <div className="flex flex-col gap-4 pt-4 md:pt-6">
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(false);
                  }}
                  className={`w-full px-6 py-4 md:px-6 md:py-4 rounded-full bg-white/95 text-gray-800 placeholder:text-gray-400 text-base md:text-base focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg transition-all ${
                    error ? "ring-2 ring-red-500 bg-red-50" : ""
                  }`}
                />
                <div className="relative w-full inline-block rounded-full p-[0.5px] bg-gradient-to-t from-[#3D578D] to-[#111827]">
                  <ContactButton
                    to="limegreenstudios@gmail.com"
                    subject="Project Inquiry from Website"
                    body={`Hi Lime Green Team,\n\nI'm interested in discussing a project.\n\nMy email is: ${
                      email || "[Please Insert Email]"
                    }`}
                    onClick={handleContactClick}
                    className="w-full h-full flex items-center justify-center rounded-full bg-gradient-to-t from-[#111827] to-[#3D578D] px-8 py-4 md:px-8 md:py-4 text-white text-base font-semibold transition-all hover:opacity-90 shadow-lg"
                  >
                    Contact Us
                  </ContactButton>
                </div>
                {error && (
                  <p className="text-red-300 text-sm ml-4 -mt-2">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

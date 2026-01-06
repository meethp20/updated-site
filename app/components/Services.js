/* Services section: displays heading and animated grid of service cards */
"use client";
import ServiceCard from "./cards/ServiceCard";
import { motion } from "framer-motion";
import personalBranding from "@/public/service-cmp/personalbranding.png";
import productDev from "@/public/service-cmp/productdev.png";
export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };
  const services = [
    {
      title: "Personal\nBranding",
      description:
        "So whatever we have here as text is just a test of timeliness and if we can write a paragraph of text without interfering other.",
      imageSrc: personalBranding,
      emailSubject: "Personal Branding Inquiry",
    },
    {
      title: "Product\nDevelopment",
      description:
        "So whatever we have here as text is just a test of timeliness and if we can write a paragraph of text without interfering other.",
      imageSrc: productDev,
      emailSubject: "Product Development Inquiry",
      imageClassName: "scale-75 translate-x-[30%] translate-y-[10%]",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Decorative Background Blob - top-right to bottom-left */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="font-coolvetica tracking-wide text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20"
          variants={itemVariants}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto place-items-center"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full flex items-center justify-center"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageClassName={service.imageClassName}
                emailSubject={service.emailSubject}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

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
      title: (
        <>
          Personal <br className="md:hidden" /> Branding
        </>
      ),
      description:
        "So whatever we have here as text is just a test of timeliness and if we can write a paragraph of text without interfering other.",
      imageSrc: personalBranding,
      emailSubject: "Personal Branding Inquiry",
    },
    {
      title: (
        <>
          Product <br className="md:hidden" /> Development
        </>
      ),
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
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden border-0"
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
        <div className="text-center mb-14 md:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 text-lime-600 font-semibold tracking-wide uppercase text-xs md:text-sm"
          >
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
            Premium Services
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
          </motion.div>
          <motion.h2
            className="font-coolvetica tracking-wide text-gray-900 text-4xl md:text-5xl lg:text-6xl font-normal leading-tight"
            variants={itemVariants}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-lime-500 to-lime-300 text-gray-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg shadow-lg shadow-lime-500/20">
              Services
            </span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Two focused offers that turn ideas into outcomes.
          </motion.p>
        </div>

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

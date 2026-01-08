"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "./cards/BlogCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const BlogsSectionClient = React.memo(({ blogs = [] }) => {
  const clientCount = 12;
  return (
    <motion.section
      id="blogs"
      className="relative w-full pt-16 md:pt-24 pb-8 md:pb-12 bg-white overflow-hidden border-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Decorative Background Blobs - top-right to bottom-left */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 text-lime-600 font-semibold tracking-wide uppercase text-xs md:text-sm"
          >
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
            What’s cooking
            <span className="w-8 h-[2px] bg-lime-500 rounded-full" />
          </motion.div>
          <h2 className="font-coolvetica tracking-wide text-3xl md:text-4xl lg:text-5xl text-gray-900 font-normal leading-tight">
            Latest{" "}
            <span className="bg-gradient-to-r from-lime-400 to-lime-200 text-gray-900 px-4 md:px-5 py-1 md:py-2 inline-block font-bold rounded-lg shadow-lg shadow-lime-500/20">
              Blogs
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our thoughts on building products, design engineering, and shipping
            fast.
          </p>
        </div>

        {/* Grid: All blogs on desktop, only first on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogs.map((blog, index) => (
            <div
              key={blog.slug}
              className={`${index > 0 ? "hidden md:block" : "block"} w-full`}
            >
              <BlogCard {...blog} />
            </div>
          ))}
        </div>

        {/* This button is only visible on mobile as requested */}
        <div className="mt-10 flex justify-center mb-12 md:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white font-semibold shadow-sm hover:opacity-90 transition"
          >
            View all blogs
          </Link>
        </div>

        <div className="pt-16 md:pt-24 lg:pt-32 pb-4 md:pb-8 px-4">
          <ScrollReveal className="font-coolvetica tracking-tight text-3xl md:text-5xl lg:text-7xl text-black leading-[1.2] md:leading-[1.1] max-w-6xl mx-auto text-center">
            {`${clientCount} Clients from all around the world trust us to bring their ideas to life from zero to reality. Ready to be the ${
              clientCount + 1
            }th?`}
          </ScrollReveal>
        </div>
      </div>
    </motion.section>
  );
});

BlogsSectionClient.displayName = "BlogsSectionClient";

export default BlogsSectionClient;

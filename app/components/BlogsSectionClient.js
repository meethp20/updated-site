"use client";

import { motion } from "framer-motion";
import BlogCard from "./cards/BlogCard";

export default function BlogsSectionClient({ blogs = [] }) {
  return (
    <motion.section
      id="blogs"
      className="relative w-full py-16 md:py-24 bg-gray-50 overflow-hidden"
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
        <div className="text-center mb-16">
          <h2 className="font-coolvetica tracking-wide text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Latest{" "}
            <span className="bg-lime-400 text-black px-2 py-1 rounded-md inline-block">
              Insights
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Thoughts on building products, design engineering, and shipping
            fast.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="w-full md:max-w-[calc(50%-2rem)] lg:max-w-[calc(33.33%-2rem)] flex-grow-0 flex-shrink-0"
              style={{ flexBasis: "auto" }}
            >
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


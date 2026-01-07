import { getAllBlogs } from "@/lib/blog";
import BlogCard from "@/app/components/cards/BlogCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogsPage() {
  const blogs = getAllBlogs().sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-grow pt-12 pb-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Logo Header */}
          <div className="flex justify-center mb-16 -ml-40 md:-ml-64">
            <Link
              href="/"
              className="group flex items-center gap-4 px-5 py-2 bg-white border border-lime-200 rounded-full shadow-xl shadow-lime-900/5 transition-all duration-500 ease-out"
            >
              <ArrowLeft className="w-4 h-4 text-lime-500 -translate-x-1 transition-all duration-500" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-lime-600 uppercase tracking-widest leading-none mb-1 transition-colors duration-500">
                  Return to
                </span>
                <span className="text-sm font-coolvetica font-bold text-gray-900 leading-none">
                  Home Page
                </span>
              </div>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-lime-50 transition-colors duration-500">
                <Image
                  src="/LGS.svg"
                  alt="Lime Green Studio"
                  width={24}
                  height={24}
                  className="relative z-10"
                />
                <div className="absolute inset-0 rounded-full bg-lime-400/10 transition-colors duration-500" />
              </div>
            </Link>
          </div>

          {/* Hero / Header */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="font-coolvetica text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Our <span className="text-lime-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Insights, thoughts, and trends on building world-class products.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 place-items-start">
            {blogs.map((blog) => (
              <div key={blog.slug} className="w-full h-full">
                <BlogCard {...blog} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {blogs.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p>No posts found. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

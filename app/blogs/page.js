import { getAllBlogs } from "@/lib/blog";
import BlogCard from "@/app/components/cards/BlogCard";

export default function BlogsPage() {
  const blogs = getAllBlogs().sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero / Header */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
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

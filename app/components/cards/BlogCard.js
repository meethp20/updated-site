import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = React.memo(({ slug, title, description, date, image }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blogs/${slug}`}
      className="group flex flex-col h-full bg-white border border-gray-200 rounded-[2rem] overflow-hidden hover:shadow-xl hover:border-gray-500/20 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-7">
        {/* Date at Top */}
        <span className="text-sm font-medium text-gray-400 mb-3">
          {formattedDate}
        </span>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-lime-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        {/* Author Section at Bottom */}
        <div className="mt-auto flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100 shadow-sm">
            <Image
              src="/LGS.svg" // Using brand logo as default author avatar for now
              alt="Author"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-600">
            Lime Green Team
          </span>
        </div>
      </div>
    </Link>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;

import { getAllBlogs } from "@/lib/blog";
import BlogsSectionClient from "./BlogsSectionClient";

export default function BlogsSection() {
  // Get all blogs and sort by date (newest first)
  const blogs = getAllBlogs().sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return <BlogsSectionClient blogs={blogs} />;
}

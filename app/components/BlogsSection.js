import { getAllBlogs } from "@/lib/blog";
import BlogsSectionClient from "./BlogsSectionClient";

export default function BlogsSection() {
  // Get blogs and sort by date (newest first), take latest 3
  const blogs = getAllBlogs()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return <BlogsSectionClient blogs={blogs} />;
}

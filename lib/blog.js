import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_PATH = path.join(process.cwd(), "app/content/blogs");

export function getAllBlogs() {
  return fs.readdirSync(BLOGS_PATH).map((file) => {
    const slug = file.replace(".mdx", "");
    const content = fs.readFileSync(path.join(BLOGS_PATH, file), "utf8");
    const { data } = matter(content);

    return {
      slug,
      ...data,
    };
  });
}

export function getBlogBySlug(slug) {
  const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf8");
  return matter(content);
}

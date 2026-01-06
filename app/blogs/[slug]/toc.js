// Simple slug function to avoid dependencies
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") 
    .replace(/[^\w\-]+/g, "") 
    .replace(/\-\-+/g, "-"); 
}

export function extractTOC(content) {
  
  const headings = content.match(/#{2,4} .+/g) || [];
  return headings.map((heading) => {
    const text = heading.replace(/#{2,4} /, "").trim();
    const id = slugify(text);
    const level = heading.match(/#/g).length;
    return { text, id, level };
  });
}

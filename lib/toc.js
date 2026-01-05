/**
 * Extract Table of Contents from markdown content
 */
export function extractTOC(content) {
  // Match h2 (##) and h3 (###) headings
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // 2 for ##, 3 for ###
    const text = match[2];
    const id = text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");

    toc.push({ id, text, level });
  }

  return toc;
}

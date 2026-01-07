import React from "react";
import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { extractTOC } from "@/lib/toc";
import TableOfContents from "@/app/components/TableOfContents";
import ReadingProgressBar from "@/app/components/ReadingProgressBar";
import BackToTop from "@/app/components/BackToTop";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Utility for ID generation (must match lib/toc.js logic)
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
};

// Custom MDX Components
const mdxComponents = {
    h2: ({ children }: { children: React.ReactNode }) => (
        <>
            <hr className="my-12 border-gray-100" />
            <h2 id={slugify(children?.toString() || "")} className="font-coolvetica text-3xl font-bold mb-6 text-gray-900 scroll-mt-32">
                {children}
            </h2>
        </>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
        <h3 id={slugify(children?.toString() || "")} className="font-coolvetica text-2xl font-bold mt-10 mb-4 text-gray-900 scroll-mt-32">
            {children}
        </h3>
    ),
    p: ({ children }: { children: React.ReactNode }) => (
        <p className="text-lg text-gray-600 leading-relaxed mb-6">{children}</p>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
        <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2 marker:text-lime-500">{children}</ul>
    ),
    ol: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-decimal pl-5 mb-6 text-gray-600 space-y-2 marker:text-lime-500">{children}</ol>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
        <li className="pl-2">{children}</li>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-lime-500 pl-6 py-2 my-8 text-xl italic text-gray-700 bg-gray-50 rounded-r-lg">
            {children}
        </blockquote>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
        <code className="bg-gray-100 text-pink-600 rounded px-1.5 py-0.5 text-sm font-mono">{children}</code>
    ),
    pre: ({ children }: { children: React.ReactNode }) => (
        <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto mb-8 font-mono text-sm leading-relaxed border border-gray-800 shadow-sm">
            {children}
        </pre>
    ),
    img: (props: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img {...props} className="rounded-xl my-8 w-full border border-gray-100 shadow-sm" alt={props.alt || "Blog image"} />
    ),
};

export async function generateStaticParams() {
    const blogs = getAllBlogs();
    return blogs.map((blog: any) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { content, data } = getBlogBySlug(slug);
    const toc = extractTOC(content);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <ReadingProgressBar />

            <div className="pt-12 flex justify-center -ml-40 md:-ml-64">
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
                        <Image src="/LGS.svg" alt="Lime Green Studio" width={24} height={24} className="relative z-10" />
                        <div className="absolute inset-0 rounded-full bg-lime-400/10 transition-colors duration-500" />
                    </div>
                </Link>
            </div>

            <main className="flex-grow pt-10 pb-24 px-6 md:px-12 lg:px-16">
                <div className="max-w-[1400px] mx-auto">

                    <div className="lg:grid lg:grid-cols-[240px_1fr] gap-12 relative">

                        {/* Sidebar (TOC) - Left Side */}
                        <aside className="hidden lg:block h-full">
                            <div className="sticky top-10">
                                {/* Brand Logo */}
                                <div className="mb-8">
                                    <Link href="/" className="inline-block">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src="/LGS.svg"
                                                alt="Lime Green"
                                                width={40}
                                                height={40}
                                                className=""
                                            />
                                            <span className="text-xl font-coolvetica tracking-wide font-bold text-gray-900">
                                                Lime Green Studio
                                            </span>
                                        </div>
                                    </Link>
                                </div>

                                <Link
                                    href="/#blogs"
                                    className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors group uppercase tracking-wider"
                                >
                                    <ArrowLeft className="w-3 h-3 mr-2 transition-transform group-hover:-translate-x-1" />
                                    Back to Blog
                                </Link>
                                <TableOfContents toc={toc} />
                            </div>
                        </aside>

                        {/* Main Content Column */}
                        <div className="min-w-0">
                            {/* Header Area */}
                            <header className="max-w-[680px] mb-12 mx-auto">
                                {/* Mobile Logo */}
                                <div className="lg:hidden mb-6">
                                    <Link href="/" className="inline-block">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src="/LGS.svg"
                                                alt="Lime Green Studio"
                                                width={32}
                                                height={32}
                                            />
                                            <span className="text-lg font-coolvetica tracking-wide font-bold text-gray-900">
                                                Lime Green Studio
                                            </span>
                                        </div>
                                    </Link>
                                </div>

                                <Link
                                    href="/#blogs"
                                    className="lg:hidden inline-flex items-center text-xs font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors group uppercase tracking-wider"
                                >
                                    <ArrowLeft className="w-3 h-3 mr-2 transition-transform group-hover:-translate-x-1" />
                                    Back to Blog
                                </Link>

                                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 font-medium">
                                    <time dateTime={data.date}>
                                        {new Date(data.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                                    </time>
                                </div>

                                <h1 className="font-coolvetica tracking-wide text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.1]">
                                    {data.title}
                                </h1>

                                {data.tags && (
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {data.tags.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-600 border border-gray-200 rounded-full lowercase">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </header>

                            {/* Featured Image - Keeping likely wider than text for effect, or constrain? User said "w to be like 600px". Let's constrain it too for uniformity. */}
                            {data.image && (
                                <div className="relative w-full max-w-[680px] aspect-[16/9] mb-16 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm mx-auto">
                                    <Image
                                        src={data.image}
                                        alt={data.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Article Body */}
                            <article className="prose prose-lg md:prose-xl prose-gray max-w-[680px] mx-auto prose-headings:font-coolvetica prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-loose prose-a:text-lime-600 hover:prose-a:text-lime-700">
                                <MDXRemote source={content} components={mdxComponents} />
                            </article>
                        </div>

                    </div>
                </div>
            </main>

            <BackToTop />
        </div>
    );
}

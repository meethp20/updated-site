"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-lime-500 hover:bg-lime-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium group"
            aria-label="Back to top"
        >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            <span className="hidden sm:inline">Back to Top</span>
        </button>
    );
}

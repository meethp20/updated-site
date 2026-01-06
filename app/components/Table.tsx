"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Smartphone, Paintbrush, MessagesSquare } from "lucide-react";

const services = [
    {
        id: "web",
        title: "Web Dev",
        subtitle: "Websites & Web Apps",
        icon: Code2,
        description:
            "We build high-performance, responsive websites that convert. From simple landing pages to complex web applications, our code is clean, SEO-optimized, and scalable.",
    },
    {
        id: "android",
        title: "Android Dev",
        subtitle: "Native Mobile Apps",
        icon: Smartphone,
        description:
            "Native Android applications crafted for performance and user experience. We ensure your app runs smoothly across all devices while following the latest Material Design guidelines.",
    },
    {
        id: "logo",
        title: "Logo Creation",
        subtitle: "Brand Identity",
        icon: Paintbrush,
        description:
            "Your brand starts with a logo. We design memorable, versatile visual identities that resonate with your target audience and stand out in a crowded market.",
    },
    {
        id: "consultation",
        title: "Consultation",
        subtitle: "Strategy & Planning",
        icon: MessagesSquare,
        description:
            "Not sure where to start? We provide strategic technical consultation to help you define your MVP, choose the right tech stack, and plan your roadmap for success.",
    },
];

const CARD_WIDTH = 260;
const CARD_HEIGHT = 180;

export default function Table() {
    const [activeId, setActiveId] = useState(services[0].id);
    const activeService = services.find((s) => s.id === activeId)!;

    return (
        <section
            id="services"
            className="py-24 bg-white text-gray-900 relative overflow-hidden"
        >
            {/* Ambient glows — DO NOT TOUCH */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-lime-200/40 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-lime-200/40 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="font-coolvetica text-4xl md:text-5xl lg:text-6xl mb-6">
                        Why choose Lime Green?
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Everything you need to launch your product, all on one table.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-4 md:gap-6 mb-6 px-2 md:px-0">
                    {services.map((service) => {
                        const isActive = activeId === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                layout
                                onClick={() => setActiveId(service.id)}
                                className={`relative cursor-pointer flex flex-col items-center justify-center bg-white border overflow-hidden
                  ${isActive
                                        ? "border-lime-400 z-10 md:h-[260px]"
                                        : "border-gray-200 hover:border-gray-300 md:h-[260px]"
                                    }
                                    /* Mobile Sizing: Square aspect ratio */
                                    aspect-square md:aspect-auto
                                    w-full md:w-[260px]
                                `}
                                style={{
                                    borderRadius: isActive ? "999px" : "32px",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 26,
                                }}
                            >
                                {/* Active circular outline and Logo */}
                                {isActive && (
                                    <>
                                        <motion.div
                                            layoutId="activeOutline"
                                            className="absolute inset-0 border-2 border-lime-200 pointer-events-none z-20"
                                            style={{ borderRadius: "999px" }}
                                        />

                                        {/* Rotating Background Logo */}
                                        <motion.div
                                            initial={{ opacity: 0, rotate: 0 }}
                                            animate={{ opacity: 1, rotate: 360 }}
                                            transition={{
                                                opacity: { duration: 0.5 },
                                                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                                            }}
                                            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
                                            style={{ borderRadius: "999px" }}
                                        >
                                            <div className="w-24 h-24 opacity-[0.08] blur-[1px]">
                                                <img
                                                    src="/LGS.svg"
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </motion.div>
                                    </>
                                )}

                                {/* Card content */}
                                <div className="relative z-10 flex flex-col items-center text-center px-2 md:px-4">
                                    <service.icon
                                        className={`w-7 h-7 md:w-9 md:h-9 mb-2 transition-transform duration-300 ${isActive ? "text-lime-500 scale-110" : "text-gray-500"
                                            }`}
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    />

                                    <h3
                                        className={`text-sm md:text-lg font-semibold font-coolvetica tracking-wide leading-tight ${isActive ? "text-black" : "text-gray-700"
                                            }`}
                                    >
                                        {service.title}
                                    </h3>

                                    <p className="hidden md:block text-xs md:text-sm text-gray-500 mt-1">
                                        {service.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Description Panel (Docked & Stable) */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl px-10 py-7 shadow-sm">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeService.id}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.22 }}
                                className="text-base md:text-lg text-gray-700 leading-relaxed font-light text-center"
                            >
                                {activeService.description}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";
import { motion } from "framer-motion";
import { type Plan, PricingSection } from "@/components/pricing-section";

export default function PriceSectionWrapper() {
    return (
        <motion.section
            id="pricing"
            className="relative w-full py-16 md:py-24 bg-white overflow-hidden border-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
            {/* Decorative Background Blobs - top-left to bottom-right */}
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
                <PricingSection
                    description="Flexible options for every stage of your journey — from initial idea to scalable product."
                    heading="Plans for every stage"
                    plans={PLANS}
                    footer="Not sure which plan fits? We’ll help you choose."
                />
            </div>
        </motion.section>
    );
}

const PLANS: Plan[] = [
    {
        name: "Frontend Dev & Product Consultation",
        info: "Best for early ideas & validation",
        price: "$499",
        features: [
            { text: "Product & UI consultation" },
            { text: "Frontend development for the product" },
            { text: "Convert designs into a working interface" },
            { text: "Smooth animations & transitions" },
            { text: "Guidance when you need it" },
            { text: "10–30 day delivery" },
            { text: "Unlimited revisions until you're satisfied" },
        ],
        btn: {
            text: "Get Started",
            href: "#",
        },
    },
    {
        highlighted: true,
        name: "MVP Development",
        info: "Best for startups launching their first product",
        price: "$1,499",
        features: [
            { text: "Web/Mobile App + admin dashboard" },
            { text: "Custom UI design for your brand" },
            { text: "Convert designs into a fully working app" },
            { text: "Backend development (core logic & APIs)" },
            { text: "App Store & Play Store deployment" },
            { text: "End-to-end testing" },
            { text: "1–3 month delivery" },
            { text: "Unlimited revisions until you're satisfied" },
        ],
        btn: {
            text: "Get Started",
            href: "#",
        },
    },
    {
        name: "Full-Cycle App Development",
        info: "Best for production-ready products",
        price: "$2,599",
        features: [
            { text: "User app + business app + admin dashboard" },
            { text: "Premium, fully customized UI/UX" },
            { text: "Complete backend system built for scale" },
            { text: "Secure architecture & growth-ready setup" },
            { text: "Thorough testing for flawless performance" },
            { text: "App Store & Play Store publishing" },
            { text: "Full admin control & dashboards" },
            { text: "2–4 month delivery" },
            { text: "Unlimited revisions until you're satisfied" },
        ],
        btn: {
            text: "Get Started",
            href: "#",
        },
    },
];

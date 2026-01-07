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
                    description="Whether you're just starting out or growing fast, our flexible pricing has you covered — with no hidden costs."
                    heading="Plans that Scale with You"
                    plans={PLANS}
                />
            </div>
        </motion.section>
    );
}

const PLANS: Plan[] = [
    {
        name: "Basic",
        info: "For most individuals",
        price: {
            monthly: 7,
            yearly: Math.round(7 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Up to 3 Blog posts", tooltip: "100 tags" },
            { text: "Up to 3 Transcriptions" },
            { text: "Up to 3 Posts stored" },
            {
                text: "Markdown support",
                tooltip: "Export content in Markdown format",
            },
            {
                text: "Community support",
                tooltip: "Get answers your questions on discord",
            },
            {
                text: "AI powered suggestions",
                tooltip: "Get up to 100 AI powered suggestions",
            },
        ],
        btn: {
            text: "Start Your Free Trial",
            href: "#",
        },
    },
    {
        highlighted: true,
        name: "Pro",
        info: "For small businesses",
        price: {
            monthly: 17,
            yearly: Math.round(17 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Up to 500 Blog Posts", tooltip: "500 tags" },
            { text: "Up to 500 Transcriptions" },
            { text: "Up to 500 Posts stored" },
            {
                text: "Unlimited Markdown support",
                tooltip: "Export content in Markdown format",
            },
            { text: "SEO optimization tools" },
            { text: "Priority support", tooltip: "Get 24/7 chat support" },
            {
                text: "AI powered suggestions",
                tooltip: "Get up to 500 AI powered suggestions",
            },
        ],
        btn: {
            text: "Get started",
            href: "#",
        },
    },
    {
        name: "Business",
        info: "For large organizations",
        price: {
            monthly: 49,
            yearly: Math.round(49 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Unlimited Blog Posts" },
            { text: "Unlimited Transcriptions" },
            { text: "Unlimited Posts stored" },
            { text: "Unlimited Markdown support" },
            {
                text: "SEO optimization tools",
                tooltip: "Advanced SEO optimization tools",
            },
            { text: "Priority support", tooltip: "Get 24/7 chat support" },
            {
                text: "AI powered suggestions",
                tooltip: "Get up to 500 AI powered suggestions",
            },
        ],
        btn: {
            text: "Contact team",
            href: "#",
        },
    },
];

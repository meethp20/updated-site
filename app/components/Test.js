"use client";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/testimonials-columns";

const testimonials = [
  {
    text: "Lime Green Studios helped us ship our MVP in record time. The quality we received for the price was absolutely unbeatable.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Founder, TechFlow",
  },
  {
    text: "They built our entire website from scratch in just 4 weeks. It looks premium and performs perfectly. Best investment for our startup.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "CEO, NexaCorp",
  },
  {
    text: "We needed an MVP fast to pitch to investors. Lime Green delivered a polished product that helped us secure our seed round.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Co-Founder",
  },
  {
    text: "I was worried about agency costs, but Lime Green Studios offered incredible value. They shipped a high-end website at a fraction of the usual cost.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Marketing Director",
  },
  {
    text: "The team understood our vision immediately. They turned our concept into a live MVP faster than we thought possible.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Product Manager",
  },
  {
    text: "Smooth process from start to finish. They shipped our e-commerce site on time and within budget, with zero hidden costs.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Owner, Velvet & Co",
  },
  {
    text: "Working with them was a game-changer. We got a professional, market-ready MVP without burning through our runway.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Startup Founder",
  },
  {
    text: "Lime Green Studios proves you don't need to spend a fortune to get world-class design and development. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Director of Operations",
  },
  {
    text: "They helped us validate our idea with a quick, robust MVP. The speed and pricing were exactly what we needed to get started.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Entrepreneur",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Test() {
  return (
    <section
      id="testimonial"
      className="relative py-16 md:py-24 bg-gray-50 overflow-hidden"
    >
      {/* Decorative Background Blobs - top-left to bottom-right */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-lime-200/25 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="flex justify-center">
            {/* <div className="rounded-lg border px-4 py-1">Testimonials</div> */}
          </div>

          <h2 className="font-coolvetica tracking-wide font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900">
            What our{" "}
            <span className="bg-lime-400 text-black px-2 py-1 rounded-md inline-block">
              users
            </span>{" "}
            say
          </h2>

          <p className="text-center text-muted-foreground text-sm">
            See what our clients have to say about us.
          </p>
        </motion.div>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn duration={16} testimonials={firstColumn} />
          <TestimonialsColumn
            className="hidden md:block"
            duration={20}
            testimonials={secondColumn}
          />
          <TestimonialsColumn
            className="hidden lg:block"
            duration={18}
            testimonials={thirdColumn}
          />
        </div>
      </div>
    </section>
  );
}

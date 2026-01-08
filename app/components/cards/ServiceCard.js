/* Service card: gradient background, image, text, and dual CTA */
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ServiceCard = React.memo(
  ({ title, description, imageSrc, emailSubject, imageClassName = "" }) => {
    return (
      <div className="relative w-full max-w-[340px] h-[380px] rounded-3xl overflow-hidden group shadow-[0_36px_72px_-12px_rgba(47,255,0,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,_#eaffb8_0%,_#dfff99_4%,_#b9ff3a_42%,_#7aff00_66%,_#2fff00_100%)]" />
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            className={`object-cover opacity-30 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [mask-size:100%_100%] [mask-repeat:no-repeat] ${imageClassName}`}
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col justify-between h-full p-8">
          <div>
            <h3 className="tracking-tight text-[#166534] text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {title}
            </h3>
            <p className="text-[#14532d] text-sm tracking-tight max-w-[280px]">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <a
              href={`mailto:contact@limegreen.studio?subject=${encodeURIComponent(
                emailSubject
              )}`}
              className="inline-flex items-center bg-white/95 text-gray-900 px-2 pr-2 py-2 rounded-4xl text-xs font-medium shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Let's Ship...{"  "}
            </a>
            <a
              href={`mailto:contact@limegreen.studio?subject=${encodeURIComponent(
                emailSubject
              )}`}
              className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md hover:scale-105 active:scale-95"
              aria-label="Contact"
            >
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;

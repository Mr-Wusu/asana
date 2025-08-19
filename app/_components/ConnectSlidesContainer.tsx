"use client";
import ConnectCard from "./ConnectCard";
import brands from "@/lib/connect300";

export default function ConnectSlidesContainer() {
  // Create reversed array without mutating original
  const brandsReversed = [...brands].reverse();

  return (
    <>
      <main className="flex flex-col gap-4.5">
        {/* First sliding row - Right to Left */}
        <div className="slide-container">
          <div className="slide-track slide-right-to-left">
            {/* First copy of brands */}
            {brands.map((brand, index) => (
              <ConnectCard
                key={`rtl-first-${brand.alt}-${index}`}
                content={brand.image}
                alt={brand.alt}
              />
            ))}
            {/* Second copy of brands for seamless loop */}
            {brands.map((brand, index) => (
              <ConnectCard
                key={`rtl-second-${brand.alt}-${index}`}
                content={brand.image}
                alt={brand.alt}
              />
            ))}
          </div>
        </div>

        {/* Second sliding row - Left to Right */}
        <div className="slide-container">
          <div className="slide-track slide-left-to-right">
            {/* First copy of reversed brands */}
            {brandsReversed.map((brand, index) => (
              <ConnectCard
                key={`ltr-first-${brand.alt}-${index}`}
                content={brand.image}
                alt={brand.alt}
              />
            ))}
            {/* Second copy of reversed brands for seamless loop */}
            {brandsReversed.map((brand, index) => (
              <ConnectCard
                key={`ltr-second-${brand.alt}-${index}`}
                content={brand.image}
                alt={brand.alt}
              />
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .slide-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100%;
        }

        .slide-track {
          display: flex;
          gap: 1rem;
          width: fit-content;
        }

        .slide-right-to-left {
          animation: slideRightToLeft 60s linear infinite;
        }

        .slide-left-to-right {
          animation: slideLeftToRight 60s linear infinite;
        }

        .slide-right-to-left > :global(*),
        .slide-left-to-right > :global(*) {
          flex-shrink: 0;
        }

        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slideLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Pause animation on hover for better UX */
        .slide-container:hover .slide-track {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

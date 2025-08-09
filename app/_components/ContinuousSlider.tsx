"use client";

import Image from "next/image";

const brands = [
  "/brands/dell.webp",
  "/brands/accenture.webp",
  "/brands/amazon.webp",
  "/brands/jj.webp",
  "/brands/merck.webp",
];

export default function ContinuousSlider() {
  return (
    <div className="w-full h-[6rem] overflow-hidden relative">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="absolute flex items-center justify-center font-bold w-32 h-full animate-slide" // Better size for mobile
          style={{
            animationDelay: `3s`, // All brands start animating together after 3s delay
            left: `${index * 120}px`, // Spacing so 3 fit in mobile screen (~360px)
          }}
        >
          <Image
            src={brand}
            alt={`Brand ${index + 1}`}
            width={80}
            height={40}
            className="h-full object-contain" // Good size for mobile viewing
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-100vw - 128px)
            ); /* Updated to match w-32 (128px) */
          }
        }

        .animate-slide {
          animation: slide 15s linear infinite; /* Reduced to 15s for smoother flow */
        }
      `}</style>
    </div>
  );
}

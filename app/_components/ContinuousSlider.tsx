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
  // Double the brands array to create seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full h-[10rem] overflow-hidden relative -mt-3">
      <div className="flex absolute h-full animate-slide">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-full px-4 flex-shrink-0"
            style={{ width: "160px" }} // Reduced spacing, larger brands
          >
            <Image
              src={brand}
              alt={`Brand ${(index % brands.length) + 1}`}
              width={180}
              height={90}
              className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${160 * brands.length}px);
          }
        }

        .animate-slide {
          animation: slide 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

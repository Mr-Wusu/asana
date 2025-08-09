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
          className="absolute flex items-center justify-center font-bold w-60 h-full animate-slide"
          style={{
            animationDelay: `${index * 4}s`, // Stagger each brand by 4 seconds
            left: "100%", // Start off-screen right
          }}
        >
          <Image
            src={brand}
            alt={`Brand ${index + 1}`}
            width={100}
            height={50}
            className="h-full object-contain"
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100vw - 256px));
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
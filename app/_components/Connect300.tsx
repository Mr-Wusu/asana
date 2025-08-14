"use client";
import Button from "./Button";
import ConnectCard from "./ConnectCard";
import brands from "@/lib/connect300";

export default function Connect300() {
  return (
    <section className="pt-20 pb-96 flex flex-col gap-14 overflow-hidden">
      <header className="flex-col flex gap-5 px-5.5 ">
        <h2 className="text-3xl font-semibold w-full max-w-[28.75rem] ">
          Connect over 300+ integrations
        </h2>
        <p className="">
          Asana connects with the enterprise tools your organization already
          uses, right out of the box.
        </p>
        <Button className="w-fit px-6 py-3.5 font-semibold rounded-full hover:bg-[#333]">
          See all integrations
        </Button>
      </header>
      <main className="flex flex-col gap-4.5">
        <div className="slide-container">
          <div className="slide-track slide-right-to-left">
            {brands.map((brand, index) => (
              <ConnectCard
                key={`${brand.alt}-1-${index}`}
                content={brand.image}
                alt={brand.alt}
              />
            ))}
            {brands.map((brand, index) => (
              <ConnectCard
                key={`${brand.alt}-2-${index}`}
                content={brand.image}
                alt={brand.alt}
              />
            ))}
          </div>
        </div>
        <div className="slide-container">
          <div className="slide-track slide-left-to-right">
            {brands.reverse().map((brand, index) => (
              <ConnectCard
                key={`${brand.alt}-reverse-1-${index}`}
                content={brand.image}
                alt={brand.alt}
              />
            ))}
            {brands.map((brand, index) => (
              <ConnectCard
                key={`${brand.alt}-reverse-2-${index}`}
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
          animation: slideRightToLeft 150s linear infinite;
        }

        .slide-left-to-right {
          animation: slideLeftToRight 150s linear infinite;
        }

        .slide-right-to-left .ConnectCard,
        .slide-left-to-right .ConnectCard {
          flex-shrink: 0;
        }

        @keyframes slideRightToLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }

        @keyframes slideLeftToRight {
          from {
            transform: translateX(calc(-50% - 0.5rem));
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

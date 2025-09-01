import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function LinkAnime({
  children, goTo
}: Readonly<{
  children: React.ReactNode;
  goTo: string;
}>) {
  return (
    <div>
      <Link
        className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
        href={goTo}
        onMouseEnter={(e) => {
          const arrow = e.currentTarget.querySelector(
            ".arrow-icon"
          ) as HTMLElement;
          if (arrow) {
            arrow.style.animation = "bounceHorizontal 1.5s ease-out infinite";
          }
        }}
        onMouseLeave={(e) => {
          const arrow = e.currentTarget.querySelector(
            ".arrow-icon"
          ) as HTMLElement;
          if (arrow) {
            arrow.style.animation = "none";
          }
        }}
      >
        {children}
        <HiArrowRight className="text-lg arrow-icon" />
      </Link>

      <style jsx>{`
        @keyframes bounceHorizontal {
          0% {
            transform: translateX(0px);
          }
          25% {
            transform: translateX(8px);
          }
          50% {
            transform: translateX(-4px);
          }
          75% {
            transform: translateX(6px);
          }
          100% {
            transform: translateX(0px);
          }
        }
      `}</style>
    </div>
  );
}

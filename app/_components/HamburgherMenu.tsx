"use client";
import { useState } from "react";

export default function HamburgherMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-8 h-8 relative cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span
        className={`w-5 h-[2px] bg-black absolute top-1/2 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-y-[-1.5px] rotate-315 "
            : "-translate-y-2 "
        } `}
      />
      <span
        className={`w-5 h-[2px] bg-black absolute top-1/2 left-1/2 -translate-1/2 ${
          isOpen && "opacity-0"
        }`}
      />
      <span
        className={`w-5 h-[2px] bg-black absolute top-[0.9rem] left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 -rotate-315 " : "translate-y-2"
        }`}
      />
    </div>
  );
}

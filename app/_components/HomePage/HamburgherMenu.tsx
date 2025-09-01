"use client";
import { RootState } from "@/state/store";
import { toggleMenu, toggleDropdown } from "@/state/menu/menuSlice";
import { useSelector, useDispatch } from "react-redux";

export default function HamburgherMenu() {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const dispatch = useDispatch();

  function handleHamburgherClick() {
    if (isOpen) {
      // When closing, also close any open dropdowns
      dispatch(toggleDropdown(undefined));
    }
    dispatch(toggleMenu());
  }

  return (
    <div
      className="w-8 h-8 relative cursor-pointer z-50"
      onClick={handleHamburgherClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span
        className={`w-5 h-[2px] bg-black absolute top-1/2 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-[-1.5px] rotate-315 " : "-translate-y-2 "
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
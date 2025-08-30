"use client";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function Modal() {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  return (
    isOpen ? (
      <div className="w-full min-h-screen h-fit fixed bg-white text-black text-2xl flex flex-col justify-center items-center px-6 z-20">
        Testing first to see!
      </div>
    ) : null
  );
}

"use client";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import Solutions from "../Solutions/Solutions";

export default function Modal() {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  return isOpen ? (
    <div className="w-full h-screen fixed bg-white text-black flex flex-col items-center z-20 overflow-y-auto">
      <Product />
      <Solutions />
    </div>
  ) : null;
}

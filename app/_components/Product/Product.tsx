"use client";


import { FaAngleDown } from "react-icons/fa6";
import ProductPlatform from "./ProductPlatform";
import ProductCapabilities from "./ProductCapabilities";
import AllPlans from "./AllPlans";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import { toggleDropdown } from "@/state/menu/menuSlice";

export default function Product() {
  const dispatch = useDispatch();
  const isProductOpen = useSelector((state: RootState)=> state.menu.dropDown.product)


  function handleProductClick() {
    if (isProductOpen === "product") dispatch(toggleDropdown(undefined))
    if (isProductOpen === undefined) dispatch(toggleDropdown("product"))
  }

  return (
    <div className="flex flex-col gap-1 border-b border-b-[#f0f0ff]">
      <div
        className={`flex justify-between items-center w-screen px-6 cursor-pointer py-3  ${
          isProductOpen && "bg-[#f0f0ff]"
        }`}
        onClick={handleProductClick}
      >
        <h2 className="text-[1.1rem] font-semibold px-2">Product</h2>
        {!isProductOpen && <FaAngleDown className="text-xs" />}
      </div>
      {isProductOpen && (
        <div className="flex flex-col gap-4 text-[.925rem] font-semibold">
          <ProductPlatform />
          <ProductCapabilities />
          <AllPlans/>
        </div>
      )}
    </div>
  );
}

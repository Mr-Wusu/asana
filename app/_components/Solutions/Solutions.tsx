"use client";

import { FaAngleDown } from "react-icons/fa6";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import { toggleDropdown } from "@/state/menu/menuSlice";
import CompanyType from "./CompanyType";

export default function Product() {
  const dispatch = useDispatch();
  const isSolutionsOpen = useSelector(
    (state: RootState) => state.menu.dropDown.solutions
  );

  function handleSolutionsClick() {
    if (isSolutionsOpen === "solutions") dispatch(toggleDropdown(undefined));
    if (isSolutionsOpen === undefined) dispatch(toggleDropdown("solutions"));
  }

  return (
    <div className="flex flex-col gap-1 mt-2.5 border-b border-b-[#f0f0ff]">
      <div
        className={`flex justify-between items-center w-screen px-6 cursor-pointer py-3  ${
          isSolutionsOpen && "bg-[#f0f0ff]"
        }`}
        onClick={handleSolutionsClick}
      >
        <h2 className="text-[1.1rem] font-semibold px-2">Solutions</h2>
        {!isSolutionsOpen && <FaAngleDown className="text-xs" />}
      </div>
      {isSolutionsOpen && (
        <div className="flex flex-col gap-4 text-[.925rem] font-semibold">
          <CompanyType />

        </div>
      )}
    </div>
  );
}

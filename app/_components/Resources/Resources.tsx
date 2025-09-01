"use client";

import { FaAngleDown } from "react-icons/fa6";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import { toggleDropdown } from "@/state/menu/menuSlice";
import Learn from "./Learn";
import Discover from "./Discover";
import SupportServices from "./SupportServices";
import Templates from "./Templates";

export default function Resources() {
  const dispatch = useDispatch();
  const isResourcesOpen = useSelector(
    (state: RootState) => state.menu.dropDown.resources
  );

  function handleSolutionsClick() {
    if (isResourcesOpen === "resources") dispatch(toggleDropdown(undefined));
    if (isResourcesOpen === undefined) dispatch(toggleDropdown("resources"));
  }

  return (
    <div className="flex flex-col gap-1 border-b border-b-[#f0f0ff]">
      <div
        className={`flex justify-between items-center w-screen px-6 cursor-pointer py-3  ${
          isResourcesOpen && "bg-[#f0f0ff]"
        }`}
        onClick={handleSolutionsClick}
      >
        <h2 className="text-[1.1rem] font-semibold px-2">Resources</h2>
        {!isResourcesOpen && <FaAngleDown className="text-xs" />}
      </div>
      {isResourcesOpen && (
        <div className="flex flex-col gap-4 text-[.925rem] font-semibold">
          <Learn/>
          <Discover/>
          <SupportServices/>
          <Templates/>
        </div>
      )}
    </div>
  );
}

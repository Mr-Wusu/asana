import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineUser,
  HiOutlineFolder,
  HiOutlineSquaresPlus,
} from "react-icons/hi2";
import { LuClipboardList, LuGitCompareArrows } from "react-icons/lu";

import { GrUserExpert } from "react-icons/gr";


export default function ProductCapabilities() {
  return (
    <div className="flex flex-col gap-0.5 px-3">
      <h3 className="py-3.5 px-7 border-b tracking-wider border-b-[#f0f0ff] ">
        CAPABILITIES
      </h3>
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/product"
        >
          <HiOutlineSparkles className="text-xl" />
          <p>AI Studio</p>
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/product"
        >
          <HiOutlineUser className="text-xl" />
          <p>Goals and reporting</p>
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/product"
        >
          <HiOutlineFolder className="text-xl" />
          <p>Resource management</p>
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/product"
        >
          <HiOutlineSquaresPlus className="text-xl" />
          <p>App integration</p>
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/product"
        >
          <LuClipboardList className="text-xl" />
          <p>Project management</p>
        </Link>
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/product"
        >
          <LuGitCompareArrows className="text-xl" />
          <p>Workflows and automation</p>
        </Link>
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/product"
        >
          <GrUserExpert className="text-xl" />
          <p>Admin and security</p>
        </Link>
      </ul>
    </div>
  );
}

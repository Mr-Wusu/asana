import Link from "next/link";
import { MdOutlineEventNote } from "react-icons/md";
import { FiAward } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";

export default function AllPlans() {
  return (
    <div className="flex flex-col gap-0.5 px-3 bg-[#f1f1fd] pb-3.5">
      <h3 className="py-3.5 px-7 tracking-wider ">ALL PLANS</h3>
      <div className="h-[1px] w-5/6 mx-auto bg-[#dfdff0]" />
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/pricing"
        >
          <MdOutlineEventNote className="text-xl" />
          <p>Personal</p>
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/plan/starter"
        >
          <FiAward className="text-xl" />
          <p>Starter</p>
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/plan/advanced"
        >
          <BiShoppingBag className="text-xl" />
          <p>Advanced</p>
        </Link>
      </ul>
    </div>
  );
}
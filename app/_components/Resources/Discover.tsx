import Link from "next/link";

export default function Discover() {
  return (
    <div className="flex flex-col gap-0.5 px-3">
      <h3 className="py-3.5 px-7 border-b tracking-wider border-b-[#f0f0ff] text-sm">
        DISCOVER
      </h3>
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/resources"
        >
          Work management hub
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/customers"
        >
          Customer stories
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/events"
        >
          Events
        </Link>
      </ul>
    </div>
  );
}

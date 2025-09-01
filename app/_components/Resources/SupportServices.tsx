import Link from "next/link";

export default function SupportServices() {
  return (
    <div className="flex flex-col gap-0.5 px-3">
      <h3 className="py-3.5 px-7 border-b tracking-wider border-b-[#f0f0ff] text-sm">
        SUPPORT & SERVICES
      </h3>
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/support"
        >
          Get support
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/developers"
        >
          Developer support
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/partners"
        >
          Partners
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/customer-success"
        >
          Customer success
        </Link>
      </ul>
    </div>
  );
}

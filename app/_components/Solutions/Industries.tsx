import Link from "next/link";

export default function Industries() {
  return (
    <div className="flex flex-col gap-0.5 pl-3">
      <h3 className="py-3.5 px-7 border-b tracking-wider border-b-[#f0f0ff] text-sm">
        INDUSTRIES
      </h3>
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] "
          href="/industry/healthcare"
        >
          Healthcare
        </Link>

        <Link className="py-3 px-7 hover:bg-[#f4f9ff] " href="/industry/retail">
          Retail
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff]"
          href="/industry/financial-services"
        >
          Financial services
        </Link>
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff]"
          href="/industry/education"
        >
          Education
        </Link>
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff]"
          href="/industry/manufacturing"
        >
          Manufacturing
        </Link>
      </ul>
    </div>
  );
}

import Link from "next/link";

export default function CompanyType() {
  return (
    <div className="flex flex-col gap-0.5 pl-3">
      <h3 className="py-3.5 px-7 border-b tracking-wider border-b-[#f0f0ff] ">
        COMPANY TYPE
      </h3>
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link className="py-3 px-7 hover:bg-[#f4f9ff] " href="/enterprise">
          Enterprise
        </Link>

        <Link className="py-3 px-7 hover:bg-[#f4f9ff] " href="/small-business">
          Small business
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff]"
          href="/industry/nonprofit"
        >
          Non profit
        </Link>
      </ul>
    </div>
  );
}

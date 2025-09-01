import Link from "next/link";

export default function ProductPlatform() {
  return (
    <div className="flex flex-col gap-0.5 pl-3">
      <h3 className="py-3.5 px-7 border-b tracking-wider border-b-[#f0f0ff] text-sm">
        PLATFORM
      </h3>
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link className="py-3 px-7 hover:bg-[#f4f9ff] " href="/product">
          Product overview
        </Link>

        <Link className="py-3 px-7 hover:bg-[#f4f9ff] " href="/product/ai">
          Asana AI
        </Link>

        <Link className="py-3 px-7 hover:bg-[#f4f9ff]" href="/features">
          All features
        </Link>

        <Link className="py-3 px-7 hover:bg-[#f4f9ff] " href="/whats-new">
          Latest feature release
        </Link>
      </ul>
    </div>
  );
}
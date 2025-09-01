import Link from "next/link";
import LinkAnime from "../Extras/LinkAnime";

export default function UseCases() {
  return (
    <div className="flex flex-col gap-0.5 px-3 bg-[#f1f1fd] pb-3.5">
      <h3 className="py-3.5 px-7 tracking-wider text-sm">USE CASES</h3>
      <div className="h-[1px] w-[87%] mx-auto bg-[#dfdff0]" />
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/uses/goal-management"
        >
          Goal management
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/uses/organizational-planning"
        >
          Organizational planning
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/uses/project-intake"
        >
          Project intake
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/uses/resource-planning"
        >
          Resource planning
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/uses/product-launches"
        >
          Product launches
        </Link>
        <LinkAnime goTo="/uses">
          <p>View all use cases</p>
        </LinkAnime>
      </ul>
    </div>
  );
}

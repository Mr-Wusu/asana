import Link from "next/link";

import LinkAnime from "../Extras/LinkAnime";

export default function Templates() {
  return (
    <div className="flex flex-col gap-0.5 px-3 bg-[#f1f1fd] pb-3.5">
      <h3 className="py-3.5 px-7 tracking-wider text-sm">TEMPLATES</h3>
      <div className="h-[1px] w-5/6 mx-auto bg-[#dfdff0]" />
      <ul className="flex flex-col gap-2 pt-1.5">
        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/template/cross-functional-project-plan"
        >
          Project plans
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/templates/team-goals-planning-example"
        >
          Team goals & objectives
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/templates/business-continuity-plans"
        >
          Team continuity
        </Link>

        <Link
          className="py-3 px-7 hover:bg-[#f4f9ff] flex items-center gap-3.5"
          href="/templates/qbr-meeting-agenda"
        >
          Meeting agenda
        </Link>

        <LinkAnime goTo="/templates">
          <p>View all templates</p>
        </LinkAnime>
      </ul>
    </div>
  );
}

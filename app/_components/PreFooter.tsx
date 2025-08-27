import Link from "next/link";
import Logo from "./Logo";
import linksArr from "@/lib/pre-footer-links";

export default function PreFooter() {
  return (
    <div className="bg-[#690031] pb-10 pt-6">
      <div className="flex items-center pl-9 pt-2 justify-start gap-1.5 ">
        <Logo />
      </div>
      <div className="grid grid-cols-2 gap-y-10 mt-14 text-[#ece0e0] pl-8">
        {linksArr.map((linkObj) => (
          <div key={linkObj.title} className="flex flex-col gap-5">
            <h3 className="font-bold text-sm">{linkObj.title}</h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              {linkObj.links.map((linkText) => (
                <Link
                  key={linkText[0]}
                  href={`/${linkText[1]}`}
                  className="border-b-1 border-transparent hover:border-[#f0dcdc] transition-all duration-150 w-fit"
                >
                  {linkText[0]}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

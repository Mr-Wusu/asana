import { FaArrowRight } from "react-icons/fa6";
import StartedBox from "./StartedBox";
import awards from "@/lib/award";
import Image from "next/image";

export default function GettingStarted() {
  const instances = [
    {
      link: "/demo/main",
      h3: "Try the Asana demo",
      text: "See Asana in action",
    },
    {
      link: "/resources",
      h3: "Discover resources",
      text: "Help articles and tutorials",
    },
    {
      link: "/template",
      h3: "Start with a template",
      text: "Get started faster with a template",
    },
  ];
  return (
    <div className="flex flex-col gap-6.5 pb-28">
      <header className="flex-col flex gap-3 pl-5 bg-[#f0fcf3] pt-14">
        <h2 className="text-3xl font-semibold">Get started easily</h2>
        <p>
          Tour the platform, read a few deep dives, or kickstart your work
          management journey with the right template.
        </p>
      </header>
      <main className="flex flex-col gap-5.5">
        <div className="flex flex-col gap-2.5 bg-[#f0fcf3] pb-12">
          {instances.map((instance, i) => (
            <StartedBox instance={instance} key={i + 0} />
          ))}
        </div>
        <div className="flex flex-col gap-10 pt-5 bg-white px-6 ">
          {awards.map((award, i) => (
            <div key={`award-${i + 1}`} className="flex flex-col gap-4">
              <p className="font-semibold">{award.text}</p>
              <div className="flex items-center gap-2.5">
                <p className="font-semibold">Get the report</p>
                <div className="w-4 h-4 rounded-full grid place-content-center bg-black/85">
                  <FaArrowRight className="text-[0.5rem] text-white" />
                </div>
              </div>
              <div className="relative w-full h-52 rounded-md overflow-hidden">
                <Image src={award.image} alt="One of asana's awards" fill className="absolute"/>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

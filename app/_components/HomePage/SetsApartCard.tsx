import Image from "next/image";
import Button from "./Button";

export default function SetsApartCard() {
  return (
    <div className="w-full bg-[#0c125a] pl-5.5 pt-10 rounded-2xl overflow-hidden">
      <h2 className="text-2xl text-[#f7f7f7]">
        More clarity and accountability
      </h2>
      <p className="text-[#f7f7f7] mt-5 mb-8 w-[87%] text-sm">
        Connect strategic goals to the teams that help achieve them. Keep your
        company on track with AI working alongside your teams.
      </p>
      <Button className="bg-[#dad1d1] text-[#0c125a] rounded-full font-semibold px-6 py-3.5 mb-7">
        Learn about goals
      </Button>

      <div className="w-full h-[29rem] rounded-sm relative ">
        <Image src="/asana files/Globex-Icon.webp" alt="globex image" fill/>
      </div>

    </div>
  );
}

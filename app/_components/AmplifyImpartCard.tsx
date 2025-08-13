import Image from "next/image";
import Button from "./Button";

export default function AmplifyImpartCard() {
  return (
    <div className="w-full bg-[#0c125a] pl-5.5 pt-10 rounded-2xl overflow-hidden">
      <h2 className="text-2xl text-[#f7f7f7] pr-9">
        Amplify your impact with AI
      </h2>
      <p className="text-[#f7f7f7] mt-5 mb-8 w-[87%] text-sm">
        Let Asana AI handle work for you—with the full context of your
        business—so your teams can achieve their goals faster.
      </p>
      <Button className="bg-transparent  text-[#f7f7f7] rounded-full font-semibold px-6 py-3 mb-7 border border-[#f7f7f7] hover:bg-[#101872]">
        Meet Asana AI
      </Button>

      <div className="w-full h-[29rem] rounded-sm relative ">
        <Image
          src="/asana files/Amplify-Impact.webp"
          alt="Amplify image"
          fill
        />
      </div>
    </div>
  );
}

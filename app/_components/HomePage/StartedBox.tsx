import { FaArrowRight } from "react-icons/fa6";

interface StartedBoxProps {
  instance: {
    link: string;
    h3: string;
    text: string;
  };
}

export default function StartedBox({ instance }: StartedBoxProps) {
  return (
    <div className="flex justify-between py-3 px-4 items-center bg-white rounded-lg w-[90%] mx-auto active:bg-blue-100 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{instance.h3}</h3>
        <p className="text-gray-500">{instance.text}</p>
      </div>
      <div className="bg-black/85 text-white h-8 w-8 rounded-full grid place-content-center">
        <FaArrowRight className="text-xl" />
      </div>
    </div>
  );
}

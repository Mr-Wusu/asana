import Image from "next/image";

import { FaQuoteLeft, FaArrowRight } from "react-icons/fa6";

interface TopCompaniesCardProps {
  card: {
    logo: string;
    comment: string;
    staffName: string;
    position: string;
    bgColor: string;
    textColor: string;
    buttonBgColor: string;
  };
}

export default function TopCompaniesCard({ card }: TopCompaniesCardProps) {
  return (
    <main
      className={` relative h-[39.5rem] rounded-2xl border border-gray-200 w-[92%] max-w-[calc(100%-5rem)] overflow-hidden cursor-pointer"`}
    >
      <div className="w-full h-32 grid place-content-center">
        <div className="w-28 relative h-28">
          <Image src={card.logo} alt={`${card.logo}'s logo`} fill />
        </div>
      </div>
      <div
        className={`${card.bgColor} h-full ${card.textColor} flex flex-col gap-4 pl-5.5 pr-9 pt-11`}
      >
        <div className="relative">
          <FaQuoteLeft className="text-3xl absolute -top-7" />
          <p className="text-xl">{card.comment}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">{card.staffName}</p>
          <p className="text-[0.925rem]">{card.position}</p>
        </div>
        <div
          className={`absolute bottom-5 left-6 h-12 w-12 rounded-full text-[#fdf6fc] ${card.buttonBgColor} grid place-content-center border-2 border-transparent cursor-pointer hover:bg-amber-600 hover:border-amber-900 hover:border-2 transition-all duration-200`}
        >
          <FaArrowRight className="text-xl" />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";

interface UseCasesCardProps {
  card: { image: string; headerText: string; body: string };
}

export default function UseCasesCard({ card }: UseCasesCardProps) {
  return (
    <article className="w-full min-w-[280px] rounded-md border border-gray-200 pl-6 py-6 pr-7 flex flex-col gap-3 hover:bg-gray-50 transition-all duration-200">
      <div className="relative h-24 w-24">
        <Image src={card.image} alt={card.headerText} fill />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">{card.headerText}</h2>
          <p className="text-[0.9375rem] text-[#010101] max-w-[20rem] h-[5.5rem] ">
            {card.body}
          </p>
        </div>
        <div className="flex items-center gap-2 hover:text-gray-800 transition-all duration-300 cursor-pointer">
          <p className="font-semibold">See {card.headerText.toLowerCase()}</p>
          <div className="h-4 w-4 rounded-full bg-gray-900 text-white grid place-content-center text-[11px] hover:bg-gray-800 ">
            <p className="-mt-0.5 ml-[1px]">&rarr;</p>
          </div>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";

interface ConnectCardProps {
  content: string;
  alt: string;
}

export default function ConnectCard({ content, alt }: ConnectCardProps) {
  return (
    <div className= "px-3 py-3 rounded-sm bg-transparent border border-gray-200 flex items-center justify-center">
      <div className="relative grid place-content-center h-12  w-30 ">
        <Image src={content} alt={alt} fill />
      </div>
    </div>
  );
}

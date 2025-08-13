import AmplifyImpartCard from "./AmplifyImpartCard";
import SetsApartCard from "./SetsApartCard";

export default function AsanaApart() {
  return (
    <div className="pt-12 pb-44 bg-blue-200 px-5 flex flex-col gap-6.5">
      <h1 className="text-3xl font-semibold text-blue-950 ">
        What sets Asana apart
      </h1>
      <div className="flex-col flex gap-6">
        <SetsApartCard />
        <AmplifyImpartCard />
      </div>
    </div>
  );
}

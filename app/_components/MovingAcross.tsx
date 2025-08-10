import UseCasesCard from "./UseCasesCard";

export default function MovingAcross() {
  return (
    <div className="pb-44 flex flex-col gap-6">
      <h1 className="pl-7 text-3xl font-semibold w-5/6 max-w-[25rem]">
        See how Asana keeps work moving across use cases
      </h1>
      <div className="pl-4.5">
        <UseCasesCard />
      </div>
    </div>
  );
}

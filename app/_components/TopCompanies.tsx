import Button from "./Button";
import TopCompaniesSlide from "./TopCompaniesSlide";

export default function TopCompanies() {
  return (
    <section className="pt-12 pb-96 flex flex-col gap-14 overflow-hidden">
      <header className="flex-col flex gap-5 px-5.5 ">
        <h2 className="text-3xl font-semibold w-full max-w-[28.75rem] ">
          The world’s top companies trust Asana
        </h2>
        <Button className="w-fit px-6 py-3.5 bg-transparent border border-black text-black font-semibold rounded-full hover:bg-[#333] hover:text-white">
          See all case studies
        </Button>
      </header>
      <TopCompaniesSlide />
    </section>
  );
}

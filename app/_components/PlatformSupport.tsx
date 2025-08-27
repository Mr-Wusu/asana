import Button from "./Button";

export default function PlatformSupport() {
  return (
    <section className="bg-[#690031] pt-14 px-6 text-[#f0f0f0]  flex flex-col gap-12">
      <header className="flex flex-col gap-3.5">
        <h2 className="text-[1.9rem] tracking-tight leading-9 font-semibold w-[80%]">
          The only platform that can support your company at any scale
        </h2>
        <Button className="bg-[#f0f0f0] text-[#311100] font-semibold py-3 rounded-full w-fit px-5.5">
          Get started
        </Button>
      </header>
      <main className="flex flex-col gap-8">
        <p className="text-xs font-semibold pr-5">
          1. Accurate as of December 2023, includes free and paid users.
        </p>
        <div className="w-full h-[1px] bg-[rgba(185,94,52,0.19)]" />
      </main>
    </section>
  );
}

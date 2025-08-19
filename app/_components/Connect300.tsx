import Button from "./Button";

import ConnectSlidesContainer from "./ConnectSlidesContainer";

export default function Connect300() {
  return (
    <section className="pt-20 flex flex-col gap-14 overflow-hidden">
      <header className="flex-col flex gap-5 px-5.5 ">
        <h2 className="text-3xl font-semibold w-full max-w-[28.75rem] ">
          Connect over 300+ integrations
        </h2>
        <p className="">
          Asana connects with the enterprise tools your organization already
          uses, right out of the box.
        </p>
        <Button className="w-fit px-6 py-3.5 font-semibold rounded-full hover:bg-[#333]">
          See all integrations
        </Button>
      </header>
      <ConnectSlidesContainer />
    </section>
  );
}

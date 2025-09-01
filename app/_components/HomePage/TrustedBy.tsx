import ContinuousSlider from "./ContinuousSlider";

export default function TrustedBy() {
  return (
    <section className="flex flex-col gap-3 bg-white pt-10  overflow-hidden">
      <h2 className="text-xl pl-6 font-semibold w-3/4">
        Trusted by leading organizations worldwide
      </h2>
      <ContinuousSlider />
    </section>
  );
}

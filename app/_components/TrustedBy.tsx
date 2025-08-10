import ContinuousSlider from "./ContinuousSlider";

export default function TrustedBy() {
  return (
    <section className="flex flex-col gap-3 bg-white pt-10  overflow-hidden">
      <h2 className="text-center text-xl font-semibold">
        Trusted by leading organizations worldwide
      </h2>
      <ContinuousSlider />
    </section>
  );
}

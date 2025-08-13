import Hero from "./_components/Hero";
import MovingAcross from "./_components/MovingAcross";
import TrustedBy from "./_components/TrustedBy";
import AsanaApart from "./_components/AsanaApart";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col">
      <Hero />
      <TrustedBy />
      <MovingAcross />
      <AsanaApart />
    </div>
  );
}

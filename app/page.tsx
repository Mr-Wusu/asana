import Hero from "./_components/Hero";
import MovingAcross from "./_components/MovingAcross";
import TrustedBy from "./_components/TrustedBy";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col gap-12">
     <Hero/>
     <TrustedBy />
     <MovingAcross/>
    </div>
  );
}
